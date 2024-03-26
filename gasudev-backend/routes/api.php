<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\UserController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::apiResources([
    'users' => UserController::class,
    'news' => NewsController::class,
]);

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
});