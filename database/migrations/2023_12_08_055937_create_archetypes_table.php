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
        Schema::create('archetypes', function (Blueprint $table) {
            $table->id();
            $table->string('archetype_code', 8)->unique();
            $table->string('name_ja', 100);
            $table->string('name_en', 100);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('archetypes');
    }
};
