<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserRecipeController extends Controller
{
    public function index() {
        return auth()->user()->recipes;
    }
}
