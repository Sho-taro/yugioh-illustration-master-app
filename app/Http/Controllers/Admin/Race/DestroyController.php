<?php

namespace App\Http\Controllers\Admin\Race;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Race;
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

        // 取得したidを持つraceをDBから取得
        $race = Race::where('id', $id)->firstOrFail();

        //もし一致するraceが見つからなければエラー
        if(is_null($race)) {
            throw new NotFoundHttpException('該当するraceが見つかりませんでした');
        }

        // 該当するraceをDBから削除
        $race->delete();

        $data = Race::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/Race/Index', ['data' => $data, 'message' => "id: {$id} の race を削除しました"]);
    }
}
