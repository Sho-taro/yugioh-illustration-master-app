<?php

namespace App\Http\Controllers\Gallery;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\JoinClause;
// use App\Models\UserTag;
use App\Models\ReleasedCard;
use Inertia\Inertia;
use App\Services\FilterCardService;

class FilterPlayController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, FilterCardService $filterCardService)
    {
      // dd($request->input());  // ユーザが入力した絞り込み条件をデバック
      $filters = $filterCardService->getRequestFilters($request->input());  // ユーザが入力した絞り込み条件を取得
      // dd($filters);

      // $filtersをセッションに保存
      // $request->session()->put('gallery_filters', $filters);

      // カードの絞り込み対象を取得
      $target = $request->input('target');
      // カード検索のキーワードを変数に代入
      $keyword = $request->input('card-name');

      // released_cardsテーブルのクエリビルダインスタンス
      $releasedCards_query = null;

      // DBからレコードを取得するためのクエリをビルド
      if ($target === 'monster') {
        // 絞り込み対象がmonsterの場合
        $releasedCards_query = $filterCardService->buildReleasedCardsQueryForMonsters($filters);
      } else if ($target === 'spell') {
        // 絞り込み対象がspellの場合
        $releasedCards_query = $filterCardService->buildReleasedCardsQueryForSpells($filters);
      } else if ($target === 'trap') {
        // 絞り込み対象がtrapの場合
        $releasedCards_query = $filterCardService->buildReleasedCardsQueryForTraps($filters);
      } else if ($target === 'all') {
        $releasedCards_query = $filterCardService->buildReleasedCardsQueryForAll($filters);
      }

      // periodの条件で絞り込みするクエリを生成
      $releasedCards_query = $filterCardService->addPeriodQuery($releasedCards_query, $filters);

      // キーワードで絞り込みするクエリを生成
      if ($keyword !== null) {
        // 全角スペースを半角スペースに変換
        // $keyword_hankaku = mb_convert_kana($keyword, 's');

        // 全角スペースを半角スペースに変換したあと、半角スペースで区切って配列に格納
        $arr_keywords = preg_split("/[\s,]+/", mb_convert_kana($keyword, 's'));

        // 検索キーワードで中間一致検索をかける
        // これじゃダメ（and/or条件がごちゃごちゃ）
        // foreach ($arr_keywords as $val) {
        //   $releasedCards_query->where('name_ja', 'LIKE', "%{$val}%")
        //         ->orWhere('name_ja_kana', 'LIKE', "%{$val}%");
        // }

        // これならOK （参考: https://readouble.com/laravel/10.x/ja/queries.html の「OR WHERE句」セクション）
        foreach ($arr_keywords as $val) {
          $releasedCards_query->where(function ($query) use ($val) {
            $query->where('cards.name_ja', 'LIKE', "%{$val}%")      // cards.name_ja のように cards.をつけることが超重要。where句を実行するときに、cardsテーブルのname_jaカラムなのかproductsテーブルのname_jaカラムなのか分からずエラーになる。
                  ->orWhere('cards.name_ja_kana', 'LIKE', "%{$val}%");  // 上のコメントと同様
          });
        }
        // これは次のsql文を意味する
        // select * from cards where (name_ja LIKE "%$val1%" or name_ja_kana LIKE "%$val1%") and (name_ja LIKE "%$val2%" or name_ja_kana LIKE "%$val2%") and (...);
      }

      // dd($releasedCards_query->count());
      if ($releasedCards_query->count() === 0) {
        $released_cards_num = ReleasedCard::count();
        return inertia('Gallery/FilterSetting', ['errorMsg' => '該当するカードがありません。絞り込み条件を変更して下さい。', 'releasedCardsNum' => $released_cards_num, 'filters' => $request->input()]);
      }

      // クエリを実行してレコードを取得
      $cards = $releasedCards_query->orderBy('card_ja_kana', 'ASC')->get();          // 日本語カード名（読み）の昇順
      // dd($data);

      return inertia('Gallery/Gallery', ['cards' => $cards]);
    }
}
