<?php

namespace App\Http\Controllers\Admin\Tag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tag;
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

        //idが一致するtagレコードをDBから取得
        $tag = Tag::where('id', $id)->firstOrFail();

        //もし一致するカードが見つからなければエラー
        if(is_null($tag)) {
            throw new NotFoundHttpException('該当するtagが見つかりませんでした');
        }

        return inertia('Admin/Tag/Show', ['tag' => $tag]);
    }
}
