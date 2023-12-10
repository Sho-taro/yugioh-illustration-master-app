<?php

namespace App\Http\Controllers\Admin\PlayType;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PlayType;
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

        // 取得したidを持つplay_typeをDBから取得
        $play_type = PlayType::where('id', $id)->firstOrFail();

        //もし一致するplay_typeが見つからなければエラー
        if(is_null($play_type)) {
            throw new NotFoundHttpException('該当するplay_typeが見つかりませんでした');
        }

        // 該当するplay_typeをDBから削除
        $play_type->delete();

        $data = PlayType::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/PlayType/Index', ['data' => $data, 'message' => "id: {$id} の play_type を削除しました"]);
    }
}
