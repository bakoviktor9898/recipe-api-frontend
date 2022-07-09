<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;

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

    public function update(UpdateUserRequest $request){

        $data = $request->validated();
        $user = $request->user();
        $user->update($data);

        return response()->json($user,201);

    }

}
