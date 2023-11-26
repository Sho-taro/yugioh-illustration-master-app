<?php

namespace App\Http\Controllers\Admin\frametype;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FrameType;
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

        // 取得したidを持つframe_typeをDBから取得
        $frame_type = FrameType::where('id', $id)->firstOrFail();

        //もし一致するframe_typeが見つからなければエラー
        if(is_null($frame_type)) {
            throw new NotFoundHttpException('該当するframe_typeが見つかりませんでした');
        }

        // フォームに入力された変更内容をバリデーション
        $updated_ft = $request->validate([
            'frame_type_code' => ['required', 'string', 'min:3', 'max:3', 'unique:frame_types,frame_type_code'],
            'name_en' => ['required', 'string', 'unique:frame_types,name_en'],
            'name_ja' => ['required', 'string', 'unique:frame_types,name_ja']
        ]);
        dd($updated_ft);

        // バリデーションエラーがなければ、変更内容を保存
        $frame_type->update($updated_ft);

        $data = FrameType::orderBy('created_at', 'DESC')->paginate(15);

        return inertia('Admin/FrameType/Index', ['data' => $data, 'message' => "id: ${id} の frame_type を編集しました"]);
    }
}
