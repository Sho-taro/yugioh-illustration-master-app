<?php

namespace Tests\Feature\UserTag;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\UserTag;

class DestroyTest extends TestCase
{

    use RefreshDatabase;  // テストの実行前後でデータベースを初期化

    /**
     * A basic feature test example.
     */
    public function test_destroy_userTag(): void
    {
        // 書き方１
        // $user = User::factory()
        //             ->has(
        //                 UserTag::factory()
        //                 ->count(1)
        //                 // ->state(function (array $attributes, User $user) {
        //                 //     return ['user_id' => $user->id];
        //                 // })
        //             )
        //             ->create();

        // $this->actingAs($user);
        // $response = $this->delete("/tags/{$user->id}/{$user->userTags[0]->id}");

        // 書き方２
        $user = User::factory()->create();   // userファクトリの生成
        $user_tag = UserTag::factory()->create([
            'user_id' => $user->id   // user_idカラムの値を、作成したuserファクトリのidに設定
        ]);

        $this->actingAs($user);
        $response = $this->delete("/tags/{$user->id}/{$user_tag->id}");

        $response->assertRedirect("/tags/{$user->id}");
    }
}
