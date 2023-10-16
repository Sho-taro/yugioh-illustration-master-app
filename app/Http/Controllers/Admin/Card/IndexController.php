<?php

namespace App\Http\Controllers\Admin\Card;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Card;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // $cards = Card::orderBy('created_at', 'DESC')->get();
        $data = Card::orderBy('created_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す
        // dd($data);

        // return Inertia::render('Admin/Index', ['data' => $data]);
        return inertia('Admin/Card/Index', ['data' => $data]);   // inertiaへルパ関数を使うと記述がシンプル
    }
}
