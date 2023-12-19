<?php

namespace App\Http\Controllers\Admin\ReleasedCard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ReleasedCard;
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

        //idが一致するreleased_cardレコードをDBから取得
        $released_card = ReleasedCard::where('id', $id)->firstOrFail();

        //もし一致するカードが見つからなければエラー
        if(is_null($released_card)) {
            throw new NotFoundHttpException('該当するreleased_cardが見つかりませんでした');
        }

        return inertia('Admin/ReleasedCard/Show', ['releasedCard' => $released_card]);
    }
}
