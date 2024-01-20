<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;   // 追加

class UserTag extends Model
{
    use HasFactory;

    // user_tagsテーブルに明示的に紐付けする
    protected $table = 'user_tags';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'name',
        'status',
        'popularity'
    ];

    public function releasedCardUserTags() :HasMany
    {
        // released_card_user_tagsテーブルの'user_tag_id'カラムから、自身（user_tagsテーブル）の'id'カラムと一致する値を検索して関連レコードを取得する
        return $this->hasMany(ReleasedCardUserTag::class, 'user_tag_id', 'id');
    }
}
