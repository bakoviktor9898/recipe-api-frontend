<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\UserRecipeController;
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

    // User actions
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    //Route::post('logout', [AuthController::class,'logout']);
    Route::get('my-recipes',[UserRecipeController::class, 'index']);
    Route::delete('user/{id}',[UserController::class, 'delete']);
});


