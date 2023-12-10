<?php

namespace App\Http\Controllers\Admin\Attribute;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attribute;
use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        Attribute::create($request->validate([
            'attribute_code' => ['required', 'string', 'size:4', 'unique:attributes,attribute_code'],
            'name_ja' => ['required', 'string'],
            'name_en' => ['required', 'string']
        ]));

        // $data = Card::orderBy('updated_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す
        $registeredAttribute = Attribute::orderBy('updated_at', 'DESC')->firstOrFail();

        // return redirect('/admin/card');
        return inertia('Admin/Attribute/Create', ['registeredAttribute' => $registeredAttribute, 'message' => 'attributeを新規登録しました']);
    }
}
