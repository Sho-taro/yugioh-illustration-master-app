<?php

namespace App\Http\Controllers\Admin\frametype;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FrameType;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Inertia\Inertia;

class ShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        //URLのクエリパラメータからidを取得
        $id = (int)$request->route('id');

        //idが一致するframe_typeレコードをDBから取得
        $frame_type = FrameType::where('id', $id)->firstOrFail();

        //もし一致するカードが見つからなければエラー
        if(is_null($frame_type)) {
            throw new NotFoundHttpException('該当するframe_typeが見つかりませんでした');
        }

        return inertia('Admin/FrameType/Show', ['frameType' => $frame_type]);
    }
}
