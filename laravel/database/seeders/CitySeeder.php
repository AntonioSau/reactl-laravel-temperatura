<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\City;


class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        City::create([
            'name' => 'Milano',
            'latitude' => 45.46,
            'longitude' => 9.57,
        ]);
    
        City::create([
            'name' => 'Roma',
            'latitude' => 41.89,
            'longitude' => 12.51,
        ]);
    
        City::create([
            'name' => 'Firenze',
            'latitude' => 43.78,
            'longitude' => 11.25,
        ]);
    
        City::create([
            'name' => 'Cagliari',
            'latitude' => 39.23,
            'longitude' => 9.12,
        ]);
    
        City::create([
            'name' => 'Sassari',
            'latitude' => 40.73,
            'longitude' => 8.56,
        ]);
    }
}
