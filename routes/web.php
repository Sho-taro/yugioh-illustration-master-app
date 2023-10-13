<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// ログイン関連
Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';



// ここから独自のルーティング
// admin
Route::get('/admin/card', \App\Http\Controllers\Admin\Card\IndexController::class)->name('admin.card.index');
Route::post('/admin/card', \App\Http\Controllers\Admin\Card\StoreController::class)->name('admin.card.store');
Route::get('/admin/card/create', \App\Http\Controllers\Admin\Card\CreateController::class)->name('admin.card.create');
Route::get('/admin/card/{id}', \App\Http\Controllers\Admin\Card\ShowController::class)->name('admin.card.show');
Route::put('/admin/card/{id}', \App\Http\Controllers\Admin\Card\UpdateController::class)->name('admin.card.update');
Route::delete('/admin/card/{id}', \App\Http\Controllers\Admin\Card\DestroyController::class)->name('admin.card.destroy');


// game
Route::get('/', \App\Http\Controllers\IndexController::class)->name('index');