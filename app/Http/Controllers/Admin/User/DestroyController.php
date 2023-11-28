<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Inertia\Inertia;

class DestroyController extends Controller
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

        // 該当するuserをDBから削除
        $user->delete();

        $data = User::orderBy('created_at', 'DESC')->paginate(15);

        return inertia('Admin/User/Index', ['data' => $data, 'message' => "id: {$id} の user を削除しました"]);
    }
}
