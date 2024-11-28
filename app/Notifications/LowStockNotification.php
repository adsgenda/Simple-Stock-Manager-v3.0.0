<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class LowStockNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(public $items) {}

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $message = (new MailMessage)
            ->greeting('Hello ' . $notifiable->name . ',')
            ->line('The following items have reached a low stock level.');

        $table = '<table class="table bordered" width="100%"><thead><tr><th>Code</th><th>Name</th><th>Quantity</th><th>Alert Quantity</th></tr></thead><tbody>';
        foreach ($this->items as $item) {
            $table .= "<tr><td>{$item->code}</td><td>{$item->name}</td><td class='text-right'>{$item->quantity}</td><td class='text-right'>{$item->alert_quantity}</td></tr>";
        }
        $table .= '</tbody></table>';
        $message->line(str($table)->toHtmlString());

        $message->action('View Alerts on App', url('/items?alerts=yes'))
            ->line('Thank you!')
            ->salutation(str('Regards,<br />' . (get_settings('name') ?? config('app.name')))->toHtmlString());

        return $message;
    }
}
