<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderRefund extends NsModel
{
    use HasFactory;
	protected $guarded = [];

    protected $table = 'nexopos_' . 'orders_refunds';

    public function refunded_products()
    {
        return $this->hasMany( OrderProductRefund::class, 'order_refund_id', 'id' );
    }

    public function order()
    {
        return $this->belongsTo( Order::class, 'order_id', 'id' );
    }

    public function author()
    {
        return $this->belongsTo( User::class, 'author', 'id' );
    }
}
