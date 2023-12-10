<?php

namespace App\Http\Controllers\Admin\Tag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tag;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
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

        // 取得したidを持つtagをDBから取得
        $tag = Tag::where('id', $id)->firstOrFail();

        //もし一致するtagが見つからなければエラー
        if(is_null($tag)) {
            throw new NotFoundHttpException('該当するtagが見つかりませんでした');
        }

        // フォームに入力された変更内容をバリデーション
        $updated_tag = $request->validate([
            'name' => ['required', 'string', 'max:10'],   // 最大10文字
        ]);
        // dd($updated_tag);

        // バリデーションエラーがなければ、変更内容を保存
        $tag->update($updated_tag);

        $data = Tag::orderBy('updated_at', 'DESC')->paginate(15);

        return inertia('Admin/Tag/Index', ['data' => $data, 'message' => "id: {$id} の tag を編集しました"]);
    }
}
