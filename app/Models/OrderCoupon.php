<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderCoupon extends NsModel
{
    use HasFactory;

    protected $table = 'nexopos_' . 'orders_coupons';
	protected $guarded = [];

    public function customerCoupon()
    {
        return $this->belongsTo( CustomerCoupon::class, 'customer_coupon_id' );
    }
}
