<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('nexopos_customers', function (Blueprint $table) {
            //
			$table->integer( 'woocommerce_customer_id' )->default(0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('nexopos_customers', function (Blueprint $table) {
            //woocommerce_customer_id remove
			$table->dropColumn( 'woocommerce_customer_id' );
        });
    }
};
