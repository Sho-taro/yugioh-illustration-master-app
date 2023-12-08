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
        Schema::create('cards', function (Blueprint $table) {
            $table->id();
            $table->string('card_official_id', 8)->unique();
            $table->string('name_ja', 100);
            $table->string('name_ja_kana', 100);
            $table->string('name_en', 100);
            $table->string('frame_type_code', 8);
            $table->foreign('frame_type_code')->references('frame_type_code')->on('frame_types')->cascadeOnUpdate()->restrictOnDelete();   // 外部キー制約。更新はカスケードし、削除は制限する。
            $table->string('archetype_code', 8);
            $table->foreign('archetype_code')->references('archetype_code')->on('archetypes')->cascadeOnUpdate()->restrictOnDelete();   // 外部キー制約。更新はカスケードし、削除は制限する。
            $table->index('frame_type_code', 'frameTypeCodeIndex');    // frame_type_codeカラムにindexを貼る。'frameTypeCodeIndex'というindex名を指定。
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cards');

        // インデックスを削除
        $table->dropIndex('cards_frameTypeCodeIndex_index');
        // 例: $table->dropIndex('テーブル名_インデックス名_index');
    }
};
