<?php

namespace Tests\Feature\ClientDashboard;

use Tests\TestCase;
use Modules\ClientDashboardSync\Http\Controllers\API\OrderController;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use App\Models\User;
use App\Models\Customer;
use App\Models\Order;
use App\Models\OrderBillingAddress;
use App\Models\OrderShippingAddress;

class SyncOrders extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

	/** @test */
    public function it_can_create_a_new_order()
    {
        // Mock necessary dependencies like HTTP client and authorization headers
        Http::fake([
            '*/orders' => Http::response(['data' => [['id' => 1]], 'next_page_url' => null], 200),
        ]);
        
        // Mock the user
        $user = App\Models\User;=::factory()->create(['is_retail_user' => 1]);

        // Mock the order controller instance
        $orderController = new OrderController();

        // Call the syncOrders method with mock data and assert that a new order is created
        $response = $orderController->syncOrders();

        $response->assertJson([
            'message' => 'Orders synced successfully',
            'count' => 1,
        ]);

        $this->assertDatabaseHas('orders', ['clientdashboard_order_id' => 1, 'author' => $user->id]);
    }
}
