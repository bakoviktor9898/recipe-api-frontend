<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserRecipeController extends Controller
{
    public function index() {
        return auth()->user()->recipes;
    }

    public function delete($id){
        $user_id = Auth::id();
        $recipe = Recipe::where('id',$id)->where('user_id',$user_id)->first();
        if($recipe){
            $recipe->delete();
            return response()->json(['message'=> 'Recipe has been deleted'],200);
        } 
        return response()->json(['message'=> 'something went wrong'],500);
    }
}
