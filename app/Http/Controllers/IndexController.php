<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
      // $request->session()->put('messages', []);  // messagesというキーでセッション値が配列のセッションを作成
      // dd($request->session()->all());  // 全てのセッション値を表示

      return inertia('Index', []);
    }
}
