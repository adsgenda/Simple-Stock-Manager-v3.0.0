<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Account extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function activity()
    {
        return $this->hasMany(Activity::class);
    }

    public function checkins()
    {
        return $this->hasMany(Checkin::class);
    }

    public function checkouts()
    {
        return $this->hasMany(Checkout::class);
    }

    public function customers()
    {
        return $this->hasMany(Customer::class);
    }

    public function roles()
    {
        return $this->hasMany(Role::class);
    }

    public function suppliers()
    {
        return $this->hasMany(Supplier::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
