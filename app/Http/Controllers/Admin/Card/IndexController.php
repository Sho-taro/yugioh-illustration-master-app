<?php

namespace App\Http\Controllers\Admin\Card;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Card;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\JoinClause;


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

      $data = Card::orderBy('updated_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す
      return inertia('Admin/Card/Index', ['data' => $data, 'cardsNum' => $cards_num]);   // inertiaへルパ関数を使うと記述がシンプル

    } else if ($request->input('access-type') === 'filtering') {
      // 絞り込みボタンを押して再アクセスしてきた場合
      // dd($request->input());

      // カードの絞り込み対象を取得
      $target = $request->input('target');
      // カード検索のキーワードを変数に代入
      $keyword = $request->input('card-name');

      // cardsテーブルのクエリビルダインスタンスを取得
      $releasedCards_query = DB::table('released_cards');

      // 絞り込み対象がmonsterの場合
      if ($target === 'monster') {
        $releasedCards_query
            ->select(
              'released_cards.id as released_card_id',
              'cards.id as card_id',
              'released_cards.product_code',
              'released_cards.list_number',
              'products.name_ja as product_ja',
              'products.name_en as product_en',
              'products.release_date',
              'periods.name as period',
              'cards.name_ja as card_ja',
              'cards.name_ja_kana as card_ja_kana',
              'cards.name_en as card_en',
              'frame_types.name_ja as frame_type',
              'archetypes.name_ja as archetype',
              'races.name_ja as race',
              'attributes.name_ja as attribute',
              'monster_card_details.level_or_rank',
              'monster_card_details.link_value',
            )
            ->join('products', 'released_cards.product_code', '=', 'products.product_code')
            ->join('periods', function (JoinClause $join) {
              $join->on('products.release_date', '>=', 'periods.start_date')
                    ->on('products.release_date', '<=', 'periods.end_date');
            })
            ->join('cards', 'released_cards.card_official_id', '=', 'cards.card_official_id')
            ->join('frame_types', 'cards.frame_type_code', '=', 'frame_types.frame_type_code')
            ->join('archetypes', 'cards.archetype_code', '=', 'archetypes.archetype_code')
            ->join('monster_card_details', 'cards.card_official_id', '=', 'monster_card_details.card_official_id')
            ->join('races', 'monster_card_details.race_code', '=', 'races.race_code')
            ->join('attributes', 'monster_card_details.attribute_code', '=', 'attributes.attribute_code');


        // frame_typeの条件で絞り込みするクエリを生成
        if (!is_null($request->input('frame-types'))) {
          $releasedCards_query->whereIn('frame_types.name_en', $request->input('frame-types'));
        }

        // raceの条件で絞り込みするクエリを生成
        if (!is_null($request->input('races'))) {
          $releasedCards_query->whereIn('races.name_en', $request->input('races'));
        }

        // attributeの条件で絞り込みするクエリを生成
        if (!is_null($request->input('attributes'))) {
          $releasedCards_query->whereIn('attributes.name_en', $request->input('attributes'));
        }

        // level_or_rankの条件で絞り込みするクエリを生成
        if (!is_null($request->input('level-or-ranks'))) {
          $releasedCards_query->whereIn('monster_card_details.level_or_rank', $request->input('level-or-ranks'));
        }

        // link_valueの条件で絞り込みするクエリを生成
        if (!is_null($request->input('link-values'))) {
          $releasedCards_query->whereIn('monster_card_details.link_value', $request->input('link-values'));
        }
      } else if ($target === 'spell') {
        // 絞り込み対象がspellの場合
        $releasedCards_query
            ->select(
              'released_cards.id as released_card_id',
              'cards.id as card_id',
              'released_cards.product_code',
              'released_cards.list_number',
              'products.name_ja as product_ja',
              'products.name_en as product_en',
              'products.release_date',
              'periods.name as period',
              'cards.name_ja as card_ja',
              'cards.name_ja_kana as card_ja_kana',
              'cards.name_en as card_en',
              'frame_types.name_ja as frame_type',
              'archetypes.name_ja as archetype',
              'spell_trap_play_types.name_ja as play_type',
            )
            ->join('products', 'released_cards.product_code', '=', 'products.product_code')
            ->join('periods', function (JoinClause $join) {
              $join->on('products.release_date', '>=', 'periods.start_date')
                    ->on('products.release_date', '<=', 'periods.end_date');
            })
            ->join('cards', 'released_cards.card_official_id', '=', 'cards.card_official_id')
            ->join('frame_types', 'cards.frame_type_code', '=', 'frame_types.frame_type_code')
            ->join('archetypes', 'cards.archetype_code', '=', 'archetypes.archetype_code')
            ->join('spell_trap_card_details', 'cards.card_official_id', '=', 'spell_trap_card_details.card_official_id')
            ->join('spell_trap_play_types', 'spell_trap_card_details.play_type_code', '=', 'spell_trap_play_types.play_type_code');

        // frame_typeがspellのものだけに絞り込み
        $releasedCards_query->where('frame_types.name_en', '=', 'spell');

        // play-typeの条件で絞り込みするクエリを生成
        if (!is_null($request->input('play-types'))) {
          $releasedCards_query->whereIn('spell_trap_play_types.name_en', $request->input('play-types'));
        }
      } else if ($target === 'trap') {
        // 絞り込み対象がspellの場合
        $releasedCards_query
            ->select(
              'released_cards.id as released_card_id',
              'cards.id as card_id',
              'released_cards.product_code',
              'released_cards.list_number',
              'products.name_ja as product_ja',
              'products.name_en as product_en',
              'products.release_date',
              'periods.name as period',
              'cards.name_ja as card_ja',
              'cards.name_ja_kana as card_ja_kana',
              'cards.name_en as card_en',
              'frame_types.name_ja as frame_type',
              'archetypes.name_ja as archetype',
              'spell_trap_play_types.name_ja as play_type',
            )
            ->join('products', 'released_cards.product_code', '=', 'products.product_code')
            ->join('periods', function (JoinClause $join) {
              $join->on('products.release_date', '>=', 'periods.start_date')
                    ->on('products.release_date', '<=', 'periods.end_date');
            })
            ->join('cards', 'released_cards.card_official_id', '=', 'cards.card_official_id')
            ->join('frame_types', 'cards.frame_type_code', '=', 'frame_types.frame_type_code')
            ->join('archetypes', 'cards.archetype_code', '=', 'archetypes.archetype_code')
            ->join('spell_trap_card_details', 'cards.card_official_id', '=', 'spell_trap_card_details.card_official_id')
            ->join('spell_trap_play_types', 'spell_trap_card_details.play_type_code', '=', 'spell_trap_play_types.play_type_code');

        // frame_typeがtrapのものだけに絞り込み
        $releasedCards_query->where('frame_types.name_en', '=', 'trap');

        // play-typeの条件で絞り込みするクエリを生成
        if (!is_null($request->input('play-types'))) {
          $releasedCards_query->whereIn('spell_trap_play_types.name_en', $request->input('play-types'));
        }
      } else if ($target === 'all') {
        $releasedCards_query
            ->select(
              'released_cards.id as released_card_id',
              'cards.id as card_id',
              'released_cards.product_code',
              'released_cards.list_number',
              'products.name_ja as product_ja',
              'products.name_en as product_en',
              'products.release_date',
              'periods.name as period',
              'cards.name_ja as card_ja',
              'cards.name_ja_kana as card_ja_kana',
              'cards.name_en as card_en',
              // 'frame_types.name_ja as frame_type',   // 今は不要
              // 'archetypes.name_ja as archetype',
            )
            ->join('products', 'released_cards.product_code', '=', 'products.product_code')
            ->join('periods', function (JoinClause $join) {
              $join->on('products.release_date', '>=', 'periods.start_date')
                    ->on('products.release_date', '<=', 'periods.end_date');
            })
            ->join('cards', 'released_cards.card_official_id', '=', 'cards.card_official_id')
            // ->join('frame_types', 'cards.frame_type_code', '=', 'frame_types.frame_type_code')   // 今は不要
            // ->join('archetypes', 'cards.archetype_code', '=', 'archetypes.archetype_code')
            ;
      }

      // periodの条件で絞り込みするクエリを生成
      if (!is_null($request->input('periods'))) {
        $releasedCards_query->whereIn('periods.name', $request->input('periods'));
      }

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
      $message = "{$releasedCards_query->count()} 枚のカードが見つかりました。";

      // クエリを実行してレコードを取得
      $data = $releasedCards_query->orderBy('card_ja_kana', 'ASC')->paginate(15);  // 日本語カード名（読み）の昇順
      dd($data);

      return inertia('Admin/Card/Index', ['data' => $data, 'cardsNum' => $cards_num, 'message' => $message]);
    }
  }


  // $releasedCards_query
  //           ->select(
  //             'released_cards.id as id',
  //             'cards.id as card_id',
  //             'released_cards.product_code',
  //             'released_cards.list_number',
  //             'products.name_ja as product_ja',
  //             'products.name_en as product_en',
  //             'products.release_date',
  //             'periods.name as period',
  //             'cards.name_ja as card_ja',
  //             'cards.name_ja_kana as card_ja_kana',
  //             'cards.name_en as card_en',
  //             'frame_types.name_ja as frame_type',
  //             'archetypes.name_ja as archetype',
  //             'races.name_ja as race',
  //             'attributes.name_ja as attribute',
  //             'monster_card_details.level_or_rank',
  //             'monster_card_details.link_value',
  //             'spell_trap_play_types.name_ja as play_type',
  //           )
  //           ->join('products', 'released_cards.product_code', '=', 'products.product_code')
  //           ->join('periods', function (JoinClause $join) {
  //             $join->on('products.release_date', '>=', 'periods.start_date')
  //                   ->on('products.release_date', '<=', 'periods.end_date');
  //           })
  //           ->join('cards', 'released_cards.card_official_id', '=', 'cards.card_official_id')
  //           ->join('frame_types', 'cards.frame_type_code', '=', 'frame_types.frame_type_code')
  //           ->join('archetypes', 'cards.archetype_code', '=', 'archetypes.archetype_code')
  //           ->leftJoin('monster_card_details', 'cards.card_official_id', '=', 'monster_card_details.card_official_id')
  //           ->leftJoin('races', 'monster_card_details.race_code', '=', 'races.race_code')
  //           ->leftJoin('attributes', 'monster_card_details.attribute_code', '=', 'attributes.attribute_code')
  //           ->leftJoin('spell_trap_card_details', 'cards.card_official_id', '=', 'spell_trap_card_details.card_official_id')
  //           ->leftJoin('spell_trap_play_types', 'spell_trap_card_details.play_type_code', '=', 'spell_trap_play_types.play_type_code');
}