<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $name_list = array('Acer-Aspire-5750', 'Acer-Predator-Helios500', 'Lenovo-Legion-Y540-15', 'Lenovo-Yoga-C940-14IIL', 'Samsung-Galaxy-S23');
        for($i= 0; $i < 5; $i++){
            DB::table('products')->insert([
                'name' => $name_list[$i],
                'qty' => random_int(10, 50),
                'img' => '\images\images\\'. $name_list[$i] .'.jpg',
                'availability' => 'available',
                'price' => random_int(1000000, 6000000),
                'category' => 'electronic',
                'weight' => random_int(1, 3),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
        }
    }
}
