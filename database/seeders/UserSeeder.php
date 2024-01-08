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
        $name_list = array('Helen', 'Jennifer', 'James', 'Alex', 'Nine', 'Cherry', 'Terry', 'Velen', 'Karen', 'Marek');
        DB::table('users')->insert([
            'name' => 'Mimin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('12345678'),
            'role'=> 'admin',
            'age' => random_int(15, 78),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
            'img' => '\images\users\mimin.jpg',
        ]);
        for($i= 0; $i < 10; $i++){
            DB::table('users')->insert([
                'name' => $name_list[$i],
                'email' => $name_list[$i].'@gmail.com',
                'password' => Hash::make('password'),
                'role'=> "user",
                'age' => random_int(15, 78),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
                'img' => '\images\users\user'. $i+1 .'.jpg',
            ]);
        }
    }
}
