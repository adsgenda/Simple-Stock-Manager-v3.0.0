<?php

namespace App\Models;

use App\Traits\LogActivity;
use App\Traits\Paginatable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Activitylog\LogOptions;
use Laravel\Jetstream\HasProfilePhoto;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use HasRoles;
    use LogActivity;
    use Notifiable;
    use Paginatable;
    use SoftDeletes;
    use TwoFactorAuthenticatable;

    protected $appends = ['profile_photo_url', 'all_permissions'];

    protected $casts = ['email_verified_at' => 'datetime'];

    protected $fillable = [
        'name', 'email', 'password', 'view_all', 'edit_all', 'extra_attributes', 'email_verified_at',
    ];

    protected $hidden = ['password', 'remember_token', 'two_factor_recovery_codes', 'two_factor_secret'];

    protected $with = ['account', 'roles:id,name'];

    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    public function checkins()
    {
        return $this->hasMany(Checkin::class);
    }

    public function checkouts()
    {
        return $this->hasMany(Checkout::class);
    }

    public function delete()
    {
        if ($this->checkins()->exists() || $this->checkouts()->exists()) {
            return false;
        }

        return parent::delete();
    }

    public function forceDelete()
    {
        if ($this->checkins()->exists() || $this->checkouts()->exists()) {
            return false;
        }

        log_activity(__choice('delete_text', ['record' => 'User']), $this, $this, 'User');
        $this->roles()->detach();

        return parent::forceDelete();
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logOnlyDirty();
    }

    public function getAllPermissionsAttribute()
    {
        return $this->getAllPermissions()->pluck('name');
    }

    public function getRoleNamesAttribute()
    {
        return $this->roles->pluck('name');
    }

    public function resolveRouteBinding($value, $field = null)
    {
        return in_array(SoftDeletes::class, class_uses($this))
            ? $this->where($this->getRouteKeyName(), $value)->withTrashed()->first()
            : parent::resolveRouteBinding($value);
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(
                fn ($q) => $q->where('name', 'like', '%' . $search . '%')
                    ->orWhere('email', 'like', '%' . $search . '%')
                    ->orWhere('phone', 'like', '%' . $search . '%')
            );
        })->when($filters['role'] ?? null, fn ($q, $role) => $q->whereRelation('roles', 'name', $role))
            ->when($filters['trashed'] ?? null, function ($query, $trashed) {
                if ($trashed === 'with') {
                    $query->withTrashed();
                } elseif ($trashed === 'only') {
                    $query->onlyTrashed();
                }
            });
    }

    public function scopeOfAccount($query, $account_id = null)
    {
        return $query->where('account_id', $account_id ?? auth()->user()->account_id ?? 1);
    }

    protected static function booted()
    {
        static::creating(function ($model) {
            if (! $model->account_id) {
                $model->account_id = auth()->user() ? auth()->user()->account_id : 1;
            }
        });
    }

    protected function defaultProfilePhotoUrl()
    {
        return 'https://ui-avatars.com/api/?name=' . urlencode($this->name) . '&color=E5E7EB&background=1F2937';
    }
}
