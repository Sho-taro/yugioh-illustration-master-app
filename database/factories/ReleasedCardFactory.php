<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ReleasedCard>
 */
class ReleasedCardFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // ハモン
            'product_code' => 'soi',
            'list_number' => 'jp002',
            'card_official_id' => '32491822',
        ];
    }
}
