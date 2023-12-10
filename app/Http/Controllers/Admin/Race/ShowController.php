<?php

namespace App\Http\Controllers\Admin\Race;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Race;
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

        //idが一致するraceレコードをDBから取得
        $race = Race::where('id', $id)->firstOrFail();

        //もし一致するカードが見つからなければエラー
        if(is_null($race)) {
            throw new NotFoundHttpException('該当するraceが見つかりませんでした');
        }

        return inertia('Admin/Race/Show', ['race' => $race]);
    }
}
