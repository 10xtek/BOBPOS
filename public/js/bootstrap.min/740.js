"use strict";(self.webpackChunkBOBPOS_4x=self.webpackChunkBOBPOS_4x||[]).push([[740],{8810:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var n=r(7757),s=r.n(n),o=r(381),i=r.n(o),a=r(1544),l=r(6680),c=r(9671),u=r(7389),p=r(3472);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t,r,n,s,o,i){try{var a=e[o](i),l=a.value}catch(e){return void r(e)}a.done?t(l):Promise.resolve(l).then(n,s)}const m={name:"ns-sale-report",data:function(){return{startDate:i()(),endDate:i()(),result:[],summary:{},reportType:{label:(0,u.__)("Report Type"),name:"reportType",type:"select",value:"categories_report",options:[{label:(0,u.__)("Categories Detailed"),name:"categories_report"},{label:(0,u.__)("Categories Summary"),name:"categories_summary"},{label:(0,u.__)("Products"),name:"products_report"}],description:(0,u.__)("Allow you to choose the report type.")},field:{type:"datetimepicker",value:"2021-02-07",name:"date"}}},components:{nsDatepicker:a.Z,nsDateTimePicker:l.Z},computed:{},methods:{printSaleReport:function(){this.$htmlToPaper("sale-report")},setStartDate:function(e){this.startDate=e.format()},openSettings:function(){var e,t=this;return(e=s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,r){Popup.show(p.Z,v(v({},t.reportType),{},{resolve:e,reject:r}))}));case 3:r=e.sent,t.reportType.value=r[0].name,t.result=[],t.loadReport(),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})),function(){var t=this,r=arguments;return new Promise((function(n,s){var o=e.apply(t,r);function i(e){d(o,n,s,i,a,"next",e)}function a(e){d(o,n,s,i,a,"throw",e)}i(void 0)}))})()},getType:function(e){var t=this.reportType.options.filter((function(t){return t.name===e}));return t.length>0?t[0].label:(0,u.__)("Unknown")},loadReport:function(){var e=this;if(null===this.startDate||null===this.endDate)return c.kX.error((0,u.__)("Unable to proceed. Select a correct time range.")).subscribe();var t=i()(this.startDate);if(i()(this.endDate).isBefore(t))return c.kX.error((0,u.__)("Unable to proceed. The current time range is not valid.")).subscribe();c.ih.post("/api/nexopos/v4/reports/sale-report",{startDate:this.startDate,endDate:this.endDate,type:this.reportType.value}).subscribe({next:function(t){e.result=t.result,e.summary=t.summary},error:function(e){c.kX.error(e.message).subscribe()}})},computeTotal:function(e,t){return e.length>0?(console.log("computes"),e.map((function(e){return parseFloat(e[t])})).reduce((function(e,t){return e+t}))):0},setEndDate:function(e){this.endDate=e.format()}}},b=m;const _=(0,r(1900).Z)(b,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports},3472:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(8603),s=r(7389);const o={data:function(){return{value:[],options:[],label:null,type:"select"}},computed:{},mounted:function(){this.popupCloser(),this.value=this.$popupParams.value||[],this.options=this.$popupParams.options,this.label=this.$popupParams.label,this.type=this.$popupParams.type||this.type},methods:{popupCloser:n.Z,__:s.__,toggle:function(e){var t=this.value.indexOf(e);-1===t?this.value.unshift(e):this.value.splice(t,1)},isSelected:function(e){return this.value.indexOf(e)>=0},close:function(){this.$popupParams.reject(!1),this.$popup.close()},select:function(e){void 0!==e&&(this.value=[e]),this.$popupParams.resolve(this.value),this.close()}}};const i=(0,r(1900).Z)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shadow-xl ns-box w-6/7-screen md:w-4/7-screen lg:w-3/7-screen overflow-hidden"},[r("div",{staticClass:"p-2 flex justify-between border-b items-center ns-box-header"},[r("span",{staticClass:"text-semibold text-primary"},[e._v("\n            "+e._s(e.label)+"\n        ")]),e._v(" "),r("div",[r("ns-close-button",{on:{click:function(t){return e.close()}}})],1)]),e._v(" "),r("div",{staticClass:"flex-auto overflow-y-auto"},[r("ul",{staticClass:"ns-vertical-menu"},["select"===e.type?e._l(e.options,(function(t){return r("li",{key:t.value,staticClass:"p-2 border-b border-box-edge text-primary cursor-pointer",on:{click:function(r){return e.select(t)}}},[e._v(e._s(t.label))])})):e._e(),e._v(" "),"multiselect"===e.type?e._l(e.options,(function(t){return r("li",{key:t.value,staticClass:"p-2 border-b text-primary cursor-pointer",class:e.isSelected(t)?"active":"",on:{click:function(r){return e.toggle(t)}}},[e._v(e._s(t.label))])})):e._e()],2)]),e._v(" "),"multiselect"===e.type?r("div",{staticClass:"flex justify-between"},[r("div"),e._v(" "),r("div",[r("ns-button",{attrs:{type:"info"},on:{click:function(t){return e.select()}}},[e._v(e._s(e.__("Select")))])],1)]):e._e()])}),[],!1,null,null,null).exports}}]);