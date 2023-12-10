<?php

namespace App\Http\Controllers\Admin\Tag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tag;
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

        // 取得したidを持つtagをDBから取得
        $tag = Tag::where('id', $id)->firstOrFail();

        //もし一致するtagが見つからなければエラー
        if(is_null($tag)) {
            throw new NotFoundHttpException('該当するtagが見つかりませんでした');
        }

        // 該当するtagをDBから削除
        $tag->delete();

        $data = Tag::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/Tag/Index', ['data' => $data, 'message' => "id: {$id} の tag を削除しました"]);
    }
}
