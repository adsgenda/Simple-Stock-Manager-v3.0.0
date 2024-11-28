<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use Rap2hpoutre\FastExcel\FastExcel;
use Illuminate\Support\Facades\Storage;

class ItemPortController extends Controller
{
    public function export()
    {
        return (new FastExcel($this->itemGenerator()))->download('items.xlsx');
    }

    public function import()
    {
        return Inertia::render('Item/Import');
    }

    public function save(Request $request)
    {
        $request->validate(['excel' => 'required|file|mimes:xls,xlsx']);

        $path = $request->file('excel')->store('imports');
        $symbologies = ['CODE128', 'CODE39', 'EAN8', 'EAN13', 'UPC'];
        try {
            $items = (new FastExcel)->import(Storage::path($path), function ($line) use ($symbologies) {
                if (! $line['name'] || (! $line['code'] && ! $line['symbology'])) {
                    throw new \Exception(__('name, code, symbology and category_code are required.'));
                }

                return Item::updateOrCreate([
                    'code' => $line['code'],
                ], [
                    'name'           => $line['name'],
                    'symbology'      => in_array($line['symbology'], $symbologies) ? mb_strtoupper($line['symbology']) : 'CODE128',
                    'quantity'       => $line['quantity'] ?? 0,
                    'alert_quantity' => $line['alert_quantity'] ?? null,
                    'unit'           => $line['unit'] ?? null,
                    'photo'          => $line['photo'] ?? null,
                    'category_id'    => $line['category_code'] ? Category::where('code', $line['category_code'])->sole()?->id : null,
                ]);
            });
        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage());
        }

        return redirect()->route('items.index')->with('message', __choice('{count} {records} record(s) has imported or updated.', ['records' => 'Item', 'count' => $items->count()]));
    }

    private function itemGenerator()
    {
        foreach (Item::with('category')->cursor() as $item) {
            yield [
                'name'           => $item->name,
                'code'           => $item->code,
                'symbology'      => $item->symbology ?? 'CODE128',
                'category_code'  => $item->category?->code ?: '',
                'quantity'       => $item->quantity ?? 0,
                'unit'           => $item->unit ?? '',
                'photo'          => $item->photo ?? '',
                'alert_quantity' => $item->alert_quantity ?? '',
            ];
        }
    }
}
