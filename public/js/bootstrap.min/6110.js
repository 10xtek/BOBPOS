"use strict";(self.webpackChunkBOBPOS_4x=self.webpackChunkBOBPOS_4x||[]).push([[6110],{6110:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var n=s(7266);const o={name:"ns-pos-order-settings",mounted:function(){var e=this;nsHttpClient.get("/api/nexopos/v4/fields/ns.pos-order-settings").subscribe((function(t){t.forEach((function(t){t.value=e.$popupParams.order[t.name]||""})),e.fields=e.validation.createFields(t)}),(function(e){})),this.popupCloser()},data:function(){return{fields:[],validation:new n.Z}},methods:{__,popupCloser,popupResolver,closePopup:function(){this.popupResolver(!1)},saveSettings:function(){var e=this.validation.extractFields(this.fields);this.popupResolver(e)}}};const i=(0,s(1900).Z)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"shadow-lg flex flex-col bg-white w-95vw h-95vh md:w-3/5-screen md:h-3/5-screen lg:w-2/5-screen"},[s("div",{staticClass:"p-2 border-b items-center flex justify-between"},[s("h3",{staticClass:"text-semibold"},[e._v(e._s(e.__("Order Settings")))]),e._v(" "),s("div",[s("ns-close-button",{on:{click:function(t){return e.closePopup()}}})],1)]),e._v(" "),s("div",{staticClass:"p-2 flex-auto bg-gray-100 overflow-y-auto"},e._l(e.fields,(function(e,t){return s("ns-field",{key:t,attrs:{field:e}})})),1),e._v(" "),s("div",{staticClass:"p-2 flex justify-end"},[s("ns-button",{attrs:{type:"info"},on:{click:function(t){return e.saveSettings()}}},[e._v(e._s(e.__("Save")))])],1)])}),[],!1,null,null,null).exports}}]);