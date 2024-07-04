<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Card>
 */
class CardFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'card_official_id' => '00000000',
            'name_ja' => 'ブラック・マジシャン',
            'name_ja_kana' => 'ブラック・マジシャン',
            'name_en' => 'Dark Magician',
            'frame_type_code' => 'FR0001',
            'archetype_code' => 'AR0000',
        ];
    }
}
