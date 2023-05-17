<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCityRequest;
use App\Http\Requests\UpdateCityRequest;
use App\Models\City;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;


class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{   
            $cities = City::all(); 
            return response()->json([ 
                'cities' => $cities 
            ]);
         } catch (Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => report($e)
            ], Response::HTTP_BAD_REQUEST);
        } 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCityRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show( string $apiToken, int $id)
    {
        $client = new Client();
        try {
            $city = City::findOrFail( $id );    

            $response = $client->get('https://api.open-meteo.com/v1/forecast', [
                'query' => [
                    'latitude' => $city->latitude,
                    'longitude' => $city->longitude,
                    'current_weather' => 'true',
                    'daily' => 'temperature_2m_max,temperature_2m_min,winddirection_10m_dominant,weathercode,precipitation_probability_mean',
                    'timezone'=>'CET'
                ]
            ]);
    

            $data = json_decode($response->getBody(), true);
             
            return response()->json([ 
                'weather' => $data ,
                'city' => $city
            ]);
    
            // Gestisci la risposta dell'API qui...
        } catch (RequestException $e) {
            return response()->json([
                'success' => false,
                'message' => report($e)
            ], Response::HTTP_BAD_REQUEST);
        }        
   
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(City $city)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCityRequest $request, City $city)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(City $city)
    {
        //
    }
}
