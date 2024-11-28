<?php

use Illuminate\Support\Facades\Route;
use Tecdiary\Installer\Http\Middleware\CanInstall;
use Tecdiary\Installer\Http\Controllers\InstallController;

Route::prefix('install')->middleware(['web', CanInstall::class])->group(function () {
    Route::get('/', [InstallController::class, 'index']);
    Route::post('demo', [InstallController::class, 'demo']);
    Route::get('check', [InstallController::class, 'show']);
    Route::post('check', [InstallController::class, 'show']);
    Route::post('save', [InstallController::class, 'save']);
    Route::post('finalize', [InstallController::class, 'finalize']);
});
