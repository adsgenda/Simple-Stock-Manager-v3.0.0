<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Rap2hpoutre\FastExcel\FastExcel;
use Illuminate\Support\Facades\Storage;

class ExcelController extends Controller
{
    public function read(Request $request)
    {
        $request->validate(['excel' => 'required|file|mimes:xls,xlsx']);

        $path = $request->file('excel')->store('imports');
        try {
            $items = (new FastExcel)->import(Storage::path($path), function ($line) {
                if (! $line['code'] || ! $line['quantity']) {
                    throw new \Exception(__('Item code & quantity are required.'));
                }
                $item = Item::where('code', $line['code'])->first();
                if (! $item) {
                    throw new \Exception(__('Item not found for code: {code}', ['code' => $line['code']]));
                }

                return ['item_id' => $item->id, 'name' => $item->name,  'code' => $item->code,  'unit' => $item->unit, 'quantity' => $line['quantity']];
            });

            return $items;
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }
}
