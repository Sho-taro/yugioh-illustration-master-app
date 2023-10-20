<?php

namespace App\Http\Controllers\Admin\Card;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Card;
use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // $cardData = request()->all();
        // dd($cardData);

        Card::create($request->validate([
            'card_id' => ['required', 'string', 'min:8', 'max:8'],
            'pack_name' => ['required', 'string'],
            'list_number' => ['required', 'string'],
            'name_en' => ['required', 'string'],
            'name_ja' => ['required', 'string'],
            'name_ja_kana' => ['required', 'string'],
            'frame_type' => ['required', 'string'],
            'archetype' => ['string', 'nullable'],     // これだけ nullable
        ]));

        // $data = Card::orderBy('created_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す
        $registeredCard = Card::orderBy('created_at', 'DESC')->firstOrFail();

        // return redirect('/admin/card');
        return inertia('Admin/Card/Create', ['registeredCard' => $registeredCard ,'message' => 'カードを新規登録しました']);
    }
}
