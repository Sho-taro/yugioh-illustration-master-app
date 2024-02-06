<?php

namespace App\Http\Requests\UserTag;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // return false;
        return true;   // trueに変更
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // ここにuser_tagsのバリデーションを記述する
            'name' => ['required', 'string', 'max:20', 'unique:user_tags,name'],    // 最大20文字
            'status' => ['required', 'string', \Illuminate\Validation\Rule::in(['public', 'private'])],
        ];
    }
}
