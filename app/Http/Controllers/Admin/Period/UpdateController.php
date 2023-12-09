<?php

namespace App\Http\Controllers\Admin\Period;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Period;
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

        // 取得したidを持つperiodをDBから取得
        $period = Period::where('id', $id)->firstOrFail();

        //もし一致するperiodが見つからなければエラー
        if(is_null($period)) {
            throw new NotFoundHttpException('該当するperiodが見つかりませんでした');
        }

        // フォームに入力された変更内容をバリデーション
        $updated_period = $request->validate([
            // 更新処理時のバリデーションチェックでは、unique制約はつけてはいけない
            'period_code' => ['required', 'string', 'min:4', 'max:4'],
            'name' => ['required', 'string'],
            'start_date' => ['required', 'date_format:Y-m-d'],    // imp: dateのフォーマットはY-m-dのみ許可　（例: 2020-01-01）
            'end_date' => ['required', 'date_format:Y-m-d']
        ]);
        // dd($updated_period);

        // バリデーションエラーがなければ、変更内容を保存
        $period->update($updated_period);

        $data = Period::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/Period/Index', ['data' => $data, 'message' => "id: {$id} の period を編集しました"]);
    }
}
