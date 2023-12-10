<?php

namespace App\Http\Controllers\Admin\PlayType;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PlayType;
use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        PlayType::create($request->validate([
            'play_type_code' => ['required', 'string', 'size:4', 'unique:spell_trap_play_types,play_type_code'],
            'name_ja' => ['required', 'string'],
            'name_en' => ['required', 'string']
        ]));

        // $data = Card::orderBy('updated_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す
        $registeredPlayType = PlayType::orderBy('updated_at', 'DESC')->firstOrFail();

        // return redirect('/admin/card');
        return inertia('Admin/PlayType/Create', ['registeredPlayType' => $registeredPlayType, 'message' => 'play_typeを新規登録しました']);
    }
}
