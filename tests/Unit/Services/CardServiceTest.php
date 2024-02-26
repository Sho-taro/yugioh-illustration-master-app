<?php

namespace Tests\Unit\Services;

use PHPUnit\Framework\TestCase;
use App\Services\CardService;

class CardServiceTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_getCardType(): void
    {
      $cardService = new CardService();  // CardServiceクラスのインスタンスを作成

      $result01 = $cardService->getCardType('FR0014');
      $this->assertEquals($result01, 'spell/trap');

      $result02 = $cardService->getCardType('FR0015');
      $this->assertEquals($result02, 'spell/trap');

      $result03 = $cardService->getCardType('FR0016');
      $this->assertEquals($result03, 'token');

      $result04 = $cardService->getCardType('FR0017');
      $this->assertEquals($result04, 'skill');

      $result05 = $cardService->getCardType('FR0001');
      $this->assertEquals($result05, 'monster');

      $result06 = $cardService->getCardType('FR0002');
      $this->assertEquals($result06, 'monster');
    }
}
