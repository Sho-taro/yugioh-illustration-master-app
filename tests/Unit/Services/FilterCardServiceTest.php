<?php

namespace Tests\Unit\Services;

use PHPUnit\Framework\TestCase;
use App\Services\FilterCardService;

class FilterCardServiceTest extends TestCase
{
    /**
     * ユーザが入力したカードの絞り込み条件を取得し、$filtersとして返す「getRequestFilters」メソッドの単体テスト
     */
    public function test_getRequestFilters(): void
    {
        $filterCardService = new FilterCardService();

        // モンスターカード
        $inputs01 = [
            'access-type' => 'filtering',
            'target' => 'monster',
            'card-name' => 'マジシャン ガール',
            'frame-types' => ['effect'],
            'races' => ['magician'],
            'attributes' => ['dark', 'light'],
            'level-or-ranks' => ['7'],
            'link-values' => ['2'],
            'periods' => ['2', '3', '4', '5'],
        ];
        $result01 = $filterCardService->getRequestFilters($inputs01);
        $this->assertEquals($result01, [
            'access-type' => 'filtering',
            'target' => 'monster',
            'card-name' => 'マジシャン ガール',
            'frame-types' => ['effect'],
            'races' => ['magician'],
            'attributes' => ['dark', 'light'],
            'level-or-ranks' => ['7'],
            'link-values' => ['2'],
            'periods' => ['2', '3', '4', '5'],
            'play-types' => [],
        ]);


        // 魔法カード
        $inputs02 = [
            'access-type' => null,
            'target' => 'spell',
            'card-name' => 'ちから',
            'frame-types' => ['spell'],
            'periods' => [],
            'play-types' => ['normal'],
        ];
        $result02 = $filterCardService->getRequestFilters($inputs02);
        $this->assertEquals($result02, [
            'access-type' => null,
            'target' => 'spell',
            'card-name' => 'ちから',
            'frame-types' => ['spell'],
            'races' => [],
            'attributes' => [],
            'level-or-ranks' => [],
            'link-values' => [],
            'periods' => [],
            'play-types' => ['normal'],
        ]);

        // 罠カード
        $inputs03 = [
            'access-type' => null,
            'target' => 'trap',
            'card-name' => '穴',
            'frame-types' => ['trap'],
            'periods' => ['5'],
            'play-types' => ['counter'],
        ];
        $result03 = $filterCardService->getRequestFilters($inputs03);
        $this->assertEquals($result03, [
            'access-type' => null,
            'target' => 'trap',
            'card-name' => '穴',
            'frame-types' => ['trap'],
            'races' => [],
            'attributes' => [],
            'level-or-ranks' => [],
            'link-values' => [],
            'periods' => ['5'],
            'play-types' => ['counter'],
        ]);

        // all
        $inputs04 = [
            'access-type' => 'filtering',
            'target' => 'all',
            'card-name' => 'あい',
            'frame-types' => [],
            'periods' => ['5', '9'],
            'play-types' => [],
        ];
        $result04 = $filterCardService->getRequestFilters($inputs04);
        $this->assertEquals($result04, [
            'access-type' => 'filtering',
            'target' => 'all',
            'card-name' => 'あい',
            'frame-types' => [],
            'races' => [],
            'attributes' => [],
            'level-or-ranks' => [],
            'link-values' => [],
            'periods' => ['5', '9'],
            'play-types' => [],
        ]);
    }
}
