<?php

namespace Tests\Feature\UserTag;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\UserTag;

class IndexTest extends TestCase
{

    use RefreshDatabase;  // テストの実行前後でデータベースを初期化

    /**
     * A basic feature test example.
     */
    public function test_index_userTag(): void
    {
        // Myタグを8つ持つuserを作成
        $user = User::factory()
                    ->has(UserTag::factory()->count(8))
                    ->create();

        $this->actingAs($user);  // 作成したuserでログインした状態にする

        // HTTPリクエスト
        $response = $this->get("/tags/{$user->id}");

        $response->assertStatus(200);
    }
}
