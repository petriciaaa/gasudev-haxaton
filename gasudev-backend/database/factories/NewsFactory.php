<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->realTextBetween($minNbChars = 20, $maxNbChars = 40, $indexSize = 2),
            'content' => fake()->realTextBetween($minNbChars = 200, $maxNbChars = 1000, $indexSize = 2),
            'user_id' => User::all()->random()->id,
        ];
    }
}
