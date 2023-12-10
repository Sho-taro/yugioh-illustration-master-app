<?php

namespace App\Http\Controllers\Admin\Attribute;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attribute;
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

        //idが一致するattributeレコードをDBから取得
        $attribute = Attribute::where('id', $id)->firstOrFail();

        //もし一致するカードが見つからなければエラー
        if(is_null($attribute)) {
            throw new NotFoundHttpException('該当するattributeが見つかりませんでした');
        }

        return inertia('Admin/Attribute/Show', ['attribute' => $attribute]);
    }
}
