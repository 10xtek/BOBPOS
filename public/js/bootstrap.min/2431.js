"use strict";(self.webpackChunkBOBPOS_4x=self.webpackChunkBOBPOS_4x||[]).push([[2431],{2431:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var a=i(7757),n=i.n(a),r=i(7389),s=i(7266),o=i(6386),l=i(8603),u=i(2277),c=i(9671);function _(e,t,i,a,n,r,s){try{var o=e[r](s),l=o.value}catch(e){return void i(e)}o.done?t(l):Promise.resolve(l).then(a,n)}const p={name:"ns-pos-quick-product-popup",methods:{__:r.__,popupCloser:l.Z,popupResolver:o.Z,close:function(){this.popupResolver(!1)},addProduct:function(){var e,t=this;return(e=n().mark((function e(){var i,a,s;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.validation.validateFields(t.fields)){e.next=3;break}return e.abrupt("return",c.kX.error((0,r.__)("Unable to proceed. The form is not valid.")).subscribe());case 3:return i=t.validation.extractFields(t.fields),a={unit:t.units.filter((function(e){return e.id===i.unit_id}))[0],incl_tax_sale_price:parseFloat(i.unit_price),excl_tax_sale_price:parseFloat(i.unit_price),sale_price:parseFloat(i.unit_price),sale_price_tax:0,sale_price_edit:0,wholesale_price_tax:0,incl_tax_wholesale_price:0,excl_tax_wholesale_price:0,wholesale_price:0,wholesale_price_edit:0,custom_price_tax:0,custom_price:0,custom_price_edit:0,incl_tax_custom_price:0,excl_tax_custom_price:0},e.prev=5,e.next=8,new Promise((function(e,t){i.tax_group_id?nsHttpClient.get("/api/nexopos/v4/taxes/groups/".concat(i.tax_group_id)).subscribe((function(t){a.sale_price_tax=t.taxes.map((function(e){return POS.getVatValue(a.sale_price,e.rate,i.tax_type)})).reduce((function(e,t){return e+t})),a.wholesale_price_tax=t.taxes.map((function(e){return POS.getVatValue(a.wholesale_price,e.rate,i.tax_type)})).reduce((function(e,t){return e+t})),a.excl_tax_sale_price=a.sale_price+a.sale_price_tax,a.incl_tax_sale_price=a.sale_price-a.sale_price_tax,s=t,e(!0)}),(function(e){t(!1)})):(a.sale_price_tax=0,a.wholesale_price_tax=0,a.excl_tax_sale_price=i.unit_price,e(!0))}));case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(5),e.abrupt("return",c.kX.error((0,r.__)("An error has occured while computing the product.")).subscribe());case 13:i.$quantities=function(){return a},i.$original=function(){return{stock_management:"disabled",category_id:0,tax_group:s,tax_type:i.tax_type}},i.unit_name=t.units.filter((function(e){return e.id===i.unit_id}))[0].name,i.quantity=parseFloat(i.quantity),POS.addToCart(i),t.close();case 19:case"end":return e.stop()}}),e,null,[[5,10]])})),function(){var t=this,i=arguments;return new Promise((function(a,n){var r=e.apply(t,i);function s(e){_(r,a,n,s,o,"next",e)}function o(e){_(r,a,n,s,o,"throw",e)}s(void 0)}))})()},loadData:function(){var e=this;this.loaded=!1,(0,u.D)(nsHttpClient.get("/api/nexopos/v4/units"),nsHttpClient.get("/api/nexopos/v4/taxes/groups")).subscribe({next:function(t){e.units=t[0],e.tax_groups=t[1],e.fields.filter((function(e){"tax_group_id"===e.name&&(e.options=t[1].map((function(e){return{label:e.name,value:e.id}}))),"unit_id"===e.name&&(e.options=t[0].map((function(e){return{label:e.name,value:e.id}})))})),e.buildForm()},error:function(e){}})},buildForm:function(){this.fields=this.validation.createFields(this.fields),this.loaded=!0}},data:function(){return{units:[],tax_groups:[],loaded:!1,validation:new s.Z,fields:[{label:(0,r.__)("Name"),name:"name",type:"text",description:(0,r.__)("Provide a unique name for the product."),validation:"required"},{label:(0,r.__)("Unit Price"),name:"unit_price",type:"text",description:(0,r.__)("Define what is the sale price of the item."),validation:"required"},{label:(0,r.__)("Quantity"),name:"quantity",type:"text",value:1,description:(0,r.__)("Set the quantity of the product."),validation:"required"},{label:(0,r.__)("Unit"),name:"unit_id",type:"select",options:[],description:(0,r.__)("Assign a unit to the product."),validation:"required"},{label:(0,r.__)("Tax Type"),name:"tax_type",type:"select",options:[{label:(0,r.__)("Disabled"),value:""},{label:(0,r.__)("Inclusive"),value:"inclusive"},{label:(0,r.__)("Exclusive"),value:"exclusive"}],description:(0,r.__)("Define what is tax type of the item.")},{label:(0,r.__)("Tax Group"),name:"tax_group_id",type:"select",options:[],description:(0,r.__)("Choose the tax group that should apply to the item.")}]}},mounted:function(){this.popupCloser(),this.loadData()}};const d=(0,i(1900).Z)(p,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"w-95vw flex flex-col h-95vh shadow-lg md:w-3/5-screen lg:w-2/5-screen md:h-3/5-screen bg-white"},[i("div",{staticClass:"header bg-white border-b flex justify-between p-2 items-center"},[i("h3",[e._v(e._s(e.__("Product / Service")))]),e._v(" "),i("div",[i("ns-close-button",{on:{click:function(t){return e.close()}}})],1)]),e._v(" "),i("div",{staticClass:"p-2 flex-auto overflow-y-auto"},[e.loaded?e._e():i("div",{staticClass:"h-full w-full flex justify-center items-center"},[i("ns-spinner")],1),e._v(" "),e.loaded?e._l(e.fields,(function(e,t){return i("ns-field",{key:t,attrs:{field:e}})})):e._e()],2),e._v(" "),i("div",{staticClass:"border-t flex justify-between p-2"},[i("div"),e._v(" "),i("div",[i("ns-button",{attrs:{type:"info"},on:{click:function(t){return e.addProduct()}}},[e._v(e._s(e.__("Create")))])],1)])])}),[],!1,null,null,null).exports}}]);