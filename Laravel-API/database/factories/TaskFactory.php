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
        $status = $this->faker->randomElement(['pending', 'in_progress', 'completed', 'canceled']);

        $created_updated_at = $this->faker->dateTimeBetween('-2 years', 'now');
        $task_date = $this->faker->dateTimeBetween($created_updated_at, '+50 days');
        $assigned_at = $this->faker->dateTimeBetween($created_updated_at, 'now');

        $completed_at = ($status == 'completed') ?
            $this->faker->dateTimeBetween($assigned_at, '+2 months') : null;

        return [
            'title' => $this->faker->words(3, true),
            'description' => $this->faker->paragraph(),
            'status' => $status,
            'task_date' => $task_date,
            'assigned_at' => $assigned_at,
            'completed_at' => $completed_at,
            'created_at' => $created_updated_at,
            'updated_at' => $created_updated_at,
        ];
    }
}
