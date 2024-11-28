<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Rap2hpoutre\FastExcel\FastExcel;
use Illuminate\Support\Facades\Storage;

class SupplierPortController extends Controller
{
    public function export()
    {
        return (new FastExcel($this->supplierGenerator()))->download('suppliers.xlsx');
    }

    public function import()
    {
        return Inertia::render('Supplier/Import');
    }

    public function save(Request $request)
    {
        $request->validate(['excel' => 'required|file|mimes:xls,xlsx']);

        $path = $request->file('excel')->store('imports');
        try {
            $suppliers = (new FastExcel)->import(Storage::path($path), function ($line) {
                if (! $line['name'] || (! $line['email'] && ! $line['phone'])) {
                    throw new \Exception(__('name along email or phone are required.'));
                }

                return Supplier::updateOrCreate([
                    'name'  => $line['name'],
                    'email' => $line['email'] ?? null,
                    'phone' => $line['phone'] ?? null,
                ], [
                    'company' => $line['company'] ?? null,
                    'cf1'     => $line['cf1'] ?? null,
                    'cf2'     => $line['cf2'] ?? null,
                ]);
            });
        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage());
        }

        return redirect()->route('suppliers.index')->with('message', __choice('{count} {records} record(s) has imported or updated.', ['records' => 'Supplier', 'count' => $suppliers->count()]));
    }

    private function supplierGenerator()
    {
        foreach (Supplier::cursor() as $supplier) {
            yield [
                'name'    => $supplier->name,
                'email'   => $supplier->email,
                'phone'   => $supplier->phone,
                'company' => $supplier->company,
                'cf1'     => $supplier->cf1,
                'cf2'     => $supplier->cf2,
            ];
        }
    }
}
