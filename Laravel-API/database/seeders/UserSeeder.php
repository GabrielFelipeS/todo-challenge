<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()
            ->count(20)
            ->hasTasks(2, [
                'status' => 'in_progress',
            ])
            ->create();

        User::factory()
            ->count(12)
            ->hasTasks(4, [
                'status' => 'completed',
            ])
            ->create();

        User::factory()
            ->count(10)
            ->create();
    }
}
