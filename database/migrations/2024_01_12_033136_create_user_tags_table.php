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
        Schema::create('user_tags', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();   // 外部キー制約。削除をカスケードする。
            $table->string('name', 20);      // 最大20文字
            $table->string('status')->default('public');          // 'public'もしくは'private'
            $table->unsignedBigInteger('popularity')->default(0);  // デフォルトは 0
            $table->timestamps();

            $table->unique(['user_id', 'name']);   // 複合ユニーク
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_tags');
    }
};
