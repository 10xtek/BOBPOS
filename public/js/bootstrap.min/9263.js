"use strict";(self.webpackChunkBOBPOS_4x=self.webpackChunkBOBPOS_4x||[]).push([[9263,4864],{9263:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var s=r(2242),n=r(9671),i=r(4864),o=r(7389);const a={data:function(){return{products:[],isLoading:!1}},computed:{order:function(){return this.$popupParams.order}},mounted:function(){this.loadProducts()},methods:{__:o.__,close:function(){this.$popupParams.reject(!1),this.$popup.close()},loadProducts:function(){var e=this;this.isLoading=!0;var t=this.$popupParams.order.id;n.ih.get("/api/nexopos/v4/orders/".concat(t,"/products")).subscribe((function(t){e.isLoading=!1,e.products=t}))},openOrder:function(){this.$popup.close(),this.$popupParams.resolve(this.order)}}};var c=r(1900);const l=(0,c.Z)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shadow-lg bg-surface-tertiary w-6/7-screen md:w-3/5-screen lg:w-2/5-screen h-6/7-screen flex flex-col overflow-hidden"},[r("div",{staticClass:"p-2 flex justify-between text-primary items-center border-b border-surface-secondary"},[r("h3",{staticClass:"font-semibold"},[e._v(e._s(e.__("Products"))+" — "+e._s(e.order.code)+" "),e.order.title?r("span",[e._v("("+e._s(e.order.title)+")")]):e._e()]),e._v(" "),r("div",[r("ns-close-button",{on:{click:function(t){return e.close()}}})],1)]),e._v(" "),r("div",{staticClass:"flex-auto p-2 overflow-y-auto"},[e.isLoading?r("div",{staticClass:"flex-auto relative"},[r("div",{staticClass:"h-full w-full flex items-center justify-center"},[r("ns-spinner")],1)]):e._e(),e._v(" "),e.isLoading?e._e():e._l(e.products,(function(t){return r("div",{key:t.id,staticClass:"item"},[r("div",{staticClass:"flex-col border-b border-info-primary py-2"},[r("div",{staticClass:"title font-semibold text-primary flex justify-between"},[r("span",[e._v(e._s(t.name)+" (x"+e._s(t.quantity)+")")]),e._v(" "),r("span",[e._v(e._s(e._f("currency")(t.total_price)))])]),e._v(" "),r("div",{staticClass:"text-sm text-primary"},[r("ul",[r("li",[e._v(e._s(e.__("Unit"))+" : "+e._s(t.unit.name))])])])])])}))],2),e._v(" "),r("div",{staticClass:"flex justify-end p-2 border-t border-surface-secondary"},[r("div",{staticClass:"px-1"},[r("div",{staticClass:"-mx-2 flex"},[r("div",{staticClass:"px-1"},[r("ns-button",{attrs:{type:"info"},on:{click:function(t){return e.openOrder()}}},[e._v(e._s(e.__("Open")))])],1),e._v(" "),r("div",{staticClass:"px-1"},[r("ns-button",{attrs:{type:"danger"},on:{click:function(t){return e.close()}}},[e._v(e._s(e.__("Close")))])],1)])])])])}),[],!1,null,null,null).exports;const d={props:["orders"],data:function(){return{searchField:""}},watch:{orders:function(){n.kq.doAction("ns-pos-pending-orders-refreshed",this.orders)}},mounted:function(){},name:"ns-pos-pending-order",methods:{__:o.__,previewOrder:function(e){this.$emit("previewOrder",e)},proceedOpenOrder:function(e){this.$emit("proceedOpenOrder",e)},searchOrder:function(){this.$emit("searchOrder",this.searchField)},printOrder:function(e){this.$emit("printOrder",e)}}};const u={components:{nsPosPendingOrders:(0,c.Z)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-auto flex-col overflow-hidden"},[r("div",{staticClass:"p-1"},[r("div",{staticClass:"flex rounded border-2 input-group ns-secondary"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchField,expression:"searchField"}],staticClass:"p-2 outline-none flex-auto",attrs:{type:"text"},domProps:{value:e.searchField},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchOrder()},input:function(t){t.target.composing||(e.searchField=t.target.value)}}}),e._v(" "),r("button",{staticClass:"w-16 md:w-24",on:{click:function(t){return e.searchOrder()}}},[r("i",{staticClass:"las la-search"}),e._v(" "),r("span",{staticClass:"mr-1 hidden md:visible"},[e._v(e._s(e.__("Search")))])])])]),e._v(" "),r("div",{staticClass:"overflow-y-auto flex flex-auto"},[r("div",{staticClass:"flex p-2 flex-auto flex-col overflow-y-auto"},[e._l(e.orders,(function(t){return r("div",{key:t.id,staticClass:"border-b border-surface-primary w-full py-2",attrs:{"data-order-id":t.id}},[r("h3",{staticClass:"text-primary"},[e._v(e._s(t.title||"Untitled Order"))]),e._v(" "),r("div",{staticClass:"px-2"},[r("div",{staticClass:"flex flex-wrap -mx-4"},[r("div",{staticClass:"w-full md:w-1/2 px-2"},[r("p",{staticClass:"text-sm text-primary"},[r("strong",[e._v(e._s(e.__("Code")))]),e._v(" : "+e._s(t.code))]),e._v(" "),r("p",{staticClass:"text-sm text-primary"},[r("strong",[e._v(e._s(e.__("Cashier")))]),e._v(" : "+e._s(t.nexopos_users_username))]),e._v(" "),r("p",{staticClass:"text-sm text-primary"},[r("strong",[e._v(e._s(e.__("Total")))]),e._v(" : "+e._s(e._f("currency")(t.total)))]),e._v(" "),r("p",{staticClass:"text-sm text-primary"},[r("strong",[e._v(e._s(e.__("Tendered")))]),e._v(" : "+e._s(e._f("currency")(t.tendered)))])]),e._v(" "),r("div",{staticClass:"w-full md:w-1/2 px-2"},[r("p",{staticClass:"text-sm text-primary"},[r("strong",[e._v(e._s(e.__("Customer")))]),e._v(" : "+e._s(t.nexopos_customers_name))]),e._v(" "),r("p",{staticClass:"text-sm text-primary"},[r("strong",[e._v(e._s(e.__("Date")))]),e._v(" : "+e._s(t.created_at))]),e._v(" "),r("p",{staticClass:"text-sm text-primary"},[r("strong",[e._v(e._s(e.__("Type")))]),e._v(" : "+e._s(t.type))])])])]),e._v(" "),r("div",{staticClass:"flex justify-end w-full mt-2"},[r("div",{staticClass:"flex rounded-lg overflow-hidden buttons-container"},[r("button",{staticClass:"text-white bg-success-primary outline-none px-2 py-1",on:{click:function(r){return e.proceedOpenOrder(t)}}},[r("i",{staticClass:"las la-lock-open"}),e._v(" "+e._s(e.__("Open")))]),e._v(" "),r("button",{staticClass:"text-white bg-info-primary outline-none px-2 py-1",on:{click:function(r){return e.previewOrder(t)}}},[r("i",{staticClass:"las la-eye"}),e._v(" "+e._s(e.__("Products")))]),e._v(" "),r("button",{staticClass:"text-surface-secondary bg-default-primary outline-none px-2 py-1",on:{click:function(r){return e.printOrder(t)}}},[r("i",{staticClass:"las la-print"}),e._v(" "+e._s(e.__("Print")))])])])])})),e._v(" "),0===e.orders.length?r("div",{staticClass:"h-full v-full items-center justify-center flex"},[r("h3",{staticClass:"text-semibold text-primary"},[e._v(e._s(e.__("Nothing to display...")))])]):e._e()],2)])])}),[],!1,null,null,null).exports},methods:{__:o.__,searchOrder:function(e){var t=this;n.ih.get("/api/nexopos/v4/crud/".concat(this.active,"?search=").concat(e)).subscribe((function(e){t.orders=e.data}))},setActiveTab:function(e){this.active=e,this.loadOrderFromType(e)},openOrder:function(e){POS.loadOrder(e.id),this.$popup.close()},loadOrderFromType:function(e){var t=this;n.ih.get("/api/nexopos/v4/crud/".concat(e)).subscribe((function(e){t.orders=e.data}))},previewOrder:function(e){var t=this;new Promise((function(t,r){Popup.show(l,{order:e,resolve:t,reject:r})})).then((function(r){t.proceedOpenOrder(e)}),(function(e){return e}))},printOrder:function(e){POS.printOrderReceipt(e)},proceedOpenOrder:function(e){var t=this;if(POS.products.getValue().length>0)return Popup.show(i.default,{title:"Confirm Your Action",message:"The cart is not empty. Opening an order will clear your cart would you proceed ?",onAction:function(r){r&&t.openOrder(e)}});this.openOrder(e)}},data:function(){return{active:"ns.hold-orders",searchField:"",orders:[]}},mounted:function(){var e=this;this.$popup.event.subscribe((function(t){"click-overlay"===t.event&&e.$popup.close()})),this.loadOrderFromType(this.active)}};const p=(0,c.Z)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shadow-lg bg-surface-tertiary w-6/7-screen md:w-3/5-screen lg:w-2/5-screen h-6/7-screen flex flex-col overflow-hidden"},[r("div",{staticClass:"p-2 flex justify-between text-primary items-center border-surface-secondary border-b"},[r("h3",{staticClass:"font-semibold"},[e._v(e._s(e.__("Orders")))]),e._v(" "),r("div",[r("ns-close-button",{on:{click:function(t){return e.$popup.close()}}})],1)]),e._v(" "),r("div",{staticClass:"p-2 flex overflow-hidden flex-auto"},[r("ns-tabs",{attrs:{active:e.active},on:{changeTab:function(t){return e.setActiveTab(t)}}},[r("ns-tabs-item",{staticClass:"flex flex-col overflow-hidden",attrs:{identifier:"ns.hold-orders",label:e.__("On Hold"),padding:"p-0"}},[r("ns-pos-pending-orders",{attrs:{orders:e.orders},on:{searchOrder:function(t){return e.searchOrder(t)},previewOrder:function(t){return e.previewOrder(t)},printOrder:function(t){return e.printOrder(t)},proceedOpenOrder:function(t){return e.proceedOpenOrder(t)}}})],1),e._v(" "),r("ns-tabs-item",{staticClass:"flex flex-col overflow-hidden",attrs:{identifier:"ns.unpaid-orders",label:e.__("Unpaid"),padding:"p-0"}},[r("ns-pos-pending-orders",{attrs:{orders:e.orders},on:{searchOrder:function(t){return e.searchOrder(t)},previewOrder:function(t){return e.previewOrder(t)},printOrder:function(t){return e.printOrder(t)},proceedOpenOrder:function(t){return e.proceedOpenOrder(t)}}})],1),e._v(" "),r("ns-tabs-item",{staticClass:"flex flex-col overflow-hidden",attrs:{identifier:"ns.partially-paid-orders",label:e.__("Partially Paid"),padding:"p-0"}},[r("ns-pos-pending-orders",{attrs:{orders:e.orders},on:{searchOrder:function(t){return e.searchOrder(t)},previewOrder:function(t){return e.previewOrder(t)},printOrder:function(t){return e.printOrder(t)},proceedOpenOrder:function(t){return e.proceedOpenOrder(t)}}})],1)],1)],1),e._v(" "),r("div",{staticClass:"p-2 flex justify-between border-surface-secondary border-t bg-surface-secondary"},[r("div"),e._v(" "),r("div",[r("ns-button",[e._v(e._s(e.__("Close")))])],1)])])}),[],!1,null,null,null).exports,_={name:"ns-pos-pending-orders-button",methods:{__:o.__,openPendingOrdersPopup:function(){(new s.G).open(p)}}};const f=(0,c.Z)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"flex-shrink-0 h-12 flex items-center shadow rounded px-2 py-1 text-sm",on:{click:function(t){return e.openPendingOrdersPopup()}}},[r("i",{staticClass:"mr-1 text-xl lar la-hand-pointer"}),e._v(" "),r("span",[e._v(e._s(e.__("Orders")))])])}),[],!1,null,null,null).exports},4864:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const s={data:function(){return{title:"",message:""}},computed:{size:function(){return this.$popupParams.size||"h-full w-full"}},mounted:function(){var e=this;this.title=this.$popupParams.title,this.message=this.$popupParams.message,this.$popup.event.subscribe((function(t){"click-overlay"===t.event&&(e.$popupParams.onAction(!1),e.$popup.close())}))},methods:{__:r(7389).__,emitAction:function(e){this.$popupParams.onAction(e),this.$popup.close()}}};const n=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col shadow-lg w-5/7-screen md:w-4/7-screen lg:w-2/7-screen",class:e.size,attrs:{id:"confirm-popup"}},[r("div",{staticClass:"flex items-center justify-center flex-col flex-auto p-4"},[r("h2",{staticClass:"text-xl md:text-3xl font-body text-center"},[e._v(e._s(e.title))]),e._v(" "),r("p",{staticClass:"py-4 text-sm md:text-base text-center"},[e._v(e._s(e.message))])]),e._v(" "),r("div",{staticClass:"action-buttons flex border-t"},[r("button",{staticClass:"flex-auto w-1/2 h-16 flex items-center justify-center uppercase",on:{click:function(t){return e.emitAction(!0)}}},[e._v(e._s(e.__("Yes")))]),e._v(" "),r("hr",{staticClass:"border-r h-16"}),e._v(" "),r("button",{staticClass:"flex-auto w-1/2 h-16 flex items-center justify-center uppercase",on:{click:function(t){return e.emitAction(!1)}}},[e._v(e._s(e.__("No")))])])])}),[],!1,null,null,null).exports}}]);