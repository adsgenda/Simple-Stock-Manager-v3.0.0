<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class CheckoutItem extends Model
{
    use HasFactory;

    public $fillable = ['checkout_id', 'item_id', 'code', 'name', 'quantity', 'account_id'];

    public $timestamps = false;

    public function checkout()
    {
        return $this->belongsTo(Checkout::class);
    }

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
