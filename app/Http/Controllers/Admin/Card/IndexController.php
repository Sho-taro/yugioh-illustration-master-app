<?php

namespace App\Http\Controllers\Admin\Card;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Card;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
  /**
   * Handle the incoming request.
  */
  public function __invoke(Request $request)
  {
    // dd($request->input());

    // 登録されているカードのレコード数を取得
      $cards_num = DB::table('cards')->count();

    // 検索ボタンを押さずにこのページにアクセスしてきた場合
    if (empty($request->input())) {
      // $cards = Card::orderBy('created_at', 'DESC')->get();
      $data = Card::orderBy('created_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す

      // return Inertia::render('Admin/Index', ['data' => $data]);
      return inertia('Admin/Card/Index', ['data' => $data, 'cardsNum' => $cards_num]);   // inertiaへルパ関数を使うと記述がシンプル

    } else {
      // カード検索の条件を変数に代入
      $search_type = $request->input("search-type");
      $keyword = $request->input("card-name");
    }


    if ($keyword === ' ' || $keyword === null) {
      // 検索ボタンを押して再度このページにアクセスしてきたが、検索キーワードが空欄だった場合
      $data = Card::orderBy('created_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す

      // 検索キーワードが未入力だったというエラーメッセージを設定
      $err_message = '検索キーワードが未入力です';

      return inertia('Admin/Card/Index', ['data' => $data, 'cardsNum' => $cards_num, 'errMessage' => $err_message]);   // inertiaへルパ関数を使うと記述がシンプル

    } else {
      // 検索ボタンを押して再度このページにアクセスして、検索キーワードがきちんと入力されていた場合

      // // cardsテーブルのレコードを全件取得
      $cards = DB::table('cards');

      // 全角スペースを半角スペースに変換
      // $keyword_hankaku = mb_convert_kana($keyword, 's');

      // 全角スペースを半角スペースに変換したあと、半角スペースで区切って配列に格納
      $arr_keywords = preg_split("/[\s,]+/", mb_convert_kana($keyword, 's'));

      if ($search_type === 'std') {
        // カード名（標準）で検索する場合の処理
        foreach ($arr_keywords as $val) {
          $cards->where('name_ja', 'LIKE', "%{$val}%");
        }

      } else {
        // カード名（読み）で検索する場合の処理
        foreach ($arr_keywords as $val) {
          $cards->where('name_ja_kana', 'LIKE', "%{$val}%");
        }
      }
      // dd($cards);
      $data = $cards->orderBy('name_ja', 'ASC')->paginate(15);
      // dd($data);

      return inertia('Admin/Card/Index', ['data' => $data, 'cardsNum' => $cards_num]);
    }
  }
}