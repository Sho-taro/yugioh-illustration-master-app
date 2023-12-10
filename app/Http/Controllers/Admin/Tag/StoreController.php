<?php

namespace App\Http\Controllers\Admin\Tag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tag;
use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        Tag::create($request->validate([
            'name' => ['required', 'string', 'max:10', 'unique:tags,name'],   // 最大10文字
        ]));

        // $data = Card::orderBy('updated_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す
        $registeredTag = Tag::orderBy('updated_at', 'DESC')->firstOrFail();

        // return redirect('/admin/card');
        return inertia('Admin/Tag/Create', ['registeredTag' => $registeredTag, 'message' => 'tagを新規登録しました']);
    }
}
