<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class CheckinItem extends Model
{
    use HasFactory;

    public $fillable = ['checkin_id', 'item_id', 'code', 'name', 'quantity', 'account_id'];

    public $timestamps = false;

    public function checkin()
    {
        return $this->belongsTo(Checkin::class);
    }

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
