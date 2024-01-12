<?php

namespace App\Http\Controllers\Game;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // ゲーム画面へ
        $cards = DB::table('cards')->inRandomOrder()->limit(5)->get();
        // dd($cards);

        return inertia('Game', ['cards' => $cards]);
    }
}
