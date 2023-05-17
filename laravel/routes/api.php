<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CityController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

 
Route::get('/city/{api_token}', [CityController::class, 'index'])->name('cities')->middleware('api_token');
Route::get('/city/{api_token}/{id}', [CityController::class, 'show'])->name('city')->middleware('api_token');
