<?php

namespace App\Http\Controllers\Admin\ReleasedCard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ReleasedCard;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
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

        // 取得したidを持つreleased_cardをDBから取得
        $released_card = ReleasedCard::where('id', $id)->firstOrFail();

        //もし一致するreleased_cardが見つからなければエラー
        if(is_null($released_card)) {
            throw new NotFoundHttpException('該当するreleased_cardが見つかりませんでした');
        }

        // フォームに入力された変更内容をバリデーション
        $updated_released_card = $request->validate([
            // 更新処理時のバリデーションチェックでは、unique制約はつけてはいけない
            'card_official_id' => ['required', 'string', 'size:8', 'exists:cards,card_official_id'],
            'product_code'=> ['required', 'string', 'exists:products,product_code'],
            'list_number' => ['required', 'string',]
            // todo: product_codeカラムとlist_numberカラムでの複合ユニーク制約は、やり方がわからなかったため未実装
        ]);
        // dd($updated_released_card);

        // バリデーションエラーがなければ、変更内容を保存
        $released_card->update($updated_released_card);

        $data = ReleasedCard::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/ReleasedCard/Index', ['data' => $data, 'message' => "id: {$id} の released_card を編集しました"]);

    }
}
