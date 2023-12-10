<?php

namespace App\Http\Controllers\Admin\PlayType;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PlayType;
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

        //idが一致するplay_typeレコードをDBから取得
        $play_type = PlayType::where('id', $id)->firstOrFail();

        //もし一致するカードが見つからなければエラー
        if(is_null($play_type)) {
            throw new NotFoundHttpException('該当するplay_typeが見つかりませんでした');
        }

        return inertia('Admin/PlayType/Show', ['playType' => $play_type]);
    }
}
