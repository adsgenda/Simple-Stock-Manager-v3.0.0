<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function down() {}

    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('view_all')->nullable();
            $table->boolean('edit_all')->nullable();
        });
    }
};
