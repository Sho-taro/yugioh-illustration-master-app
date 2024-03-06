<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     */
    public function testBasicExample(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->screenshot('SS')   // スクリーンショットを撮影（保存先はtests/Browser/screenshotsディレクトリ）
                    // ->assertSee('遊戯王');
                    ->assertSee('Laravel');
        });
    }
}
