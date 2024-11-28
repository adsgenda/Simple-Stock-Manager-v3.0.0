<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Item extends Model
{
    use HasFactory;

    public $fillable = ['code', 'name', 'category_id', 'quantity', 'symbology', 'unit', 'photo', 'alert_quantity'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function checkinItems()
    {
        return $this->hasMany(CheckinItem::class);
    }

    public function checkoutItems()
    {
        return $this->hasMany(CheckoutItem::class);
    }

    public function delete()
    {
        if ($this->checkinItems()->exists() || $this->checkoutItems()->exists()) {
            return false;
        }

        return parent::delete();
    }

    public function forceDelete()
    {
        if ($this->checkinItems()->exists() || $this->checkoutItems()->exists()) {
            return false;
        }

        log_activity(__choice('delete_text', ['record' => __('Item')]), $this, $this, 'Item');

        return parent::forceDelete();
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['trashed'] ?? null, fn ($q, $t) => $q->{$t . 'Trashed'}())
            ->when($filters['search'] ?? null, fn ($query, $search) => $query->search($search))
            ->when($filters['alerts'] ?? null, fn ($q) => $q->whereColumn('alert_quantity', '>=', 'quantity'));
    }

    public function scopeSearch($query, $s)
    {
        $query->where(fn ($q) => $q->where('code', 'like', "%{$s}%")->orWhere('name', 'like', "%{$s}%"));
    }
}
