"use strict";(self.webpackChunkBOBPOS_4x=self.webpackChunkBOBPOS_4x||[]).push([[3712],{3712:(t,e,s)=>{s.r(e),s.d(e,{default:()=>o});var i=s(7389),a=s(9671),r=s(7266);const n={name:"ns-settings",props:["url"],components:{nsField:s(8737).P},data:function(){return{validation:new r.Z,form:{},test:""}},computed:{formDefined:function(){return Object.values(this.form).length>0},activeTab:function(){for(var t in this.form.tabs)if(!0===this.form.tabs[t].active)return this.form.tabs[t]}},mounted:function(){this.loadSettingsForm()},methods:{__:i.__,loadComponent:function(t){return nsExtraComponents[t]},submitForm:function(){var t=this;if(0===this.validation.validateForm(this.form).length){this.validation.disableForm(this.form);var e=this.validation.extractForm(this.form);return a.ih.post(this.url,e).subscribe({next:function(e){t.validation.enableForm(t.form),t.loadSettingsForm(),e.data&&e.data.results&&e.data.results.forEach((function(t){"failed"===t.status?a.kX.error(t.message).subscribe():a.kX.success(t.message).subscribe()})),a.kq.doAction("ns-settings-saved",{result:e,instance:t}),a.kX.success(e.message).subscribe()},error:function(e){t.validation.enableForm(t.form),t.validation.triggerFieldsErrors(t.form,e),a.kq.doAction("ns-settings-failed",{error:e,instance:t}),a.kX.error(e.message||(0,i.__)("Unable to proceed the form is not valid.")).subscribe()}})}a.kX.error(this.$slots["error-form-invalid"][0].text||(0,i.__)("Unable to proceed the form is not valid.")).subscribe()},setActive:function(t){for(var e in this.form.tabs)this.form.tabs[e].active=!1;t.active=!0,a.kq.doAction("ns-settings-change-tab",{tab:t,instance:this})},loadSettingsForm:function(){var t=this;a.ih.get(this.url).subscribe((function(e){var s=0;Object.values(e.tabs).filter((function(t){return t.active})).length;for(var i in e.tabs)t.formDefined?e.tabs[i].active=t.form.tabs[i].active:(e.tabs[i].active=!1,0===s&&(e.tabs[i].active=!0)),s++,void 0===e.tabs[i].fields&&(e.tabs[i].fields=[]);t.form=t.validation.createForm(e),a.kq.doAction("ns-settings-loaded",t),a.kq.doAction("ns-settings-change-tab",{tab:t.activeTab,instance:t})}))}}};const o=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.formDefined?s("div",{attrs:{id:"tabbed-card"}},[s("div",{staticClass:"flex flex-wrap",attrs:{id:"card-header"}},t._l(t.form.tabs,(function(e,i){return s("div",{key:i,staticClass:"text-gray-700 dark:text-white cursor-pointer flex items-center px-4 py-2 rounded-tl-lg rounded-tr-lg",class:e.active?"bg-white dark:bg-slate-700 dark:text-white":"bg-gray-300 dark:bg-slate-800 dark:text-slate-200",on:{click:function(s){return t.setActive(e)}}},[s("span",[t._v(t._s(e.label))]),t._v(" "),e.errors&&e.errors.length>0?s("span",{staticClass:"ml-2 rounded-full bg-red-400 text-white text-sm h-6 w-6 flex items-center justify-center"},[t._v(t._s(e.errors.length))]):t._e()])})),0),t._v(" "),s("div",{staticClass:"card-body bg-white dark:bg-slate-700 dark:text-white rounded-br-lg rounded-bl-lg shadow"},[s("div",{staticClass:"-mx-4 flex flex-wrap p-2"},[t.activeTab.fields?t._l(t.activeTab.fields,(function(t,e){return s("div",{key:e,staticClass:"w-full px-4 md:w-1/2 lg:w-1/3"},[s("div",{staticClass:"flex flex-col my-2"},[s("ns-field",{attrs:{field:t}})],1)])})):t._e(),t._v(" "),t.activeTab.component?s("div",{staticClass:"w-full px-4"},[s(t.loadComponent(t.activeTab.component),{tag:"component"})],1):t._e()],2),t._v(" "),t.activeTab.fields?s("div",{staticClass:"border-t border-gray-400 dark:border-slate-600 p-2 flex justify-end"},[s("ns-button",{attrs:{type:"info"},on:{click:function(e){return t.submitForm()}}},[t._t("submit-button",(function(){return[t._v(t._s(t.__("Save Settings")))]}))],2)],1):t._e()])]):t._e()}),[],!1,null,null,null).exports}}]);