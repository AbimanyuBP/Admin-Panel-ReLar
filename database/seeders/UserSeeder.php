<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Mimin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('12345678'),
            'role'=> 'admin',
            'age' => random_int(15, 78),
        ]);
        for($i= 0; $i < 10; $i++){
            DB::table('users')->insert([
                'name' => Str::random(10),
                'email' => Str::random(10).'@gmail.com',
                'password' => Hash::make('password'),
                'role'=> "user",
                'age' => random_int(15, 78),
            ]);
        }
    }
}
