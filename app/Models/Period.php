<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;   // 追加

class Period extends Model
{
    use HasFactory;

    // periodsテーブルに明示的に紐付けする
    protected $table = 'periods';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name_en',
        'name_ja',
    ];

    // Productとのリレーション
    public function products() :HasMany
    {
        // Productsテーブルの'period'カラムから、自身（Periods)のテーブルの'name_en'カラムと一致する値を検索して関連レコードを取得する
        return $this->hasMany(Product::class, 'period', 'name_en');
    }
}
