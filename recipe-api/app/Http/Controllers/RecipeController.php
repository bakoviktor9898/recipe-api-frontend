<?php

namespace App\Http\Controllers;

use App\Http\Requests\RecipeRequest;
use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    
    public function index(){
        $recipes = Recipe::all();
        return response($recipes);
    }

    public function show($id){
        $recipe = Recipe::find($id);
        return response($recipe);
    }

    public function store(RecipeRequest $request){
        return response(['message' => 'store']);
    }
}
