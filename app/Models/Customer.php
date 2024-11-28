<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Customer extends Model
{
    use HasFactory;

    public $fillable = ['name', 'email', 'phone', 'company', 'cf1', 'cf2', 'account_id'];

    public function checkouts()
    {
        return $this->hasMany(Checkout::class);
    }

    public function delete()
    {
        if ($this->checkouts()->exists()) {
            return false;
        }

        return parent::delete();
    }

    public function forceDelete()
    {
        if ($this->checkouts()->exists()) {
            return false;
        }

        log_activity(__choice('delete_text', ['record' => __('Customer')]), $this, $this, 'Customer');

        return parent::forceDelete();
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['trashed'] ?? null, fn ($q, $t) => $q->{$t . 'Trashed'}())
            ->when($filters['search'] ?? null, fn ($query, $search) => $query->search($search));
    }

    public function scopeSearch($query, $s)
    {
        $query->where(fn ($q) => $q->where('name', 'like', "%{$s}%")->orWhere('email', 'like', "%{$s}%")->orWhere('phone', 'like', "%{$s}%"));
    }
}
