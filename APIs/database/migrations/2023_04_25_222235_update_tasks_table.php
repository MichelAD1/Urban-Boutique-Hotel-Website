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
        Schema::table('tasks', function (Blueprint $table) {
            $table->dropColumn('employeeid');
            $table->dropColumn('text');
            $table->string('title')->after('id');
            $table->date('startDate')->after('title');
            $table->date('endDate')->after('title');

        });
    }

    /**z
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->string('employeeid');
            $table->date('duedate');
        });
    }
};
