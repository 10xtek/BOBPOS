<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderAddress extends NsModel
{
    use HasFactory;

    protected $table = 'nexopos_' . 'orders_addresses';
	protected $guarded = [];
}
