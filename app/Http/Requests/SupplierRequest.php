<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SupplierRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'    => 'required',
            'company' => 'nullable',
            'email'   => 'nullable|email',
            'cf1'     => 'nullable|string',
            'cf2'     => 'nullable|string',
            'phone'   => 'nullable|required_without:email',
        ];
    }
}
