<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        Product::create($request->validate([
            'product_code' => ['required', 'string', 'unique:products,product_code'],
            'name_en' => ['required', 'string', 'unique:products,name_en'],
            'name_ja' => ['required', 'string', 'unique:products,name_ja'],
            'period' => ['required', 'string', 'exists:periods,name_en']   // exists → 外部キー制約のバリデーション。periodsテーブルのname_enカラムに存在しない値の場合エラーにする。
        ]));

        // $data = Product::orderBy('updated_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す
        $registeredProduct = Product::orderBy('updated_at', 'DESC')->firstOrFail();

        // return redirect('/admin/card');
        return inertia('Admin/Product/Create', ['registeredProduct' => $registeredProduct, 'message' => 'productを新規登録しました']);

    }
}
