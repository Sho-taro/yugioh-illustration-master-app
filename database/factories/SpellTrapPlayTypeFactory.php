<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SpellTrapPlayType>
 */
class SpellTrapPlayTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'play_type_code' => 'PL0001',
            'name_ja' => '通常',
            'name_en' => 'Normal',
        ];
    }
}
