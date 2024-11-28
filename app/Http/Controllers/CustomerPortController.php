<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Customer;
use Illuminate\Http\Request;
use Rap2hpoutre\FastExcel\FastExcel;
use Illuminate\Support\Facades\Storage;

class CustomerPortController extends Controller
{
    public function export()
    {
        return (new FastExcel($this->customerGenerator()))->download('customers.xlsx');
    }

    public function import()
    {
        return Inertia::render('Customer/Import');
    }

    public function save(Request $request)
    {
        $request->validate(['excel' => 'required|file|mimes:xls,xlsx']);

        $path = $request->file('excel')->store('imports');
        try {
            $customers = (new FastExcel)->import(Storage::path($path), function ($line) {
                if (! $line['name'] || (! $line['email'] && ! $line['phone'])) {
                    throw new \Exception(__('name along email or phone are required.'));
                }

                return Customer::updateOrCreate([
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

        return redirect()->route('customers.index')->with('message', __choice('{count} {records} record(s) has imported or updated.', ['records' => 'Customer', 'count' => $customers->count()]));
    }

    private function customerGenerator()
    {
        foreach (Customer::cursor() as $customer) {
            yield [
                'name'    => $customer->name,
                'email'   => $customer->email,
                'phone'   => $customer->phone,
                'company' => $customer->company,
                'cf1'     => $customer->cf1,
                'cf2'     => $customer->cf2,
            ];
        }
    }
}
