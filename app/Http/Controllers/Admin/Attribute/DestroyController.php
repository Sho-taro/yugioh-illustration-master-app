<?php

namespace App\Http\Controllers\Admin\Attribute;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attribute;
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

        // 取得したidを持つattributeをDBから取得
        $attribute = Attribute::where('id', $id)->firstOrFail();

        //もし一致するattributeが見つからなければエラー
        if(is_null($attribute)) {
            throw new NotFoundHttpException('該当するattributeが見つかりませんでした');
        }

        // 該当するattributeをDBから削除
        $attribute->delete();

        $data = Attribute::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/Attribute/Index', ['data' => $data, 'message' => "id: {$id} の attribute を削除しました"]);
    }
}
