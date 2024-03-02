<?php

namespace Tests\Feature\UserTag;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class StoreTest extends TestCase
{

    use RefreshDatabase;  // テストの実行前後でデータベースを初期化

    /**
     * A basic feature test example.
     */
    public function test_store_userTag(): void
    {
        $user = User::factory()->create();
        $this->actingAs($user);     // 作成したuserでログインした状態にする

        // HTTPリクエスト
        $response = $this->post("/tags/{$user->id}", ['name' => 'Myタグ1', 'status' => 'public']);

        $response->assertRedirect("/tags/{$user->id}");
        // $response->assertSee("Myタグ「My」を新規作成しました。");
    }
}
