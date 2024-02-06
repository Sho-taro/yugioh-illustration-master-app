<?php

namespace App\Http\Requests\UserTag;

use Illuminate\Foundation\Http\FormRequest;

class UpdateNameRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // ここにバリデーションを記述する
            'userTagName' => ['required', 'string', 'max:20',  'unique:user_tags,name'],    // 最大20文字
        ];
    }
}
