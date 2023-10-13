<?php

namespace App\Http\Controllers\Admin\Card;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Card;
use Inertia\Inertia;

class DestroyController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // URLのクエリパラメータからidを取得
        $id = (int)$request->route('id');

        // idが一致するcard情報をデータベースから取得
        $card = Card::where('id', $id)->firstOrFail();
        // もし一致するカードが見つからなければエラー
        if(is_null($card)) {
            throw new NotFoundHttpException('該当するカードが見つかりませんでした');
        }

        // 該当するカードをデータベースから削除
        $card->delete();

        $data = Card::orderBy('created_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す


        // return redirect()->route('admin.card.index');
        return inertia('Admin/Index', ['data' => $data, 'message' => 'カードを削除しました']);
    }
}
