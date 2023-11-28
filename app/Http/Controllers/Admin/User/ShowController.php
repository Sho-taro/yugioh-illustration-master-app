<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
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

        // 取得したidを持つuserをDBから取得
        $user = User::where('id', $id)->firstOrFail();

        //もし一致するuserが見つからなければエラー
        if(is_null($user)) {
            throw new NotFoundHttpException('該当するuserが見つかりませんでした');
        }

        return inertia('Admin/User/Show', ['user' => $user]);
    }
}
