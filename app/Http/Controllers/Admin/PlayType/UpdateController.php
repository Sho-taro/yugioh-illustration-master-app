<?php

namespace App\Http\Controllers\Admin\PlayType;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PlayType;
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

        // 取得したidを持つplay_typeをDBから取得
        $play_type = PlayType::where('id', $id)->firstOrFail();

        //もし一致するplay_typeが見つからなければエラー
        if(is_null($play_type)) {
            throw new NotFoundHttpException('該当するplay_typeが見つかりませんでした');
        }

        // フォームに入力された変更内容をバリデーション
        $updated_play_type = $request->validate([
            // 更新処理時のバリデーションチェックでは、unique制約はつけてはいけない
            'play_type_code' => ['required', 'string', 'size:6'],
            'name_ja' => ['required', 'string'],
            'name_en' => ['required', 'string']
        ]);
        // dd($updated_play_type);

        // バリデーションエラーがなければ、変更内容を保存
        $play_type->update($updated_play_type);

        $data = PlayType::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/PlayType/Index', ['data' => $data, 'message' => "id: {$id} の play_type を編集しました"]);
    }
}
