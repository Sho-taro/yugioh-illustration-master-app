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

Route::get('/getData/frameTypes', [\App\Http\Controllers\Api\GetDataController::class , 'getFrameTypeData'])->name('api.getData.frameTypes');
Route::get('/getData/races', [\App\Http\Controllers\Api\GetDataController::class , 'getRaceData'])->name('api.getData.races');
Route::get('/getData/attributes', [\App\Http\Controllers\Api\GetDataController::class , 'getAttributeData'])->name('api.getData.attributes');
Route::get('/getData/levelOrRanks', [\App\Http\Controllers\Api\GetDataController::class , 'getLevelOrRankData'])->name('api.getData.levelOrRanks');
Route::get('/getData/linkValues', [\App\Http\Controllers\Api\GetDataController::class , 'getLinkValueData'])->name('api.getData.linkValues');
Route::get('/getData/playTypes/spell', [\App\Http\Controllers\Api\GetDataController::class , 'getSpellPlayTypeData'])->name('api.getData.playTypes.spell');
Route::get('/getData/playTypes/trap', [\App\Http\Controllers\Api\GetDataController::class , 'getTrapPlayTypeData'])->name('api.getData.playTypes.trap');
Route::get('/getData/periods', [\App\Http\Controllers\Api\GetDataController::class , 'getPeriodData'])->name('api.getData.periods');


Route::post('/gallery/filteredcardsnum', \App\Http\Controllers\Gallery\FilteredCardsNumController::class)->name('gallery.filteredcardsnum');

Route::post('/tags/addCards', \App\Http\Controllers\Api\UserTag\AddCardsStoreController::class)->name('api.addCards');
Route::post('/tags/removeCards', \App\Http\Controllers\Api\UserTag\RemoveCardsStoreController::class)->name('api.removeCards');
Route::post('/tags/releasedCards', [\App\Http\Controllers\Api\UserTag\ThumbnailController::class, 'getReleasedCards'])->name('api.getReleasedCards');