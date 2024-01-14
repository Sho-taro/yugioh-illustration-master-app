<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;  // 追加

class ReleasedCardUserTag extends Model
{
    use HasFactory;

    // released_card_user_tagsテーブルに明示的に紐付けする
    protected $table = 'released_card_user_tags';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_tag_id',
        'released_card_id',
    ];

    public function releasedCard() :BelongsTo
    {
        // ＊これだけ第２引数と第３引数の順番が逆
        // 自身(released_card_user_tagsテーブル)の'released_card_id'カラムと一致する値を、released_cardsテーブルの'id'カラムから検索して関連レコードを取得する
        return $this->belongsTo(ReleasedCard::class, 'released_card_id', 'id');
    }
}
