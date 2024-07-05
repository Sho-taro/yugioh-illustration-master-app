<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_code' => 'soi',
            'name_ja' => 'シャドウ・オブ・インフィニティ',
            'name_en' => '', # 空欄可
            'release_date' => '2005-11-17',
        ];
    }
}
