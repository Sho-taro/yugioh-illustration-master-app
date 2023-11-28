<?php

namespace App\Http\Controllers\Admin\Period;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Period;
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

        // 取得したidを持つperiodをDBから取得
        $period = Period::where('id', $id)->firstOrFail();

        //もし一致するperiodが見つからなければエラー
        if(is_null($period)) {
            throw new NotFoundHttpException('該当するperiodが見つかりませんでした');
        }

        // フォームに入力された変更内容をバリデーション
        $updated_period = $request->validate([
            'name_en' => ['required', 'string'],     // 更新処理時のバリデーションチェックでは、unique制約はつけてはいけない
            'name_ja' => ['required', 'string']
        ]);
        // dd($updated_period);

        // バリデーションエラーがなければ、変更内容を保存
        $period->update($updated_period);

        $data = Period::orderBy('created_at', 'DESC')->paginate(15);

        return inertia('Admin/Period/Index', ['data' => $data, 'message' => "id: {$id} の period を編集しました"]);
    }
}
