<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateRecipeRequest;
use App\Http\Requests\RecipeRequest;
use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    
    public function index(){
        $recipes = Recipe::orderBy('created_at','desc')->get();
        return response()->json($recipes,200);
    }

    public function show($id){

        $recipe = Recipe::findOrFail($id);
        
        return response()->json($recipe,200);
    }

    public function store(CreateRecipeRequest $request){

        $data = $request->validated();
        $recipe = Recipe::create($data);
        $recipe->user_id = $request->user()->id;
        $recipe->save();

        return response()->json($recipe,200);
    }
}
