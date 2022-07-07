<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Foundation\Auth\User as AuthUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    
    public function delete($id)
    {
        $user = User::find($id);
        $loggedInUser = auth()->user();

        if($user && $loggedInUser){
            $user->delete();
            return response()->json([
                'message' => 'User deleted successfully'
            ]);
        } 

        return response()->json([
            'message' => 'Something went wrong'
        ]);

    }

}
