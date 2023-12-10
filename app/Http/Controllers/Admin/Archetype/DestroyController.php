<?php

namespace App\Http\Controllers\Admin\Archetype;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Archetype;
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

        // 取得したidを持つarchetypeをDBから取得
        $archetype = Archetype::where('id', $id)->firstOrFail();

        //もし一致するarchetypeが見つからなければエラー
        if(is_null($archetype)) {
            throw new NotFoundHttpException('該当するarchetypeが見つかりませんでした');
        }

        // 該当するarchetypeをDBから削除
        $archetype->delete();

        $data = Archetype::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/Archetype/Index', ['data' => $data, 'message' => "id: {$id} の archetype を削除しました"]);
    }
}
