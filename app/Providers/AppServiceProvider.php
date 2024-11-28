<?php

namespace App\Providers;

use Exception;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (env('APP_INSTALLED') && function_exists('get_settings')) {
            try {
                $settings = get_settings();
                $dot_settings = get_dot_keys(true);
                foreach ($dot_settings as &$value) {
                    $value = $settings[$value];
                }

                config($dot_settings);
            } catch (Exception $e) {
                logger()->error($e->getMessage());
            }
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->extend(
            \Illuminate\Translation\Translator::class,
            fn ($translator) => new \App\Helpers\Translator($translator->getLoader(), $translator->getLocale())
        );

        // $this->app->extend(\Illuminate\Pagination\LengthAwarePaginator::class, fn ($paginator) => $paginator->onEachSide(2));
    }
}
