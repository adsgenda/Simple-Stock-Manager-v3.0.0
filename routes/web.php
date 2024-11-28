<?php

use Inertia\Inertia;
use App\Http\Controllers;
use Illuminate\Support\Facades\Route;

// use Illuminate\Foundation\Application;
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin'       => Route::has('login'),
//         'canRegister'    => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion'     => PHP_VERSION,
//     ]);
// });

Route::middleware([
    'installed',
    'web',
    'language',
    'inertia',
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::redirect('/home', '/');
    Route::redirect('/dashboard', '/');
    Route::get('/', [Controllers\HomeController::class, 'index'])->name('dashboard');
    Route::get('/language/{language}', [Controllers\AjaxController::class, 'language']);
    Route::get('/language/{language}', [Controllers\AjaxController::class, 'language']);
    Route::get('/activity', [Controllers\HomeController::class, 'activity'])->name('activity');
    Route::get('/settings', [Controllers\SettingController::class, 'index'])->name('settings');
    Route::post('/read/excel', [Controllers\ExcelController::class, 'read'])->name('read.excel');
    Route::post('settings', [Controllers\SettingController::class, 'store'])->name('settings.store');

    Route::extendedResources([
        'items'      => Controllers\ItemController::class,
        'roles'      => Controllers\RoleController::class,
        'users'      => Controllers\UserController::class,
        'checkins'   => Controllers\CheckinController::class,
        'checkouts'  => Controllers\CheckoutController::class,
        'categories' => Controllers\CategoryController::class,
        'customers'  => Controllers\CustomerController::class,
        'suppliers'  => Controllers\SupplierController::class,
    ]);

    Route::portResources([
        'items'      => Controllers\ItemPortController::class,
        'categories' => Controllers\CategoryPortController::class,
        'customers'  => Controllers\CustomerPortController::class,
        'suppliers'  => Controllers\SupplierPortController::class,
    ]);

    Route::prefix('/search')->group(function () {
        Route::post('items', [Controllers\SearchController::class, 'items'])->name('search.items');
        Route::post('customers', [Controllers\SearchController::class, 'customers'])->name('search.customers');
        Route::post('suppliers', [Controllers\SearchController::class, 'suppliers'])->name('search.suppliers');
    });

    // Route::get('/items/labels', [Controllers\ItemController::class, 'labels'])->name('items.labels');
    Route::get('/attachments/{attachment?}', [Controllers\AttachmentController::class, 'download'])->name('attachments.download');
    Route::delete('/attachments/{attachment?}', [Controllers\AttachmentController::class, 'destroy'])->name('attachments.destroy');
});
