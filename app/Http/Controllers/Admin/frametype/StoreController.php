<?php

namespace App\Http\Controllers\Admin\frametype;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FrameType;
use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        FrameType::create($request->validate([
            'frame_type_code' => ['required', 'string', 'size:6', 'unique:frame_types,frame_type_code'],
            'name_ja' => ['required', 'string'],
            'name_en' => ['required', 'string']
        ]));

        // $data = Card::orderBy('updated_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す
        $registeredFrameType = FrameType::orderBy('updated_at', 'DESC')->firstOrFail();

        // return redirect('/admin/card');
        return inertia('Admin/FrameType/Create', ['registeredFrameType' => $registeredFrameType, 'message' => 'frame_typeを新規登録しました']);
    }
}
