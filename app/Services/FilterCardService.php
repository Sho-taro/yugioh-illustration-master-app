<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\JoinClause;

// カードの絞り込み条件に関するクラス
class FilterCardService {


  /**
   * ユーザが入力したカードの絞り込み条件を取得し、$filtersとして返す
   *
   * @param array $inputs $request->input()を渡す想定
   * @return array $filters
   */
  public function getRequestFilters(array $inputs)
  {
    $filters = [
      'access-type' => null,
      'target' => null,
      'card-name' => null,
      'frame-types' => [],
      'races' => [],
      'attributes' => [],
      'level-or-ranks' => [],
      'link-values' => [],
      'periods' => [],
      'play-types' => [],
    ];

    foreach($inputs as $key => $value) {
      if ($key === 'access-type') {
        $filters['access-type'] = $value;
      } elseif ($key === 'target') {
        $filters['target'] = $value;
      } elseif ($key === 'card-name') {
        $filters['card-name'] = $value;
      } elseif ($key === 'frame-types') {
        $filters['frame-types'] = $value;
      } elseif ($key === 'races') {
        $filters['races'] = $value;
      } elseif ($key === 'attributes') {
        $filters['attributes'] = $value;
      } elseif ($key === 'level-or-ranks') {
        $filters['level-or-ranks'] = $value;
      } elseif ($key === 'link-values') {
        $filters['link-values'] = $value;
      } elseif ($key === 'periods') {
        $filters['periods'] = $value;
      } elseif ($key === 'play-types') {
        $filters['play-types'] = $value;
      }
    }

    return $filters;
  }


  /**
   * ユーザが入力したカードの絞り込み条件を取得し、$filtersとして返す
   * FilteredCardsNumController.phpで使用する
   *
   * @param array $inputs $request->input('body')を渡す想定
   * @return array $filters
   */
  public function getRequestFiltersForCardsNum(array $inputs)
  {
    $filters = [
      'target' => null,
      'card-name' => null,
      'frame-types' => [],
      'races' => [],
      'attributes' => [],
      'level-or-ranks' => [],
      'link-values' => [],
      'periods' => [],
      'play-types' => [],
    ];

    foreach($inputs as $input) {
        if ($input[0] === 'target') {
          $filters['target'] = $input[1];
          // echo($filters['target']);
        } elseif ($input[0] === 'card-name') {
          $filters['card-name'] = $input[1];
          // echo($filters['card-name']);
        } elseif ($input[0] === 'frame-types[]') {
          $filters['frame-types'][] = $input[1];
          // var_dump($filters['frame-types']);
        } elseif ($input[0] === 'races[]') {
          $filters['races'][] = $input[1];
          // var_dump($filters['races']);
        } elseif ($input[0] === 'attributes[]') {
          $filters['attributes'][] = $input[1];
          // var_dump($filters['attributes']);
        } elseif ($input[0] === 'level-or-ranks[]') {
          $filters['level-or-ranks'][] = $input[1];
          // var_dump($filters['level-or-ranks']);
        } elseif ($input[0] === 'link-values[]') {
          $filters['link-values'][] = $input[1];
          // var_dump($filters['link-values']);
        } elseif ($input[0] === 'periods[]') {
          $filters['periods'][] = $input[1];
          // var_dump($filters['periods']);
        } elseif ($input[0] === 'play-types[]') {
          $filters['play-types'][] = $input[1];
          // var_dump($filters['play-types']);
        }
      }

    return $filters;
  }


  /**
   * released_cardsテーブルからレコードを取得するためのSQL分を組み立てる（モンスターカード用）
   * 「ユーザが入力した絞り込み条件に合致したカードの情報のみをDBから取得する」ためのクエリをビルドする
   *
   * @param array $filters
   * @param string $select_amount_code 'MUCH' or 'LITTLE'
   * @return
   */
  public function buildReleasedCardsQueryForMonsters(array $filters, string $select_amount_code)
  {
    // $filtersのフォーマット
    // $filters = [
    //   'access-type' => null,
    //   'target' => null,
    //   'card-name' => null,
    //   'frame-types' => [],
    //   'races' => [],
    //   'attributes' => [],
    //   'level-or-ranks' => [],
    //   'link-values' => [],
    //   'periods' => [],
    //   'play-types' => [],
    // ];

    if ($filters['target'] !== 'monster') return false;

    // released_cardsテーブルのクエリビルダインスタンスを取得
    $releasedCards_query = DB::table('released_cards');

    if ($select_amount_code === 'MUCH') {
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
        'frame_types.name_ja as frame_type_ja',
        'frame_types.name_en as frame_type_en',
        'archetypes.name_ja as archetype',
        'races.name_ja as race',
        'attributes.name_ja as attribute',
        'monster_card_details.attack',
        'monster_card_details.defense',
        'monster_card_details.level_or_rank',
        'monster_card_details.link_value',
      );
    } elseif ($select_amount_code === 'LITTLE') {
      $releasedCards_query
        ->select(
          'released_cards.id as released_card_id',
          'cards.id as card_id',
        );
    }

    $releasedCards_query
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
    if (!empty($filters['frame-types'])) {
      $releasedCards_query->whereIn('frame_types.name_en', $filters['frame-types']);
    }

    // raceの条件で絞り込みするクエリを生成
    if (!empty($filters['races'])) {
      $releasedCards_query->whereIn('races.name_en', $filters['races']);
    }

    // attributeの条件で絞り込みするクエリを生成
    if (!empty($filters['attributes'])) {
      $releasedCards_query->whereIn('attributes.name_en', $filters['attributes']);
    }

    // level_or_rankの条件で絞り込みするクエリを生成
    if (!empty($filters['level-or-ranks'])) {
      $releasedCards_query->whereIn('monster_card_details.level_or_rank', $filters['level-or-ranks']);
    }

    // link_valueの条件で絞り込みするクエリを生成
    if (!empty($filters['link-values'])) {
      $releasedCards_query->whereIn('monster_card_details.link_value', $filters['link-values']);
    }

    return $releasedCards_query;
  }


  /**
   * released_cardsテーブルからレコードを取得するためのSQL分を組み立てる（魔法カード用）
   * 「ユーザが入力した絞り込み条件に合致したカードの情報のみをDBから取得する」ためのクエリをビルドする
   *
   * @param array $filters
   * @param string $select_amount_code 'MUCH' or 'LITTLE'
   * @return
   */
  public function buildReleasedCardsQueryForSpells(array $filters, string $select_amount_code)
  {
    if ($filters['target'] !== 'spell') return false;

    // released_cardsテーブルのクエリビルダインスタンスを取得
    $releasedCards_query = DB::table('released_cards');

    if ($select_amount_code === 'MUCH') {
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
          'frame_types.name_ja as frame_type_ja',
          'frame_types.name_en as frame_type_en',
          'archetypes.name_ja as archetype',
          'spell_trap_play_types.name_ja as play_type',
        );
    } elseif ($select_amount_code === 'LITTLE') {
      $releasedCards_query
        ->select(
          'released_cards.id as released_card_id',
          'cards.id as card_id',
        );
    }

    $releasedCards_query
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
    if (!empty($filters['play-types'])) {
      $releasedCards_query->whereIn('spell_trap_play_types.name_en', $filters['play-types']);
    }

    return $releasedCards_query;
  }


  /**
   * released_cardsテーブルからレコードを取得するためのSQL分を組み立てる（罠カード用）
   * 「ユーザが入力した絞り込み条件に合致したカードの情報のみをDBから取得する」ためのクエリをビルドする
   *
   * @param array $filters
   * @param string $select_amount_code 'MUCH' or 'LITTLE'
   * @return
   */
  public function buildReleasedCardsQueryForTraps(array $filters, string $select_amount_code)
  {
    if ($filters['target'] !== 'trap') return false;

    // released_cardsテーブルのクエリビルダインスタンスを取得
    $releasedCards_query = DB::table('released_cards');

    if ($select_amount_code === 'MUCH') {
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
        'frame_types.name_ja as frame_type_ja',
        'frame_types.name_en as frame_type_en',
        'archetypes.name_ja as archetype',
        'spell_trap_play_types.name_ja as play_type',
      );
    } elseif ($select_amount_code === 'LITTLE') {
      $releasedCards_query
        ->select(
          'released_cards.id as released_card_id',
          'cards.id as card_id',
        );
    }

    $releasedCards_query
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
    if (!empty($filters['play-types'])) {
      $releasedCards_query->whereIn('spell_trap_play_types.name_en', $filters['play-types']);
    }

    return $releasedCards_query;
  }


  /**
   * released_cardsテーブルからレコードを取得するためのSQL分を組み立てる（all用）
   * 「ユーザが入力した絞り込み条件に合致したカードの情報のみをDBから取得する」ためのクエリをビルドする
   *
   * @param array $filters
   * @param string $select_amount_code 'MUCH' or 'LITTLE'
   * @return
   */
  public function buildReleasedCardsQueryForAll(array $filters, string $select_amount_code)
  {
    if ($filters['target'] !== 'all') return false;

    // released_cardsテーブルのクエリビルダインスタンスを取得
    $releasedCards_query = DB::table('released_cards');

    if ($select_amount_code === 'MUCH') {
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
          'frame_types.name_ja as frame_type_ja',
          'frame_types.name_en as frame_type_en',
          // 'archetypes.name_ja as archetype',   // 今は不要
          'attributes.name_ja as attribute',
          'monster_card_details.attack',
          'races.name_ja as race',
          'attributes.name_ja as attribute',
          'monster_card_details.level_or_rank',
          'monster_card_details.link_value',
          'spell_trap_play_types.name_ja as play_type',
        );
    } elseif ($select_amount_code === 'LITTLE') {
      $releasedCards_query
        ->select(
          'released_cards.id as released_card_id',
          'cards.id as card_id',
        );
    }

    $releasedCards_query
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
      ->leftJoin('spell_trap_play_types', 'spell_trap_card_details.play_type_code', '=', 'spell_trap_play_types.play_type_code');

    return $releasedCards_query;
  }

  /**
   * クエリビルダにperiodsで絞り込むクエリを追加する
   */
  public function addPeriodQuery($query, $filters)
  {
    if (empty($filters['periods'])) {
      return $query;
    }
    $query->whereIn('periods.name', $filters['periods']);

    return $query;
  }


  /**
   * クエリビルダにkeywordsで絞り込むクエリを追加する
   */
  public function addKeywordQuery($query, $filters)
  {
    // カード検索のキーワードを変数に代入
    $keyword = $filters['card-name'];

    if ($keyword === null) return $query;  // early return

    // 全角スペースを半角スペースに変換したあと、半角スペースで区切って配列に格納
    $arr_keywords = preg_split("/[\s,]+/", mb_convert_kana($keyword, 's'));

    // 検索キーワードで中間一致検索をかける
    // これじゃダメ（and/or条件がごちゃごちゃ）
    // foreach ($arr_keywords as $val) {
    //   $query->where('name_ja', 'LIKE', "%{$val}%")
    //         ->orWhere('name_ja_kana', 'LIKE', "%{$val}%");
    // }

    // これならOK （参考: https://readouble.com/laravel/10.x/ja/queries.html の「OR WHERE句」セクション）
    foreach ($arr_keywords as $val) {
      $query->where(function ($q) use ($val) {
        $q->where('cards.name_ja', 'LIKE', "%{$val}%")      // cards.name_ja のように cards.をつけることが超重要。where句を実行するときに、cardsテーブルのname_jaカラムなのかproductsテーブルのname_jaカラムなのか分からずエラーになる。
              ->orWhere('cards.name_ja_kana', 'LIKE', "%{$val}%");  // 上のコメントと同様
      });
    }
    // これは次のsql文を意味する
    // select * from cards where (name_ja LIKE "%$val1%" or name_ja_kana LIKE "%$val1%") and (name_ja LIKE "%$val2%" or name_ja_kana LIKE "%$val2%") and (...);

    return $query;
  }

  /**
   * released_cardsテーブルからレコードを取得するためのSQL分を組み立てる
   * 「ユーザが入力した絞り込み条件に合致したカードの情報のみをDBから取得する」ためのクエリをビルドする
   *
   * @param array $filters
   * @param string $select_amount_code 'MUCH' or 'LITTLE'
   * @return
   */
  public function buildReleasedCardsQuery(array $filters, string $select_amount_code)
  {
    $target = $filters['target'];

    $releasedCards_query = null;

    // DBからレコードを取得するためのクエリをビルド
    if ($target === 'monster') {
      // 絞り込み対象がmonsterの場合
      $releasedCards_query = $this->buildReleasedCardsQueryForMonsters($filters, $select_amount_code);
    } else if ($target === 'spell') {
      // 絞り込み対象がspellの場合
      $releasedCards_query = $this->buildReleasedCardsQueryForSpells($filters, $select_amount_code);
    } else if ($target === 'trap') {
      // 絞り込み対象がtrapの場合
      $releasedCards_query = $this->buildReleasedCardsQueryForTraps($filters, $select_amount_code);
    } else if ($target === 'all') {
      $releasedCards_query = $this->buildReleasedCardsQueryForAll($filters, $select_amount_code);
    }

    // periodの条件で絞り込みするクエリを生成
    $releasedCards_query = $this->addPeriodQuery($releasedCards_query, $filters);

    // キーワードで絞り込みするクエリを生成
    $releasedCards_query = $this->addKeywordQuery($releasedCards_query, $filters);

    return $releasedCards_query;
  }
}