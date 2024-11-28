<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Checkout;
use Illuminate\Http\Request;
use App\Actions\Tec\PrepareOrder;
use App\Http\Requests\CheckoutRequest;
use App\Http\Resources\CheckoutResource;
use App\Http\Resources\CheckoutCollection;

class CheckoutController extends Controller
{
    public function create()
    {
        return Inertia::render('Checkout/Form');
    }

    public function destroy(Request $request, Checkout $checkout)
    {
        if ($checkout->{$request->force ? 'forceDelete' : 'delete'}()) {
            event(new \App\Events\CheckoutEvent($checkout, 'deleted'));

            return redirect()->route('checkouts.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Checkout'), 'action' => __('deleted')]));
        }

        return back()->with('error', __('The record can not be deleted.'));
    }

    public function destroyMany(Request $request)
    {
        $count = $failed = 0;
        foreach (Checkout::whereIn('id', $request->selection)->get() as $checkout) {
            if ($checkout->{$request->force ? 'forceDelete' : 'delete'}()) {
                event(new \App\Events\CheckoutEvent($checkout, 'deleted'));
                $count++;
            } else {
                $failed++;
            }
        }

        return back()->with('message', __('The task has completed, {count} deleted and {failed} failed.', ['count' => $count, 'failed' => $failed]));
    }

    public function destroyPermanently(Checkout $checkout)
    {
        if ($checkout->forceDelete()) {
            event(new \App\Events\CheckoutEvent($checkout, 'deleted'));

            return redirect()->route('checkouts.index')->with('message', __choice('{record} has been {action}.', ['record' => __('Checkout'), 'action' => __('permanently deleted')]));
        }

        return back()->with('error', __('The record can not be deleted.'));
    }

    public function edit(Checkout $checkout)
    {
        return Inertia::render('Checkout/Form', [
            'edit' => new CheckoutResource($checkout->load('items', 'customer')),
        ]);
    }

    public function index(Request $request)
    {
        $filters = $request->all('search', 'start_date', 'end_date', 'trashed');

        return Inertia::render('Checkout/List', [
            'filters'   => $filters,
            'checkouts' => new CheckoutCollection(
                Checkout::with(['customer', 'items'])->filter($filters)->orderByDesc('date')->paginate()->withQueryString()
            ),
        ]);
    }

    public function restore(Checkout $checkout)
    {
        $checkout->restore();
        $checkout->items->each->restore();
        event(new \App\Events\CheckoutEvent($checkout, 'restored'));

        return back()->with('message', __choice('{record} has been {action}.', ['record' => __('Checkout'), 'action' => __('restored')]));
    }

    public function store(CheckoutRequest $request)
    {
        $form = $request->validated();
        $checkout = (new PrepareOrder($form, new Checkout))->save();
        $checkout->saveAttachments($request->file('attachments'));
        event(new \App\Events\CheckoutEvent($checkout, 'created'));

        return redirect()->route('checkouts.index')
            ->with('message', __choice('{record} has been {action}.', ['record' => __('Checkout'), 'action' => __('created')]));
    }

    public function update(CheckoutRequest $request, Checkout $checkout)
    {
        $form = $request->validated();
        $original = $checkout->load('items.item')->replicate();
        $checkout = (new PrepareOrder($form, $checkout))->save();
        $checkout->saveAttachments($request->file('attachments'));
        event(new \App\Events\CheckoutEvent($checkout, 'updated', $original));

        return redirect()->route('checkouts.index')
            ->with('message', __choice('{record} has been {action}.', ['record' => __('Checkout'), 'action' => __('updated')]));
    }
}
