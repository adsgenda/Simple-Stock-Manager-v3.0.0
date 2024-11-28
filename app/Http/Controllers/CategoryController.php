<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CategoryCollection;

class CategoryController extends Controller
{
    public function create()
    {
        return Inertia::render('Category/Form');
    }

    public function destroy(Request $request, Category $category)
    {
        if ($category->{$request->force ? 'forceDelete' : 'delete'}()) {
            return redirect()->route('categories.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Category'), 'action' => __('deleted')]));
        }

        return back()->with('error', __('The record can not be deleted.'));
    }

    public function destroyMany(Request $request)
    {
        $count = $failed = 0;
        foreach (Category::withTrashed()->whereIn('id', $request->selection)->get() as $category) {
            $category->{$request->force ? 'forceDelete' : 'delete'}() ? $count++ : $failed++;
        }

        return back()->with('message', __('The task has completed, {count} deleted and {failed} failed.', ['count' => $count, 'failed' => $failed]));
    }

    public function destroyPermanently(Category $category)
    {
        if ($category->forceDelete()) {
            return redirect()->route('categories.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Category'), 'action' => __('permanently deleted')]));
        }

        return back()->with('error', __('The record can not be deleted.'));
    }

    public function edit(Category $category)
    {
        return Inertia::render('Category/Form', [
            'edit' => new CategoryResource($category),
        ]);
    }

    public function index(Request $request)
    {
        $filters = $request->all('search', 'trashed');

        return Inertia::render('Category/List', [
            'filters'    => $filters,
            'categories' => new CategoryCollection(
                Category::filter($filters)->orderByDesc('id')->paginate()->withQueryString()
            ),
        ]);
    }

    public function restore(Category $category)
    {
        $category->restore();

        return back()->with('message', __choice('{record} has been {action}.', ['record' => __('Category'), 'action' => __('restored')]));
    }

    public function store(CategoryRequest $request)
    {
        Category::create($request->validated());

        return redirect()->route('categories.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Category'), 'action' => __('created')]));
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $category->update($request->validated());

        return redirect()->route('categories.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Category'), 'action' => __('updated')]));
    }
}
