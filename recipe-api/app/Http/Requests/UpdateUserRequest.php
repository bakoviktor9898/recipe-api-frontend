<?php

namespace App\Http\Requests;


use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|min:3|max:255|string',
            'email' => 'email|unique:users,email,'.Auth::user()->id,
            'password' => 'sometimes|min:8|max:20|confirmed'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
            $errorArray = [];
            foreach($validator->errors()->toArray() as $key => $value){
                $errorArray[] = $value[0];
            }

            if($this->wantsJson())
            {
                $response = response()->json([
                    'message' => 'Ops! Some errors occurred',
                    'errors' => $errorArray
                ],422);        
            }
                
            throw (new ValidationException($validator, $response))
                ->errorBag($this->errorBag)
                ->redirectTo($this->getRedirectUrl());
    }
    


    
}
