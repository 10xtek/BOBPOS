"use strict";(self.webpackChunkBOBPOS_4x=self.webpackChunkBOBPOS_4x||[]).push([[1374],{1374:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var r=t(7389),i=t(9671),n=t(7266);const o={name:"ns-reset",props:["url"],methods:{__:r.__,submit:function(){if(0===this.fields.length)return i.kX.error((0,r.__)("This form is not completely loaded.")).susbcribe();if(!this.validation.validateFields(this.fields))return this.$forceUpdate(),i.kX.error(this.$slots["error-form-invalid"]?this.$slots["error-form-invalid"][0].text:"Invalid Form").subscribe();var e=this.validation.getValue(this.fields);confirm(this.$slots["confirm-message"]?this.$slots["confirm-message"][0].text:(0,r.__)("Would you like to proceed ?"))&&i.ih.post("/api/nexopos/v4/reset",e).subscribe({next:function(e){i.kX.success(e.message).subscribe()},error:function(e){i.kX.error(e.message).subscribe()}})},loadFields:function(){var e=this;i.ih.get("/api/nexopos/v4/fields/ns.reset").subscribe({next:function(s){e.fields=e.validation.createFields(s)},error:function(e){i.kX.error(e.message).subscribe()}})}},mounted:function(){this.loadFields()},data:function(){return{validation:new n.Z,fields:[]}}};const l=(0,t(1900).Z)(o,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"reset-app"}},[e._m(0),e._v(" "),t("div",{staticClass:"card-body bg-white rounded-br-lg rounded-bl-lg shadow"},[t("div",{staticClass:"-mx-4 flex flex-wrap p-2"},e._l(e.fields,(function(e,s){return t("div",{key:s,staticClass:"px-4"},[t("ns-field",{attrs:{field:e}})],1)})),0),e._v(" "),t("div",{staticClass:"card-body border-t border-gray-400 p-2 flex"},[t("div",[t("ns-button",{attrs:{type:"info"},on:{click:function(s){return e.submit()}}},[e._v(e._s(e.__("Proceed")))])],1)])])])}),[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex flex-wrap",attrs:{id:"card-header"}},[t("div",{staticClass:"text-gray-700 bg-white cursor-pointer px-4 py-2 rounded-tl-lg rounded-tr-lg"},[e._v("\n            Reset\n        ")])])}],!1,null,null,null).exports}}]);