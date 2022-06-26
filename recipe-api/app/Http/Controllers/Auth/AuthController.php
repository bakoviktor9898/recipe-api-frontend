<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(LoginRequest $request){
        $credentials = $request->validated();

        if(!Auth::attempt($credentials)){
            return response()->json([
                'message' => 'Your email or password is incorrect',
            ],404);
        }

        return response()->json([
            'user'=> Auth::user(),
            'token' => Auth::user()->createToken('token')->plainTextToken
        ]);
    }

    public function logout(Request $request){
        
        auth()->user()->tokens()->delete();
        return response()->json([
            'message' => 'Logged out'
        ]) ;
    }

    public function register(RegisterRequest $request){
        $credentials = $request->validated();
        $user = User::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => Hash::make($credentials['password']),
        ]);
        
        return response()->json([
            'user' => $user,
            'token' => $user->createToken('token')->plainTextToken
        ]);
    }

}
