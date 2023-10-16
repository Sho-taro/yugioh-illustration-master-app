<?php

namespace App\Http\Controllers\Admin\Card;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Card;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // URLのクエリパラメータからidを取得
        $id = (int)$request->route('id');

        // idが一致するcard情報をデータベースから取得
        $card = Card::where('id', $id)->firstOrFail();
        // もし一致するカードが見つからなければエラー
        if(is_null($card)) {
            throw new NotFoundHttpException('該当するカードが見つかりませんでした');
        }

        return inertia('Admin/Card/Show', ['card' => $card]);
    }
}
