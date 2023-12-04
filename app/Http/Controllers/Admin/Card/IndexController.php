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


      if (empty($request->input('access-type'))) {
      // 検索ボタンや絞り込みボタンを押さずにこのページにアクセスしてきた場合

      // $cards = Card::orderBy('updated_at', 'DESC')->get();
      // return Inertia::render('Admin/Index', ['data' => $data]);

      $data = Card::orderBy('updated_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す
      return inertia('Admin/Card/Index', ['data' => $data, 'cardsNum' => $cards_num]);   // inertiaへルパ関数を使うと記述がシンプル

    } else if ($request->input('access-type') === 'filtering') {
      // 絞り込みボタンを押して再アクセスしてきた場合
      // dd($request->input());

      // カード検索のキーワードを変数に代入
      $keyword = $request->input('card-name');
      // frame_typesとperiodsの条件を変数に代入
      $frame_types = $request->input('frame-types');
      $periods = $request->input('periods');

      // frame_typesまたはperiodsの条件が何も指定されていない場合は、画面を戻してメッセージを表示する
      if ($frame_types === null || $periods === null) {
        $data = Card::orderBy('updated_at', 'DESC')->paginate(15);

        // メッセージを設定
        $err_message = '「カードの種類」および「初登場時期」は、それぞれ少なくとも１つ指定する必要があります。';

        return inertia('Admin/Card/Index', ['data' => $data, 'cardsNum' => $cards_num, 'errMessage' => $err_message]);   // inertiaへルパ関数を使うと記述がシンプル
      }

      // cardsテーブルのレコードを全件取得
      $cards = DB::table('cards');
      //（準備）cardsテーブルとproductsテーブルをinner joinするクエリを生成
      $cards->join('products', 'cards.product_code', '=', 'products.product_code')
            ->select('cards.*', 'products.period');

      // 1. frame_typesの条件で絞り込みするクエリを生成
      $cards->whereIn('cards.frame_type', $frame_types);

      // 2. キーワードで絞り込みするクエリを生成
      if ($keyword !== ' ' && $keyword !== null) {
        // 全角スペースを半角スペースに変換
        // $keyword_hankaku = mb_convert_kana($keyword, 's');

        // 全角スペースを半角スペースに変換したあと、半角スペースで区切って配列に格納
        $arr_keywords = preg_split("/[\s,]+/", mb_convert_kana($keyword, 's'));

        // 検索キーワードで中間一致検索をかける
        // これじゃダメ（and/or条件がごちゃごちゃ）
        // foreach ($arr_keywords as $val) {
        //   $cards->where('name_ja', 'LIKE', "%{$val}%")
        //         ->orWhere('name_ja_kana', 'LIKE', "%{$val}%");
        // }

        // これならOK （参考: https://readouble.com/laravel/10.x/ja/queries.html の「OR WHERE句」セクション）
        foreach ($arr_keywords as $val) {
          $cards->where(function ($query) use ($val) {
            $query->where('cards.name_ja', 'LIKE', "%{$val}%")      // cards.name_ja のように cards.をつけることが超重要。where句を実行するときに、cardsテーブルのname_jaカラムなのかproductsテーブルのname_jaカラムなのか分からずエラーになる。
                  ->orWhere('cards.name_ja_kana', 'LIKE', "%{$val}%");  // 上のコメントと同様
          });
        }
        // これは次のsql文を意味する
        // select * from cards where (name_ja LIKE "%$val1%" or name_ja_kana LIKE "%$val1%") and (name_ja LIKE "%$val2%" or name_ja_kana LIKE "%$val2%") and (...);

        // dd($cards);
      }

        // 3. periodsで絞り込みするクエリを生成
        $cards->whereIn('products.period', $periods);

        // dd($cards->count());
        $found_cards_num = $cards->count();
        $message = "{$found_cards_num} 枚のカードが見つかりました。";

        // クエリを実行してレコードを取得
        $data = $cards->orderBy('name_ja', 'ASC')->paginate(15);


        return inertia('Admin/Card/Index', ['data' => $data, 'cardsNum' => $cards_num, 'message' => $message]);
      }
    }
  }