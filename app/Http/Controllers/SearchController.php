<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Customer;
use App\Models\Supplier;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function customers(Request $request)
    {
        if ($request->id) {
            return Customer::where('id', $request->id)->get(['id as value', 'name as label']);
        }

        return Customer::search($request->search)->take(10)->get(['id as value', 'name as label']);
    }

    public function items(Request $request)
    {
        return Item::search($request->search)->take(10)->get(['id as value', 'name as label', 'code', 'quantity']);
    }

    public function suppliers(Request $request)
    {
        if ($request->id) {
            return Supplier::where('id', $request->id)->get(['id as value', 'name as label']);
        }

        return Supplier::search($request->search)->take(10)->get(['id as value', 'name as label']);
    }
}
