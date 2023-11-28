<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
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

        // 取得したidを持つproductをDBから取得
        $product = Product::where('id', $id)->firstOrFail();

        //もし一致するproductが見つからなければエラー
        if(is_null($product)) {
            throw new NotFoundHttpException('該当するproductが見つかりませんでした');
        }

        // 該当するproductをDBから削除
        $product->delete();

        $data = Product::orderBy('created_at', 'DESC')->paginate(15);

        return inertia('Admin/Product/Index', ['data' => $data, 'message' => "id: {$id} の product を削除しました"]);

    }
}
