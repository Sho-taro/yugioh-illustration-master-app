<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
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

        // 取得したidを持つproductをDBから取得
        $product = Product::where('id', $id)->firstOrFail();

        //もし一致するproductが見つからなければエラー
        if(is_null($product)) {
            throw new NotFoundHttpException('該当するproductが見つかりませんでした');
        }

        // フォームに入力された変更内容をバリデーション
        $updated_product = $request->validate([
            'product_code' => ['required', 'string'],
            'name_en' => ['required', 'string'],
            'name_ja' => ['required', 'string'],
            'period' => ['required', 'string', 'exists:periods,name_en']   // exists → 外部キー制約のバリデーション。periodsテーブルのname_enカラムに存在しない値の場合エラーにする。
        ]);
        // dd($updated_product);

        // バリデーションエラーがなければ、変更内容を保存
        $product->update($updated_product);

        $data = Product::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/Product/Index', ['data' => $data, 'message' => "id: {$id} の product を編集しました"]);
    }
}
