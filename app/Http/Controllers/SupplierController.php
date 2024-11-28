<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Supplier;
use Illuminate\Http\Request;
use App\Http\Requests\SupplierRequest;
use App\Http\Resources\SupplierResource;
use App\Http\Resources\SupplierCollection;

class SupplierController extends Controller
{
    public function create()
    {
        return Inertia::render('Supplier/Form');
    }

    public function destroy(Request $request, Supplier $supplier)
    {
        if ($supplier->{$request->force ? 'forceDelete' : 'delete'}()) {
            return redirect()->route('suppliers.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Supplier'), 'action' => __('deleted')]));
        }

        return back()->with('error', __('The record can not be deleted.'));
    }

    public function destroyMany(Request $request)
    {
        $count = $failed = 0;
        foreach (Supplier::whereIn('id', $request->selection)->get() as $supplier) {
            $supplier->{$request->force ? 'forceDelete' : 'delete'}() ? $count++ : $failed++;
        }

        return back()->with('message', __('The task has completed, {count} deleted and {failed} failed.', ['count' => $count, 'failed' => $failed]));
    }

    public function destroyPermanently(Supplier $supplier)
    {
        if ($supplier->forceDelete()) {
            return redirect()->route('suppliers.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Supplier'), 'action' => __('permanently deleted')]));
        }

        return back()->with('error', __('The record can not be deleted.'));
    }

    public function edit(Supplier $supplier)
    {
        return Inertia::render('Supplier/Form', [
            'edit' => new SupplierResource($supplier),
        ]);
    }

    public function index(Request $request)
    {
        $filters = $request->all('search', 'trashed');

        return Inertia::render('Supplier/List', [
            'filters'   => $filters,
            'suppliers' => new SupplierCollection(
                Supplier::filter($filters)->orderByDesc('id')->paginate()->withQueryString()
            ),
        ]);
    }

    public function restore(Supplier $supplier)
    {
        $supplier->restore();

        return back()->with('message', __choice('{record} has been {action}.', ['record' => __('Supplier'), 'action' => __('restored')]));
    }

    public function store(SupplierRequest $request)
    {
        Supplier::create($request->validated());

        return redirect()->route('suppliers.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Supplier'), 'action' => __('created')]));
    }

    public function update(SupplierRequest $request, Supplier $supplier)
    {
        $supplier->update($request->validated());

        return redirect()->route('suppliers.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Supplier'), 'action' => __('updated')]));
    }
}
