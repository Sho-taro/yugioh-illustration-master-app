<?php

namespace App\Http\Controllers\Admin\ReleasedCard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ReleasedCard;
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

        // 取得したidを持つreleased_cardをDBから取得
        $released_card = ReleasedCard::where('id', $id)->firstOrFail();

        //もし一致するreleased_cardが見つからなければエラー
        if(is_null($released_card)) {
            throw new NotFoundHttpException('該当するreleased_cardが見つかりませんでした');
        }

        // 該当するreleased_cardをDBから削除
        $released_card->delete();

        $data = ReleasedCard::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/ReleasedCard/Index', ['data' => $data, 'message' => "id: {$id} の released_card を削除しました"]);

    }
}
