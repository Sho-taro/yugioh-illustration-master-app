<?php

namespace App\Http\Controllers\Admin\Archetype;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Archetype;
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

        // 取得したidを持つarchetypeをDBから取得
        $archetype = Archetype::where('id', $id)->firstOrFail();

        //もし一致するarchetypeが見つからなければエラー
        if(is_null($archetype)) {
            throw new NotFoundHttpException('該当するarchetypeが見つかりませんでした');
        }

        // フォームに入力された変更内容をバリデーション
        $updated_archetype = $request->validate([
            // 更新処理時のバリデーションチェックでは、unique制約はつけてはいけない
            'archetype_code' => ['required', 'string', 'size:6'],
            'name_ja' => ['required', 'string'],
            'name_en' => ['required', 'string']
        ]);
        // dd($updated_archetype);

        // バリデーションエラーがなければ、変更内容を保存
        $archetype->update($updated_archetype);

        $data = Archetype::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/Archetype/Index', ['data' => $data, 'message' => "id: {$id} の archetype を編集しました"]);
    }
}
