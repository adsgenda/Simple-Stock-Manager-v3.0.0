<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        Registered::class                  => [SendEmailVerificationNotification::class],
        \App\Events\CheckinEvent::class    => [\App\Listeners\CheckinEventListener::class],
        \App\Events\CheckoutEvent::class   => [\App\Listeners\CheckoutEventListener::class],
        \App\Events\AttachmentEvent::class => [\App\Listeners\AttachmentEventListener::class],
    ];

    public function boot()
    {
        //
    }

    public function shouldDiscoverEvents()
    {
        return false;
    }
}
