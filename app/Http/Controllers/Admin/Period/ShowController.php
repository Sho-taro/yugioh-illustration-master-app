<?php

namespace App\Http\Controllers\Admin\Period;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Period;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Inertia\Inertia;

class ShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // URLのクエリパラメータからidを取得
        $id = (int)$request->route('id');

        // 取得したidを持つperiodをDBから取得
        $period = Period::where('id', $id)->firstOrFail();

        //もし一致するperiodが見つからなければエラー
        if(is_null($period)) {
            throw new NotFoundHttpException('該当するperiodが見つかりませんでした');
        }

        return inertia('Admin/Period/Show', ['period' => $period]);
    }
}
