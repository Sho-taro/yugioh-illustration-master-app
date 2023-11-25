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
Route::middleware(['admin'])->group(function () {
    // ↓ 管理画面トップ
    Route::get('/admin', \App\Http\Controllers\Admin\IndexController::class)->name('admin.index');
    // ↓ カード
    Route::get('/admin/card', \App\Http\Controllers\Admin\Card\IndexController::class)->name('admin.card.index');
    Route::post('/admin/card', \App\Http\Controllers\Admin\Card\StoreController::class)->name('admin.card.store');
    Route::get('/admin/card/create', \App\Http\Controllers\Admin\Card\CreateController::class)->name('admin.card.create');
    Route::get('/admin/card/{id}', \App\Http\Controllers\Admin\Card\ShowController::class)->name('admin.card.show');
    Route::put('/admin/card/{id}', \App\Http\Controllers\Admin\Card\UpdateController::class)->name('admin.card.update');
    Route::delete('/admin/card/{id}', \App\Http\Controllers\Admin\Card\DestroyController::class)->name('admin.card.destroy');

    // ↓ products
    Route::get('/admin/product', \App\Http\Controllers\Admin\Product\IndexController::class)->name('admin.product.index');
    Route::post('/admin/product', \App\Http\Controllers\Admin\Product\StoreController::class)->name('admin.product.store');
    Route::get('/admin/product/create', \App\Http\Controllers\Admin\Product\CreateController::class)->name('admin.product.create');
    Route::get('/admin/product/{id}', \App\Http\Controllers\Admin\Product\ShowController::class)->name('admin.product.show');
    Route::put('/admin/product/{id}', \App\Http\Controllers\Admin\Product\UpdateController::class)->name('admin.product.update');
    Route::delete('/admin/product/{id}', \App\Http\Controllers\Admin\Product\DestroyController::class)->name('admin.product.destroy');

    // ↓ periods
    Route::get('/admin/period', \App\Http\Controllers\Admin\period\IndexController::class)->name('admin.period.index');
    Route::post('/admin/period', \App\Http\Controllers\Admin\period\StoreController::class)->name('admin.period.store');
    Route::get('/admin/period/create', \App\Http\Controllers\Admin\period\CreateController::class)->name('admin.period.create');
    Route::get('/admin/period/{id}', \App\Http\Controllers\Admin\period\ShowController::class)->name('admin.period.show');
    Route::put('/admin/period/{id}', \App\Http\Controllers\Admin\period\UpdateController::class)->name('admin.period.update');
    Route::delete('/admin/period/{id}', \App\Http\Controllers\Admin\period\DestroyController::class)->name('admin.period.destroy');

    // ↓ frame_types
    Route::get('/admin/frametype', \App\Http\Controllers\Admin\frametype\IndexController::class)->name('admin.frametype.index');
    Route::post('/admin/frametype', \App\Http\Controllers\Admin\frametype\StoreController::class)->name('admin.frametype.store');
    Route::get('/admin/frametype/create', \App\Http\Controllers\Admin\frametype\CreateController::class)->name('admin.frametype.create');
    Route::get('/admin/frametype/{id}', \App\Http\Controllers\Admin\frametype\ShowController::class)->name('admin.frametype.show');
    Route::put('/admin/frametype/{id}', \App\Http\Controllers\Admin\frametype\UpdateController::class)->name('admin.frametype.update');
    Route::delete('/admin/frametype/{id}', \App\Http\Controllers\Admin\frametype\DestroyController::class)->name('admin.frametype.destroy');

    // ↓ ユーザ
    Route::get('/admin/user', \App\Http\Controllers\Admin\User\IndexController::class)->name('admin.user.index');
});


// game
Route::get('/', \App\Http\Controllers\IndexController::class)->name('index');