<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Inertia\Inertia;

class ShowController extends Controller
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

        return inertia('Admin/Product/Show', ['product' => $product]);
    }
}
