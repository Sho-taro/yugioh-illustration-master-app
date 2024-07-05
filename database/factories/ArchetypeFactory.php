<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Archetype>
 */
class ArchetypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'archetype_code' => 'AR0000',
            'name_ja' => 'カテゴリ無し',
            'name_en' => 'no archetype',
        ];
    }
}
