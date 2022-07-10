<?php

namespace App\Http\Requests;


use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class CreateRecipeRequest extends FormRequest
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
            'name' => 'required|string|min:3|max:255',
            'kcal' => 'required|integer|digits_between:1,10',
            'preparation_time' => 'required|integer|digits_between:1,10',
            'preparation' => 'required|string|min:10',
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
