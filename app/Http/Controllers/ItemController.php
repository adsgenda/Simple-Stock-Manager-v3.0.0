<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\ItemRequest;
use App\Http\Resources\ItemResource;
use App\Http\Resources\ItemCollection;

class ItemController extends Controller
{
    public function create()
    {
        return Inertia::render('Item/Form', ['categories' => Category::all(['id as value', 'name as label'])]);
    }

    public function destroy(Request $request, Item $item)
    {
        if ($item->{$request->force ? 'forceDelete' : 'delete'}()) {
            return redirect()->route('items.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Item'), 'action' => __('deleted')]));
        }

        return back()->with('error', __('The record can not be deleted.'));
    }

    public function destroyMany(Request $request)
    {
        $count = $failed = 0;
        foreach (Item::withTrashed()->whereIn('id', $request->selection)->get() as $item) {
            $item->{$request->force ? 'forceDelete' : 'delete'}() ? $count++ : $failed++;
        }

        return back()->with('message', __('The task has completed, {count} deleted and {failed} failed.', ['count' => $count, 'failed' => $failed]));
    }

    public function destroyPermanently(Item $item)
    {
        if ($item->forceDelete()) {
            return redirect()->route('items.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Item'), 'action' => __('permanently deleted')]));
        }

        return back()->with('error', __('The record can not be deleted.'));
    }

    public function edit(Item $item)
    {
        return Inertia::render('Item/Form', [
            'edit'       => new ItemResource($item),
            'categories' => Category::all(['id as value', 'name as label']),
        ]);
    }

    public function index(Request $request)
    {
        $filters = $request->all('search', 'alerts', 'trashed');

        return Inertia::render('Item/List', [
            'filters' => $filters,
            'items'   => new ItemCollection(
                Item::with('category')->filter($filters)->orderByDesc('id')->paginate()->withQueryString()
            ),
        ]);
    }

    public function restore(Item $item)
    {
        $item->restore();

        return back()->with('message', __choice('{record} has been {action}.', ['record' => __('Item'), 'action' => __('restored')]));
    }

    public function store(ItemRequest $request)
    {
        Item::create($request->validated());

        return redirect()->route('items.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Item'), 'action' => __('created')]));
    }

    public function update(ItemRequest $request, Item $item)
    {
        $item->update($request->validated());

        return redirect()->route('items.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Item'), 'action' => __('updated')]));
    }
}
