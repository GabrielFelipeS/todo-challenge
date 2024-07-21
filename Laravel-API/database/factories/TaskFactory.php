<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = $this->faker->randomElement(['pending', 'canceled']);
        $assigned_at = $this->faker->dateTimeBetween('-2 years', '+2 months');
        $completed_at = ($status == 'pending') ?
            $this->faker->dateTimeBetween($assigned_at, '+2 months') : null;
        return [
            'title' => $this->faker->words(3, true),
            'description' => $this->faker->paragraph(),
            'status' => $status,
            'due_date' => $this->faker->dateTime(),
            'assigned_at' => $assigned_at,
            'completed_at' => $completed_at,
        ];
    }
}
