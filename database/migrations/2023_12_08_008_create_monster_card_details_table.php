<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('monster_card_details', function (Blueprint $table) {
            $table->id();
            $table->string('card_official_id', 8)->unique();
            $table->foreign('card_official_id')->references('card_official_id')->on('cards')->cascadeOnUpdate()->cascadeOnDelete();   // 外部キー制約。更新と削除をカスケードする。
            $table->string('attack', 8);    // 攻撃力・守備力が　? のモンスターもいるのでstring型
            $table->string('defense', 8);   // リンクモンスターは N/A
            $table->string('race_code', 8);
            $table->foreign('race_code')->references('race_code')->on('races')->cascadeOnUpdate()->restrictOnDelete();   // 外部キー制約。更新はカスケードし、削除は制限する。
            $table->string('attribute_code', 8);
            $table->foreign('attribute_code')->references('attribute_code')->on('attributes')->cascadeOnUpdate()->restrictOnDelete();   // 外部キー制約。更新はカスケードし、削除は制限する。
            $table->string('level or rank', 8);   // note: カラム名が間違っていたため、別のマイグレーションファイルで修正済み。正しくはlevel_or_rank。  // リンクモンスターは N/A
            $table->string('link_val', 8);  // note: カラム名が間違っていたため、別のマイグレーションファイルで修正済み。正しくはlink_value。 // リンクモンスター以外は N/A　
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monster_card_details');
    }
};
