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
            'product_code' => ['required', 'string', 'exists:products,product_code'],   // exists　← 外部キー制約
            'list_number' => ['required', 'string'],
            'card_id' => ['required', 'string', 'min:8', 'max:8'],
            'name_en' => ['required', 'string'],
            'name_ja' => ['required', 'string'],
            'name_ja_kana' => ['required', 'string'],
            'frame_type' => ['required', 'string', 'exists:frame_types,name_en'],   // exists　← 外部キー制約
            'archetype' => ['string', 'nullable'],     // これだけ nullable
        ]);
        // dd($cardData);

        // バリデーションエラーが無ければ、データベースを更新
        $card->update($cardData);

        $data = Card::orderBy('updated_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す


        // return redirect()->route('admin.card.index');
        return inertia('Admin/Card/Index', ['data' => $data, 'message' => "id: {$id} のカードを編集しました"]);
    }
}
