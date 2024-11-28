<?php

namespace App\Actions\Tec;

use App\Models\Item;

class AlertsData
{
    public static function items()
    {
        return Item::whereColumn('alert_quantity', '>=', 'quantity')->count();
        // return Item::selectRaw('COUNT(id) as low_items where quantity <= alert_quantity')
        //     ->addSelect(['reorder_items' => Item::selectRaw('COUNT(id) as low_items where quantity <= reorder_quantity')])->first();
    }
}
