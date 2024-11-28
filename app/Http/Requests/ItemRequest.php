<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Http\FormRequest;

class ItemRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'           => 'required',
            'code'           => 'required|alpha_dash|unique:items,code,' . optional($this->route('item'))->id,
            'symbology'      => 'required',
            'category_id'    => 'required|exists:categories,id',
            'quantity'       => 'required',
            'unit'           => 'nullable',
            'alert_quantity' => 'nullable|numeric',
            'photo'          => 'nullable|image',
        ];
    }

    public function validated($key = null, $default = null)
    {
        $data = $this->validator->validated();
        if ($this->has('photo') && $this->photo && ! str($this->photo)->endsWith('images/dummy.jpg')) {
            $path = $this->photo->store('/images', 'public');
            $data['photo'] = Storage::disk('public')->url($path);
        }

        return $data;
    }
}
