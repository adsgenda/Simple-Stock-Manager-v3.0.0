<?php

namespace App\Listeners;

use App\Events\CheckinEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CheckinEventListener implements ShouldQueue
{
    use InteractsWithQueue;

    public $checkin;

    public function failed(CheckinEvent $event, $exception)
    {
        Log::error('CheckinEvent failed!', ['Error' => $exception, 'Checkin' => $event->checkin]);
    }

    public function handle(CheckinEvent $event)
    {
        $this->{$event->method}($event);
    }

    private function created(CheckinEvent $event)
    {
        $this->updateQuantity($event->checkin);
    }

    private function deleted(CheckinEvent $event)
    {
        $this->updateQuantity($event->checkin, true);
    }

    private function restored(CheckinEvent $event)
    {
        $this->updateQuantity($event->checkin);
    }

    private function updated(CheckinEvent $event)
    {
        $this->updateQuantity($event->original, true);
        $this->updateQuantity($event->checkin);
    }

    private function updateQuantity($checkin, $out = false)
    {
        foreach ($checkin->items as $item) {
            $item->item->{$out ? 'decrement' : 'increment'}('quantity', $item->quantity);
            // if ($in) {
            //     $item->item->increment('quantity', $item->quantity);
            // } else {
            //     $item->item->decrement('quantity', $item->quantity);
            //     // $item->item->update(['quantity' => $item->item->quantity - $item->quantity]);
            // }
        }
    }
}
