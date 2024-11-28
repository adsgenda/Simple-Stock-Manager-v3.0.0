<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Checkin;
use Illuminate\Http\Request;
use App\Actions\Tec\PrepareOrder;
use App\Http\Requests\CheckinRequest;
use App\Http\Resources\CheckinResource;
use App\Http\Resources\CheckinCollection;

class CheckinController extends Controller
{
    public function create()
    {
        return Inertia::render('Checkin/Form');
    }

    public function destroy(Request $request, Checkin $checkin)
    {
        if ($checkin->{$request->force ? 'forceDelete' : 'delete'}()) {
            event(new \App\Events\CheckinEvent($checkin, 'deleted'));

            return redirect()->route('checkins.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Checkin'), 'action' => __('deleted')]));
        }

        return back()->with('error', __('The record can not be deleted.'));
    }

    public function destroyMany(Request $request)
    {
        $count = $failed = 0;
        foreach (Checkin::whereIn('id', $request->selection)->get() as $checkin) {
            if ($checkin->{$request->force ? 'forceDelete' : 'delete'}()) {
                event(new \App\Events\CheckinEvent($checkin, 'deleted'));
                $count++;
            } else {
                $failed++;
            }
        }

        return back()->with('message', __('The task has completed, {count} deleted and {failed} failed.', ['count' => $count, 'failed' => $failed]));
    }

    public function destroyPermanently(Checkin $checkin)
    {
        if ($checkin->forceDelete()) {
            event(new \App\Events\CheckinEvent($checkin, 'deleted'));

            return redirect()->route('checkins.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Checkin'), 'action' => __('permanently deleted')]));
        }

        return back()->with('error', __('The record can not be deleted.'));
    }

    public function edit(Checkin $checkin)
    {
        return Inertia::render('Checkin/Form', [
            'edit' => new CheckinResource($checkin->load('items', 'supplier')),
        ]);
    }

    public function index(Request $request)
    {
        $filters = $request->all('search', 'start_date', 'end_date', 'trashed');

        return Inertia::render('Checkin/List', [
            'filters'  => $filters,
            'checkins' => new CheckinCollection(
                Checkin::with(['supplier', 'items'])->filter($filters)->orderByDesc('date')->paginate()->withQueryString()
            ),
        ]);
    }

    public function restore(Checkin $checkin)
    {
        $checkin->restore();
        $checkin->items->each->restore();
        event(new \App\Events\CheckinEvent($checkin, 'restored'));

        return back()->with('message', __choice('{record} has been {action}.', ['record' => __('Checkin'), 'action' => __('restored')]));
    }

    public function store(CheckinRequest $request)
    {
        $form = $request->validated();
        $checkin = (new PrepareOrder($form, new Checkin))->save();
        $checkin->saveAttachments($request->file('attachments'));
        event(new \App\Events\CheckinEvent($checkin, 'created'));

        return redirect()->route('checkins.index')
            ->with('message', __choice('{record} has been {action}.', ['record' => __('Checkin'), 'action' => __('created')]));
    }

    public function update(CheckinRequest $request, Checkin $checkin)
    {
        $form = $request->validated();
        $original = $checkin->load('items.item')->replicate();
        $checkin = (new PrepareOrder($form, $checkin))->save();
        $checkin->saveAttachments($request->file('attachments'));
        event(new \App\Events\CheckinEvent($checkin, 'updated', $original));

        return redirect()->route('checkins.index')
            ->with('message', __choice('{record} has been {action}.', ['record' => __('Checkin'), 'action' => __('updated')]));
    }
}
