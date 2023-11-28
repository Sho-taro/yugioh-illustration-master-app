<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Inertia\Inertia;

class UpdateController extends Controller
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

        // フォームに入力された変更内容をバリデーション
        // note: パスワードの変更内容のバリデーションがどうやったらいいのかわからない
        $updated_user = $request->validate([
            'name' => ['required', 'string'],
            'email' => ['required', 'string',],
            'password' => ['required', 'string'],
        ]);
        // dd($updated_user);

        // バリデーションエラーがなければ、変更内容を保存
        $user->update($updated_user);

        $data = User::orderBy('created_at', 'DESC')->paginate(15);

        return inertia('Admin/User/Index', ['data' => $data, 'message' => "id: {$id} の user を編集しました"]);

    }
}
