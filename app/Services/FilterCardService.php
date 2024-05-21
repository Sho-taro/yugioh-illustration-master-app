<?php

namespace App\Services;

// カードの絞り込み条件に関するクラス
class FilterCardService {

  /**
   * ユーザが入力したカードの絞り込み条件を取得し、$filtersとして返す
   *
   * @param array $inputs $request->input('body')を渡す想定
   * @return array $filters
   */
  public function getRequestFilters(array $inputs)
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
}