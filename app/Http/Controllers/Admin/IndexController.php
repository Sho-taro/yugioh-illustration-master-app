<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
// use App\Models\Card;
// use App\Models\User;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // cardsテーブルのレコード数を取得
        // $cards_num = DB::table('cards')->count();

        // usersテーブルのレコード数を取得
        // $users_num = DB::table('users')->count();

        // return inertia('Admin/Index',['cardsNum' => $cards_num, 'usersNum' => $users_num]);
        return inertia('Admin/Index',[]);
    }
}
