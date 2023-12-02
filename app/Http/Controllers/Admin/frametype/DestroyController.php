<?php

namespace App\Http\Controllers\Admin\frametype;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FrameType;
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

        // 取得したidを持つframe_typeをDBから取得
        $frame_type = FrameType::where('id', $id)->firstOrFail();

        //もし一致するframe_typeが見つからなければエラー
        if(is_null($frame_type)) {
            throw new NotFoundHttpException('該当するframe_typeが見つかりませんでした');
        }

        // 該当するframe_typeをDBから削除
        $frame_type->delete();

        $data = FrameType::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/FrameType/Index', ['data' => $data, 'message' => "id: {$id} の frame_type を削除しました"]);
    }
}