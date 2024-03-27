<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Team>
 */
class TeamFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fullname' => fake()->firstname() . ' ' . fake()->lastName(),
            'post' => 'Студофис',
            'description' => fake()->realTextBetween($minNbChars = 10, $maxNbChars = 20, $indexSize = 2),
        ];
    }
}
