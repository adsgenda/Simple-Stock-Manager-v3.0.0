<?php

namespace App\Models;

use App\Traits\syncableItems;
use App\Traits\HasAttachments;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Checkout extends Model
{
    use HasAttachments;
    use HasFactory;
    use syncableItems;

    public $fillable = ['date', 'reference', 'customer_id', 'attachment', 'note', 'user_id', 'account_id'];

    public static $hasReference = true;

    protected $setUser = true;

    protected $with = ['attachments', 'customer', 'user:id,name,email'];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function delete()
    {
        $this->items->each->delete();

        return parent::delete();
    }

    public function forceDelete()
    {
        log_activity(__choice('delete_text', ['record' => __('Checkout')]), $this, $this, 'Checkout');
        $this->items->each->forceDelete();

        return parent::forceDelete();
    }

    public function items()
    {
        return $this->hasMany(CheckoutItem::class)->withTrashed();
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['trashed'] ?? null, fn ($q, $t) => $q->{$t . 'Trashed'}())
            ->when($filters['search'] ?? null, fn ($query, $search) => $query->search($search))
            ->when($filters['start_date'] ?? null, fn ($query, $date) => $query->where('date', '>=', $date))
            ->when($filters['end_date'] ?? null, fn ($query, $date) => $query->where('date', '<=', $date));
    }

    public function scopeSearch($query, $s)
    {
        $query->where(fn ($q) => $q->where('reference', 'like', "%{$s}%")->orWhere('note', 'like', "%{$s}%")->orWhereRelation('customer', 'name', 'like', "%{$s}%"));
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected static function booted()
    {
        static::addGlobalScope('mine', function (Builder $builder) {
            $user = auth()->user();
            if (! $user->hasRole('admin') && ! $user->view_all) {
                $builder->where('user_id', $user->id);
            }
        });

        static::creating(function ($model) {
            if (! $model->account_id) {
                $model->account_id = getAccountId();
            }
            if ($model->setHash && ! $model->hash) {
                $model->hash = uuid4();
            }
            if ($model->setUser && ! $model->user_id) {
                $model->user_id = auth()->user()->id;
            }
            if ($model::$hasReference && ! $model->reference) {
                $model->reference = get_reference($model);
            }
        });
    }
}
