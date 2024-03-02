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
        $user = User::factory()
                    ->has(
                        UserTag::factory()
                        ->count(1)
                        // ->state(function (array $attributes, User $user) {
                        //     return ['user_id' => $user->id];
                        // })
                    )
                    ->create();

        $this->actingAs($user);

        $response = $this->delete("/tags/{$user->id}/{$user->userTags[0]->id}");

        $response->assertRedirect("/tags/{$user->id}");
    }
}
