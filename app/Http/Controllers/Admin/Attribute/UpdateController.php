<?php

namespace App\Http\Controllers\Admin\Attribute;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attribute;
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

        // 取得したidを持つattributeをDBから取得
        $attribute = Attribute::where('id', $id)->firstOrFail();

        //もし一致するattributeが見つからなければエラー
        if(is_null($attribute)) {
            throw new NotFoundHttpException('該当するattributeが見つかりませんでした');
        }

        // フォームに入力された変更内容をバリデーション
        $updated_attribute = $request->validate([
            // 更新処理時のバリデーションチェックでは、unique制約はつけてはいけない
            'attribute_code' => ['required', 'string', 'size:6'],
            'name_ja' => ['required', 'string'],
            'name_en' => ['required', 'string']
        ]);
        // dd($updated_attribute);

        // バリデーションエラーがなければ、変更内容を保存
        $attribute->update($updated_attribute);

        $data = Attribute::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/Attribute/Index', ['data' => $data, 'message' => "id: {$id} の attribute を編集しました"]);
    }
}
