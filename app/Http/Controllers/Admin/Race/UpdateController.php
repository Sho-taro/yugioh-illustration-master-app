<?php

namespace App\Http\Controllers\Admin\Race;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Race;
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

        // 取得したidを持つraceをDBから取得
        $race = Race::where('id', $id)->firstOrFail();

        //もし一致するraceが見つからなければエラー
        if(is_null($race)) {
            throw new NotFoundHttpException('該当するraceが見つかりませんでした');
        }

        // フォームに入力された変更内容をバリデーション
        $updated_race = $request->validate([
            // 更新処理時のバリデーションチェックでは、unique制約はつけてはいけない
            'race_code' => ['required', 'string', 'size:4'],
            'name_ja' => ['required', 'string'],
            'name_en' => ['required', 'string']
        ]);
        // dd($updated_race);

        // バリデーションエラーがなければ、変更内容を保存
        $race->update($updated_race);

        $data = Race::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/Race/Index', ['data' => $data, 'message' => "id: {$id} の race を編集しました"]);
    }
}
