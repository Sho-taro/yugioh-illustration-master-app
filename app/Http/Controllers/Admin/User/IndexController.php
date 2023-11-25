<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // $cards = Card::orderBy('created_at', 'DESC')->get();
        $data = User::orderBy('created_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す
        // dd($data);

        //登録ユーザー数を取得
        $users_num = DB::table('users')->count();

        return inertia('Admin/User/Index', ['data' => $data, 'usersNum' => $users_num]);
    }
}
