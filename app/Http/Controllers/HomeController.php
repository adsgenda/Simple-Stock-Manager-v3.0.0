<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Inertia\Inertia;
use App\Models\Checkin;
use App\Models\Activity;
use App\Models\Checkout;
use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Resources\ActivityCollection;

class HomeController extends Controller
{
    public function activity(Request $request)
    {
        return Inertia::render('Activity/List', [
            'filters'    => $request->all('search'),
            'activities' => new ActivityCollection(Activity::filter($request->only('search'))->orderByDesc('id')->paginate()),
        ]);
    }

    public function index()
    {
        $last = now()->subDays(60);
        $before = now()->subDays(30);
        $data = Item::selectRaw('COUNT(*) as items')
            ->addSelect(['checkins' => Checkin::selectRaw('COUNT(id) as checkins')
                ->whereBetween('date', [$before, now()])])
            ->addSelect(['checkouts' => Checkout::selectRaw('COUNT(id) as checkouts')
                ->whereBetween('date', [$before, now()])])
            ->addSelect(['previous_checkins' => Checkin::selectRaw('COUNT(id) as checkins')
                ->whereBetween('date', [$last, $before])])
            ->addSelect(['previous_checkouts' => Checkout::selectRaw('COUNT(id) as checkouts')
                ->whereBetween('date', [$last, $before])])
            ->addSelect(['customers' => Customer::selectRaw('COUNT(id) as customers')])->first();

        return Inertia::render('Dashboard', ['data' => $data]);
    }
}
