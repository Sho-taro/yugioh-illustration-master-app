<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\JoinClause;
use App\Models\ReleasedCard;

class GetFilteredCardsNumController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
      // 絞り込み条件に合致するカードの枚数を取得する関数
      $target = $request->input('target');  // カードの絞り込み対象を取得
      $keyword = $request->input('card-name'); // カード検索のキーワードを取得

      // cardsテーブルのクエリビルダインスタンスを取得
      $releasedCards_query = DB::table('released_cards');

      // 絞り込み対象がmonsterの場合
      if ($target === 'monster') {
        $releasedCards_query
            ->select(
              'released_cards.id as released_card_id',
              'cards.id as card_id',
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
        if (!empty($request->input('frame-types'))) {
          $releasedCards_query->whereIn('frame_types.name_en', $request->input('frame-types'));
        }

        // raceの条件で絞り込みするクエリを生成
        if (!empty($request->input('races'))) {
          $releasedCards_query->whereIn('races.name_en', $request->input('races'));
        }

        // attributeの条件で絞り込みするクエリを生成
        if (!empty($request->input('attributes'))) {
          $releasedCards_query->whereIn('attributes.name_en', $request->input('attributes'));
        }

        // level_or_rankの条件で絞り込みするクエリを生成
        if (!empty($request->input('level-or-ranks'))) {
          $releasedCards_query->whereIn('monster_card_details.level_or_rank', $request->input('level-or-ranks'));
        }

        // link_valueの条件で絞り込みするクエリを生成
        if (!empty($request->input('link-values'))) {
          $releasedCards_query->whereIn('monster_card_details.link_value', $request->input('link-values'));
        }
      } else if ($target === 'spell') {
        // 絞り込み対象がspellの場合
        $releasedCards_query
            ->select(
              'released_cards.id as released_card_id',
              'cards.id as card_id',
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
        if (!empty($request->input('play-types'))) {
          $releasedCards_query->whereIn('spell_trap_play_types.name_en', $request->input('play-types'));
        }
      } else if ($target === 'trap') {
        // 絞り込み対象がtrapの場合
        $releasedCards_query
            ->select(
              'released_cards.id as released_card_id',
              'cards.id as card_id',
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
        if (!empty($request->input('play-types'))) {
          $releasedCards_query->whereIn('spell_trap_play_types.name_en', $request->input('play-types'));
        }
      } else if ($target === 'all') {
        $releasedCards_query
            ->select(
              'released_cards.id as released_card_id',
              'cards.id as card_id',
            )
            ->join('products', 'released_cards.product_code', '=', 'products.product_code')
            ->join('periods', function (JoinClause $join) {
              $join->on('products.release_date', '>=', 'periods.start_date')
                    ->on('products.release_date', '<=', 'periods.end_date');
            })
            ->join('cards', 'released_cards.card_official_id', '=', 'cards.card_official_id')
            ->join('frame_types', 'cards.frame_type_code', '=', 'frame_types.frame_type_code')
            // ->join('archetypes', 'cards.archetype_code', '=', 'archetypes.archetype_code')   // 今は不要
            ->leftJoin('monster_card_details', 'cards.card_official_id', '=', 'monster_card_details.card_official_id')
            ->leftJoin('races', 'monster_card_details.race_code', '=', 'races.race_code')
            ->leftJoin('attributes', 'monster_card_details.attribute_code', '=', 'attributes.attribute_code')
            ->leftJoin('spell_trap_card_details', 'cards.card_official_id', '=', 'spell_trap_card_details.card_official_id')
            ->leftJoin('spell_trap_play_types', 'spell_trap_card_details.play_type_code', '=', 'spell_trap_play_types.play_type_code')
            ;
      }

      // periodの条件で絞り込みするクエリを生成
      if (!empty($request->input('periods'))) {
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

      return response()->json($releasedCards_query->count());
    }
}
