<?php

namespace App\Http\Requests;

use App\Helpers\CheckOverSelling;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

class CheckoutRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'date'                 => 'required|date',
            'reference'            => 'nullable',
            'customer_id'          => 'required|exists:customers,id',
            'attachment'           => 'nullable|mimes:jpg,png,pdf,docx,xlsx,zip',
            'note'                 => 'nullable',
            'items'                => 'required|array|min:1',
            'items.*.id'           => 'nullable',
            'items.*.code'         => 'required',
            'items.*.name'         => 'required',
            'items.*.unit'         => 'nullable',
            'items.*.quantity'     => 'required|numeric',
            'items.*.old_quantity' => 'nullable|numeric',
            'items.*.item_id'      => 'required|exists:items,id',

            'attachments'   => 'nullable|array',
            'attachments.*' => 'mimes:' . ((get_settings('attachment_exts') ?? null) ?: 'jpg,png,pdf,xlsx,docx,zip'),
        ];
    }

    public function validated($key = null, $default = null)
    {
        $data = $this->validator->validated();
        if (! get_settings('over_selling')) {
            $error = (new CheckOverSelling)->check($this->input('items'));
            if ($error) {
                throw ValidationException::withMessages($error);
            }
        }
        if ($this->has('attachment') && $this->attachment) {
            $path = $this->attachment->store('/images', 'public');
            $data['attachment'] = Storage::disk('public')->url($path);
        } else {
            unset($data['attachment']);
        }

        return $data;
    }

    // protected function passedValidation()
    // {
    //     if (!get_settings('over_selling')) {
    //         $error = (new CheckOverSelling())->check($this->input('items'));
    //         if ($error) {
    //             throw ValidationException::withMessages($error);
    //         }
    //     }
    // }
}
