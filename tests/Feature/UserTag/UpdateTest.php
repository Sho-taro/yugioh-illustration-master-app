<?php

namespace Tests\Feature\UserTag;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\UserTag;

class UpdateTest extends TestCase
{

    use RefreshDatabase;  // テストの実行前後でデータベースを初期化

    /**
     * A basic feature test example.
     */
    public function test_update_userTag(): void
    {
        // Myタグ1という名前のMyタグを持ったuserを作成
        $user = User::factory()
                    ->has(
                        UserTag::factory()
                        ->count(1)
                        ->state(function (array $attributes, User $user) {
                            return ['user_id' => $user->id, 'name' => 'Myタグ1'];
                        })
                    )
                    ->create();

        $this->actingAs($user);  // 作成したuserでログインした状態にする

        // HTTPリクエスト
        $response = $this->put("/tags/{$user->id}/{$user->userTags[0]->id}", ['userTagName' => 'Myタグa']);

        $response->assertRedirect("/tags/{$user->id}/{$user->userTags[0]->id}");
    }
}
