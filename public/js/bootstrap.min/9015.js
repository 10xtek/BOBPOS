"use strict";(self.webpackChunkBOBPOS_4x=self.webpackChunkBOBPOS_4x||[]).push([[9015],{9015:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var n=r(381),s=r.n(n),o=r(1544),u=r(9671),a=r(7389),i=r(7587);const c={name:"ns-sold-stock-report",data:function(){return{startDate:s()(),endDate:s()(),products:[]}},components:{nsDatepicker:o.Z,nsDateTimePicker:i.Z},computed:{totalQuantity:function(){return this.products.length>0?this.products.map((function(t){return t.quantity})).reduce((function(t,e){return t+e})):0},totalTaxes:function(){return this.products.length>0?this.products.map((function(t){return t.tax_value})).reduce((function(t,e){return t+e})):0},totalPrice:function(){return console.log(this.products),this.products.length>0?this.products.map((function(t){return t.total_price})).reduce((function(t,e){return t+e})):0}},methods:{printSaleReport:function(){this.$htmlToPaper("report-printable")},setStartDate:function(t){this.startDate=t.format()},loadReport:function(){var t=this;if(null===this.startDate||null===this.endDate)return u.kX.error((0,a.__)("Unable to proceed. Select a correct time range.")).subscribe();var e=s()(this.startDate);if(s()(this.endDate).isBefore(e))return u.kX.error((0,a.__)("Unable to proceed. The current time range is not valid.")).subscribe();u.ih.post("/api/nexopos/v4/reports/sold-stock-report",{startDate:this.startDate,endDate:this.endDate}).subscribe({next:function(e){t.products=e},error:function(t){u.kX.error(t.message).subscribe()}})},setEndDate:function(t){this.endDate=t.format()}}},l=c;const p=(0,r(1900).Z)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null).exports}}]);