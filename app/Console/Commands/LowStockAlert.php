<?php

namespace App\Console\Commands;

use App\Models\Item;
use App\Models\User;
use Illuminate\Console\Command;
use App\Notifications\LowStockNotification;

class LowStockAlert extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:low-stock-alert';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send low stock alert to admin users.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $admins = User::role('admin')->get();

        $items = Item::select(['id', 'code', 'name', 'quantity', 'alert_quantity'])
            ->whereColumn('alert_quantity', '>=', 'quantity')->get();

        if ($items->isNotEmpty()) {
            foreach ($admins as $admin) {
                $this->line("Sending low stock alert to {$admin->name}");
                $admin->notify(new LowStockNotification($items));
            }
        }
    }
}
