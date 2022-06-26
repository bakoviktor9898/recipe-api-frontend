<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\RecipeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// Protected routes
Route::middleware('auth:sanctum')->group(function(){

    // Recipes
    Route::get('recipe',[RecipeController::class,'index']);
    Route::post('recipe',[RecipeController::class,'store']);
    Route::get('recipe/{id}',[RecipeController::class,'show']);

    // User
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('logout', [AuthController::class,'logout']);
});

// Public routes
Route::post('login', [AuthController::class,'login']);
Route::post('register', [AuthController::class,'register']);


