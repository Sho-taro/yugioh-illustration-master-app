<?php

namespace App\Http\Controllers\Admin\Card;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Card;
use Inertia\Inertia;

class UpdateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // URLのクエリパラメータからidを取得
        $id = (int)$request->route('id');

        // 取得したidを持つcardをデータベースから取得
        $card = Card::where('id', $id)->firstOrFail();

        // フォームに入力された内容をバリデーション
        $cardData = $request->validate([
            'card_id' => ['required', 'string', 'min:8', 'max:8'],
            'pack_name' => ['required', 'string'],
            'list_number' => ['required', 'string'],
            'name_en' => ['required', 'string'],
            'name_ja' => ['required', 'string'],
            'name_ja_kana' => ['required', 'string'],
            'frame_type' => ['required', 'string'],
            'archetype' => ['string', 'nullable'],     // これだけ nullable
        ]);
        // dd($cardData);

        // バリデーションエラーが無ければ、データベースを更新
        $card->update($cardData);

        $data = Card::orderBy('created_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す


        // return redirect()->route('admin.card.index');
        return inertia('Admin/Index', ['data' => $data, 'message' => 'カードを編集しました']);
    }
}