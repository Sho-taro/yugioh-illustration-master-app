<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getData/frameTypes', [\App\Http\Controllers\Api\GetDataController::class , 'getFrameTypesData'])->name('api.getData.frameTypes');

Route::post('/gallery/filterdcardsnum', \App\Http\Controllers\Gallery\FilteredCardsNumController::class)->name('gallery.filterdcardsnum');

Route::post('/tags/addCards', \App\Http\Controllers\Api\UserTag\AddCardsStoreController::class)->name('api.addCards');
Route::post('/tags/removeCards', \App\Http\Controllers\Api\UserTag\RemoveCardsStoreController::class)->name('api.removeCards');
Route::post('/tags/releasedCards', [\App\Http\Controllers\Api\UserTag\ThumbnailController::class, 'getReleasedCards'])->name('api.getReleasedCards');