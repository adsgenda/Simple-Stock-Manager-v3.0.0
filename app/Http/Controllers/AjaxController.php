<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Support\Facades\File;

class AjaxController extends Controller
{
    public function alerts()
    {
        $data = Item::selectRaw('COUNT(id) as low_items where quantity <= alert_quantity')
            ->addSelect(['reorder_items' => Item::selectRaw('COUNT(id) as low_items where quantity <= reorder_quantity')])->first();

        return response()->json(['data' => $data]);
    }

    public function language($language)
    {
        $langFiles = collect(json_decode(File::get(lang_path('languages.json')))->available)->pluck('value')->all();
        if (! in_array($language, $langFiles)) {
            return back()->with('error', __('Language is not available yet.'));
        }
        app()->setlocale($language);
        session(['language' => $language]);

        return back()->with('message', __('Language has been changed.'));
    }
}
