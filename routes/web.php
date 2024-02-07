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

    // released_cards
    Route::get('/admin/releasedcard', \App\Http\Controllers\Admin\ReleasedCard\IndexController::class)->name('admin.releasedcard.index');
    Route::post('/admin/releasedcard', \App\Http\Controllers\Admin\ReleasedCard\StoreController::class)->name('admin.releasedcard.store');
    // CreateControllerは不要
    Route::get('/admin/releasedcard/{id}', \App\Http\Controllers\Admin\ReleasedCard\ShowController::class)->name('admin.releasedcard.show');
    Route::put('/admin/releasedcard/{id}', \App\Http\Controllers\Admin\ReleasedCard\UpdateController::class)->name('admin.releasedcard.update');
    Route::delete('/admin/releasedcard/{id}', \App\Http\Controllers\Admin\ReleasedCard\DestroyController::class)->name('admin.releasedcard.destroy');

    // ↓ products
    Route::get('/admin/product', \App\Http\Controllers\Admin\Product\IndexController::class)->name('admin.product.index');
    Route::post('/admin/product', \App\Http\Controllers\Admin\Product\StoreController::class)->name('admin.product.store');
    Route::get('/admin/product/create', \App\Http\Controllers\Admin\Product\CreateController::class)->name('admin.product.create');
    Route::get('/admin/product/newcreate', \App\Http\Controllers\Admin\Product\NewCreateController::class)->name('admin.product.newcreate');
    Route::get('/admin/product/{id}', \App\Http\Controllers\Admin\Product\ShowController::class)->name('admin.product.show');
    Route::put('/admin/product/{id}', \App\Http\Controllers\Admin\Product\UpdateController::class)->name('admin.product.update');
    Route::delete('/admin/product/{id}', \App\Http\Controllers\Admin\Product\DestroyController::class)->name('admin.product.destroy');

    // ↓ periods
    Route::get('/admin/period', \App\Http\Controllers\Admin\Period\IndexController::class)->name('admin.period.index');
    Route::post('/admin/period', \App\Http\Controllers\Admin\Period\StoreController::class)->name('admin.period.store');
    Route::get('/admin/period/create', \App\Http\Controllers\Admin\Period\CreateController::class)->name('admin.period.create');
    Route::get('/admin/period/{id}', \App\Http\Controllers\Admin\Period\ShowController::class)->name('admin.period.show');
    Route::put('/admin/period/{id}', \App\Http\Controllers\Admin\Period\UpdateController::class)->name('admin.period.update');
    Route::delete('/admin/period/{id}', \App\Http\Controllers\Admin\Period\DestroyController::class)->name('admin.period.destroy');

    // ↓ frame_types
    Route::get('/admin/frametype', \App\Http\Controllers\Admin\frametype\IndexController::class)->name('admin.frametype.index');
    Route::post('/admin/frametype', \App\Http\Controllers\Admin\frametype\StoreController::class)->name('admin.frametype.store');
    Route::get('/admin/frametype/create', \App\Http\Controllers\Admin\frametype\CreateController::class)->name('admin.frametype.create');
    Route::get('/admin/frametype/{id}', \App\Http\Controllers\Admin\frametype\ShowController::class)->name('admin.frametype.show');
    Route::put('/admin/frametype/{id}', \App\Http\Controllers\Admin\frametype\UpdateController::class)->name('admin.frametype.update');
    Route::delete('/admin/frametype/{id}', \App\Http\Controllers\Admin\frametype\DestroyController::class)->name('admin.frametype.destroy');

    // ↓ archetypes
    Route::get('/admin/archetype', \App\Http\Controllers\Admin\Archetype\IndexController::class)->name('admin.archetype.index');
    Route::post('/admin/archetype', \App\Http\Controllers\Admin\Archetype\StoreController::class)->name('admin.archetype.store');
    Route::get('/admin/archetype/create', \App\Http\Controllers\Admin\Archetype\CreateController::class)->name('admin.archetype.create');
    Route::get('/admin/archetype/{id}', \App\Http\Controllers\Admin\Archetype\ShowController::class)->name('admin.archetype.show');
    Route::put('/admin/archetype/{id}', \App\Http\Controllers\Admin\Archetype\UpdateController::class)->name('admin.archetype.update');
    Route::delete('/admin/archetype/{id}', \App\Http\Controllers\Admin\Archetype\DestroyController::class)->name('admin.archetype.destroy');

    // ↓ races
    Route::get('/admin/race', \App\Http\Controllers\Admin\Race\IndexController::class)->name('admin.race.index');
    Route::post('/admin/race', \App\Http\Controllers\Admin\Race\StoreController::class)->name('admin.race.store');
    Route::get('/admin/race/create', \App\Http\Controllers\Admin\Race\CreateController::class)->name('admin.race.create');
    Route::get('/admin/race/{id}', \App\Http\Controllers\Admin\Race\ShowController::class)->name('admin.race.show');
    Route::put('/admin/race/{id}', \App\Http\Controllers\Admin\Race\UpdateController::class)->name('admin.race.update');
    Route::delete('/admin/race/{id}', \App\Http\Controllers\Admin\Race\DestroyController::class)->name('admin.race.destroy');

    // ↓ attributes
    Route::get('/admin/attribute', \App\Http\Controllers\Admin\Attribute\IndexController::class)->name('admin.attribute.index');
    Route::post('/admin/attribute', \App\Http\Controllers\Admin\Attribute\StoreController::class)->name('admin.attribute.store');
    Route::get('/admin/attribute/create', \App\Http\Controllers\Admin\Attribute\CreateController::class)->name('admin.attribute.create');
    Route::get('/admin/attribute/{id}', \App\Http\Controllers\Admin\Attribute\ShowController::class)->name('admin.attribute.show');
    Route::put('/admin/attribute/{id}', \App\Http\Controllers\Admin\Attribute\UpdateController::class)->name('admin.attribute.update');
    Route::delete('/admin/attribute/{id}', \App\Http\Controllers\Admin\Attribute\DestroyController::class)->name('admin.attribute.destroy');

    // ↓ spell_trap_play_types
    Route::get('/admin/playtype', \App\Http\Controllers\Admin\PlayType\IndexController::class)->name('admin.playtype.index');
    Route::post('/admin/playtype', \App\Http\Controllers\Admin\PlayType\StoreController::class)->name('admin.playtype.store');
    Route::get('/admin/playtype/create', \App\Http\Controllers\Admin\PlayType\CreateController::class)->name('admin.playtype.create');
    Route::get('/admin/playtype/{id}', \App\Http\Controllers\Admin\PlayType\ShowController::class)->name('admin.playtype.show');
    Route::put('/admin/playtype/{id}', \App\Http\Controllers\Admin\PlayType\UpdateController::class)->name('admin.playtype.update');
    Route::delete('/admin/playtype/{id}', \App\Http\Controllers\Admin\PlayType\DestroyController::class)->name('admin.playtype.destroy');

    // ↓ tag
    Route::get('/admin/tag', \App\Http\Controllers\Admin\Tag\IndexController::class)->name('admin.tag.index');
    Route::post('/admin/tag', \App\Http\Controllers\Admin\Tag\StoreController::class)->name('admin.tag.store');
    Route::get('/admin/tag/create', \App\Http\Controllers\Admin\Tag\CreateController::class)->name('admin.tag.create');
    Route::get('/admin/tag/{id}', \App\Http\Controllers\Admin\Tag\ShowController::class)->name('admin.tag.show');
    Route::put('/admin/tag/{id}', \App\Http\Controllers\Admin\Tag\UpdateController::class)->name('admin.tag.update');
    Route::delete('/admin/tag/{id}', \App\Http\Controllers\Admin\Tag\DestroyController::class)->name('admin.tag.destroy');

    // ↓ ユーザ
    Route::get('/admin/user', \App\Http\Controllers\Admin\User\IndexController::class)->name('admin.user.index');
    Route::get('/admin/user/{id}', \App\Http\Controllers\Admin\User\ShowController::class)->name('admin.user.show');

    // カード検索
    Route::get('/admin/searchcard', \App\Http\Controllers\Admin\SearchCard\IndexController::class)->name('admin.searchcard.index');

    });


// topページ
Route::get('/', \App\Http\Controllers\IndexController::class)->name('index');

// game
Route::get('/game', \App\Http\Controllers\Game\IndexController::class)->name('game');

// Gallery
Route::get('/gallery/setting/filter', \App\Http\Controllers\Gallery\FilterSettingController::class)->name('gallery.setting.filter');
Route::get('/gallery/setting/myTag', \App\Http\Controllers\Gallery\MyTagSettingController::class)->name('gallery.setting.myTag');
Route::get('/gallery/play/random', \App\Http\Controllers\Gallery\RandomPlayController::class)->name('gallery.play.random');
Route::get('/gallery/play/filter', \App\Http\Controllers\Gallery\FilterPlayController::class)->name('gallery.play.filter');
Route::get('/gallery/play/myTag', \App\Http\Controllers\Gallery\MyTagPlayController::class)->name('gallery.play.myTag');


// user_tags
// ログイン時のみアクセス可能
Route::middleware('auth')->group(function() {
    Route::get('/tags/{userId}', \App\Http\Controllers\UserTag\IndexController::class)->name('tag.index');
    Route::post('/tags/{userId}', \App\Http\Controllers\UserTag\StoreController::class)->name('tag.store');
    Route::get('/tags/{userId}/create', \App\Http\Controllers\UserTag\CreateController::class)->name('tag.create');
    Route::get('/tags/{userId}/{userTagId}', \App\Http\Controllers\UserTag\ShowController::class)->name('tag.show');
    Route::put('/tags/{userId}/{userTagId}', [\App\Http\Controllers\UserTag\UpdateController::class, 'updateUserTagName'])->name('tag.update.userTagName');
    Route::delete('/tags/{userId}/{userTagId}', [\App\Http\Controllers\UserTag\DestroyController::class, 'deleteUserTag'])->name('tag.delete.userTag');
    Route::get('/tags/{userId}/{userTagId}/releasedCardUserTags', \App\Http\Controllers\UserTag\ReleasedCardUserTag\CreateController::class)->name('tag.releasedCardUserTag.create');
    Route::post('/tags/{userId}/{userTagId}/releasedCardUserTags', \App\Http\Controllers\UserTag\ReleasedCardUserTag\DestroyController::class)->name('tag.releasedCardUserTag.destroy');
});