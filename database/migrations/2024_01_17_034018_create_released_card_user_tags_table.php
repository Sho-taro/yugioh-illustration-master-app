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
        Schema::create('released_card_user_tags', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_tag_id')->constrained()->cascadeOnDelete();   // 外部キー制約。削除をカスケードする。
            $table->foreignId('released_card_id')->constrained()->cascadeOnDelete();   // 外部キー制約。削除をカスケードする。
            $table->timestamps();

            $table->unique(['user_tag_id', 'released_card_id']);   // 複合ユニーク
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('released_card_user_tags');
    }
};
