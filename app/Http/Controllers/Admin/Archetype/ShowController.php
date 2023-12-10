<?php

namespace App\Http\Controllers\Admin\Archetype;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Archetype;
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

        //idが一致するarchetypeレコードをDBから取得
        $archetype = Archetype::where('id', $id)->firstOrFail();

        //もし一致するカードが見つからなければエラー
        if(is_null($archetype)) {
            throw new NotFoundHttpException('該当するarchetypeが見つかりませんでした');
        }

        return inertia('Admin/Archetype/Show', ['archetype' => $archetype]);
    }
}
