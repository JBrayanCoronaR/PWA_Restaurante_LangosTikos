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
        Schema::create('menus', function (Blueprint $table) {
            $table->id('id_menu');
            $table->string('nombre');
            // Llaves foráneas para Platos, Bebidas y Postres
            $table->foreignId('id_plato')->references('id_plato')->on('platos')->onDelete('cascade');
            $table->foreignId('id_bebida')->references('id_bebida')->on('bebidas')->onDelete('cascade');
            $table->foreignId('id_postre')->references('id_postre')->on('postres')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
