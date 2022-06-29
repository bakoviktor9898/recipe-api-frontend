<?php

namespace App\Http\Controllers;

use App\Http\Requests\RecipeRequest;
use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    
    public function index(){
        $recipes = Recipe::all();
        return response()->json($recipes,200);
    }

    public function show($id){
        $recipe = Recipe::findOrFail($id);
        return response()->json($recipe,200);
    }

    public function store(RecipeRequest $request){
        return response(['message' => 'store']);
    }
}
