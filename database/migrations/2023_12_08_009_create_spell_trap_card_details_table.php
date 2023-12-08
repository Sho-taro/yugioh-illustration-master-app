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
        Schema::create('spell_trap_card_details', function (Blueprint $table) {
            $table->id();
            $table->string('card_official_id', 8)->unique();
            $table->foreign('card_official_id')->references('card_official_id')->on('cards')->cascadeOnUpdate()->cascadeOnDelete();   // 外部キー制約。更新と削除をカスケードする。
            $table->string('play_type_code', 8);
            $table->foreign('play_type_code')->references('play_type_code')->on('spell_trap_play_types')->cascadeOnUpdate()->restrictOnDelete();   // 外部キー制約。更新はカスケードし、削除は制限する。
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spell_trap_card_details');
    }
};
