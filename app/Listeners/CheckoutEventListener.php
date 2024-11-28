<?php

namespace App\Listeners;

use App\Events\CheckoutEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CheckoutEventListener implements ShouldQueue
{
    use InteractsWithQueue;

    public $checkout;

    public function failed(CheckoutEvent $event, $exception)
    {
        Log::error('CheckoutEvent failed!', ['Error' => $exception, 'Checkout' => $event->checkout]);
    }

    public function handle(CheckoutEvent $event)
    {
        $this->{$event->method}($event);
    }

    private function created(CheckoutEvent $event)
    {
        $this->updateQuantity($event->checkout);
    }

    private function deleted(CheckoutEvent $event)
    {
        $this->updateQuantity($event->checkout, true);
    }

    private function restored(CheckoutEvent $event)
    {
        $this->updateQuantity($event->checkout);
    }

    private function updated(CheckoutEvent $event)
    {
        $this->updateQuantity($event->original, true);
        $this->updateQuantity($event->checkout);
    }

    private function updateQuantity($checkout, $in = false)
    {
        foreach ($checkout->items as $item) {
            $item->item->{$in ? 'increment' : 'decrement'}('quantity', $item->quantity);
            // if ($in) {
            //     $item->item->increment('quantity', $item->quantity);
            // } else {
            //     $item->item->decrement('quantity', $item->quantity);
            //     // $item->item->update(['quantity' => $item->item->quantity - $item->quantity]);
            // }
        }
    }
}
