"use strict";(self.webpackChunkBOBPOS_4x=self.webpackChunkBOBPOS_4x||[]).push([[6317],{6317:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});var o=n(381),r=n.n(o),s=n(1544),a=n(7587),i=n(9671);const u={name:"ns-cash-flow",mounted:function(){},components:{nsDatepicker:s.Z,nsDateTimePicker:a.Z},data:function(){return{startDate:r()(),endDate:r()(),report:[]}},computed:{totalDebit:function(){return 0},totalCredit:function(){return 0}},methods:{setStartDate:function(t){this.startDate=t.format()},setEndDate:function(t){this.endDate=t.format()},loadReport:function(){var t=this,e=r()(this.startDate),n=r()(this.endDate);i.ih.post("/api/nexopos/v4/reports/cash-flow",{startDate:e,endDate:n}).subscribe({next:function(e){t.report=e,console.log(t.report)},error:function(t){i.kX.error(t.message).subscribe()}})}}},c=u;const f=(0,n(1900).Z)(c,undefined,undefined,!1,null,null,null).exports}}]);