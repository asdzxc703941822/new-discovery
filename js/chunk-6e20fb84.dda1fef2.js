(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e20fb84","chunk-02cf1278","chunk-4b06bb4c"],{3518:function(e,t,a){"use strict";var l=a("4eb3"),o=a.n(l);o.a},"4eb3":function(e,t,a){},"51e3":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"dialogHeight page",attrs:{title:"职员档案",visible:e.visible,width:"100%",show:e.show,center:""},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.$emit("update:show",!1)}}},[a("el-container",[a("el-header",{staticStyle:{height:"auto"}},[a("el-form",{staticClass:"demo-form-inline pageForm",attrs:{inline:!0,model:e.empForm}},[a("el-form-item",{attrs:{label:"职员代码"}},[a("el-input",{attrs:{size:"small",placeholder:""},model:{value:e.empForm.FNumber,callback:function(t){e.$set(e.empForm,"FNumber",t)},expression:"empForm.FNumber"}})],1),a("el-form-item",{attrs:{label:"至"}},[a("el-input",{attrs:{size:"small",placeholder:""},model:{value:e.empForm.FNumber1,callback:function(t){e.$set(e.empForm,"FNumber1",t)},expression:"empForm.FNumber1"}})],1),a("el-form-item",{attrs:{label:"职员名称"}},[a("el-input",{attrs:{size:"small",placeholder:""},model:{value:e.empForm.FName,callback:function(t){e.$set(e.empForm,"FName",t)},expression:"empForm.FName"}})],1),a("el-form-item",{attrs:{label:"显示停职人员"}},[a("el-checkbox",{attrs:{size:"small"},model:{value:e.empForm.FDisabled,callback:function(t){e.$set(e.empForm,"FDisabled",t)},expression:"empForm.FDisabled"}},[e._v("备选项")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.Query}},[e._v("查询")])],1)],1)],1),a("el-container",[a("el-aside",{attrs:{width:e.isCollapse?"64px":"220px"}},[a("el-radio-group",{model:{value:e.isCollapse,callback:function(t){e.isCollapse=t},expression:"isCollapse"}},[a("el-radio-button",{class:e.isCollapse?"activeShow":"activeNoShow",attrs:{label:!1}},[e._v("展开")]),a("el-radio-button",{class:e.isCollapse?"activeNoShow":"activeShow",attrs:{label:!0}},[e._v("收起")])],1),a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1",collapse:e.isCollapse}},e._l(e.empMenu,function(t,l){return a("fragment",{key:l},[0===t.children.length?a("el-menu-item",{attrs:{index:t.FNumber},on:{click:function(a){return e.handleRoute(t.FItemID)}}},[a("i",{staticClass:"el-icon-document"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.FNumberName))])]):e._e(),t.children.length>0?a("el-submenu",{attrs:{index:t.FNumber}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-folder-opened"}),a("span",[e._v(e._s(t.FNumberName))])]),e._l(t.children,function(t,l){return a("fragment",{key:l},[a("el-menu-item",{attrs:{index:t.FNumber},on:{click:function(a){return e.handleRoute(t.FItemID)}}},[a("i",{staticClass:"el-icon-document"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.FNumberName))])])],1)})],2):e._e()],1)}),1)],1),a("el-container",{class:[e.isCollapse?"dialog-container-collapes":"dialog-container"]},[a("el-main",[a("el-table",{attrs:{data:e.empTableData,height:"100%",stripe:"",border:""},on:{"row-dblclick":e.rowDblClick}},e._l(e.empTableColumn,function(e,t){return a("el-table-column",{key:t,attrs:{align:"center",prop:e.prop,label:e.label}})}),1)],1),a("el-footer",[a("el-pagination",{staticStyle:{"text-align":"right"},attrs:{"current-page":e.currentPage,"page-sizes":e.pagesizeDate,"page-size":e.pagesize,layout:"total, sizes, prev, pager, next",total:e.pageTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)],1)],1)],1)},o=[],r=(a("7f7f"),a("0d5e")),n={data:function(){return{visible:this.show,empForm:{FNumber:"",FNumber1:"",FName:"",FDisabled:"false"},isCollapse:!1,empMenu:[],currentPage:1,pagesize:20,pagesizeDate:[20,50,100,500],pageTotal:0,empTableData:[],empTableColumn:[{label:"合同期限",prop:"FContractPeriod"},{label:"FDeptID",prop:"FDeptID"},{label:"部门名称",prop:"FDeptName"},{label:"职员代码",prop:"FNumber"},{label:"籍贯",prop:"FOriginPlace"},{label:"职员姓名",prop:"FName"},{label:"工号",prop:"FJobNumber"},{label:"职位",prop:"FPosition"},{label:"职员地址",prop:"FAddress"},{label:"身份证号",prop:"FID"},{label:"电话",prop:"FPhone"},{label:"手机号",prop:"FMobilePhone"},{label:"性别",prop:"FGender"},{label:"职称",prop:"FJobTitle"},{label:"助记码",prop:"FPYCode"},{label:"学历",prop:"FDegree"},{label:"毕业学校",prop:"FSchool"},{label:"邮箱",prop:"FEmail"},{label:"专业",prop:"FMajor"},{label:"入职日期",prop:"FHireDate"},{label:"婚姻",prop:"FMarriage"},{label:"生日",prop:"FBirthday"},{label:"户籍",prop:"FHousehold"},{label:"居住证有效期",prop:"FResidence"},{label:"是否停用",prop:"FDisabled"},{label:"FBarCode",prop:"FBarCode"},{label:"FLeaveDate",prop:"FLeaveDate"},{label:"FLeavingReason",prop:"FLeavingReason"},{label:"FIndustrialInjuryDate",prop:"FIndustrialInjuryDate"},{label:"FIsSettled",prop:"FIsSettled"},{label:"FItemID",prop:"FItemID"},{label:"FSafetyHelmetDate",prop:"FSafetyHelmetDate"},{label:"FProvidentFundDate",prop:"FProvidentFundDate"},{label:"备注",prop:"FNote"},{label:"FParentID",prop:"FParentID"},{label:"FParentNO",prop:"FParentNO"},{label:"FShoesDate",prop:"FShoesDate"},{label:"FSocialInsuranceDate",prop:"FSocialInsuranceDate"},{label:"FWorkServiceDate",prop:"FWorkServiceDate"}]}},props:{show:{type:Boolean,default:!1}},watch:{show:function(){this.visible=this.show,!0===this.visible&&this.getMenu()}},methods:{rowDblClick:function(e,t,a,l){this.$emit("listenToParentEvent",e),this.visible=!1},Query:function(){this.handleRoute()},handleSizeChange:function(e){this.pagesize=e,this.handleRoute()},handleCurrentChange:function(e){this.currentPage=e,this.handleRoute()},handleRoute:function(e){var t={},a=this;if(e)t={pageSize:a.pagesize,pageNumber:a.currentPage,conditions:[{Name:"FParentID",Type:"=",Value:e}]};else{for(var l=[],o=[{name:"FNumber",type:">=",value:a.empForm.FNumber},{name:"FNumber",type:"<=",value:a.empForm.FNumber1},{name:"FName",type:"like",value:"%"+a.empForm.FName+"%"},{name:"FDisabled",type:"like",value:"%"+a.empForm.FDisabled+"%"}],n=0;n<o.length;n++)""!==o[n].value&&"%%"!==o[n].value&&"FDisabled"!==o[n].name?l.push(o[n]):"FDisabled"===o[n].name&&"%true%"===o[n].value&&l.push(o[n]);t={pageSize:a.pagesize,pageNumber:a.currentPage,conditions:l}}r["a"].post("Emp/GetPageList",t).then(function(e){a.empTableData=e.rows,a.pageTotal=e.total})},getMenu:function(){var e=this;r["a"].get("ItemClass/GetTreeList?FItemClassID=3").then(function(t){e.empMenu=t})}},mounted:function(){}},i=n,s=(a("3518"),a("2877")),u=Object(s["a"])(i,l,o,!1,null,"37d3f498",null);t["default"]=u.exports},"52d7":function(e,t,a){"use strict";a.d(t,"d",function(){return o}),a.d(t,"c",function(){return r}),a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i}),a.d(t,"h",function(){return s}),a.d(t,"g",function(){return u}),a.d(t,"f",function(){return p}),a.d(t,"e",function(){return c});var l=a("0d5e");function o(e){return Object(l["a"])({method:"post",url:"HR_DailyRecord/GetPageList",data:e})}function r(e){return Object(l["a"])({method:"get",url:"HR_DailyRecord/Delete",params:e})}function n(e){return Object(l["a"])({method:"post",url:"HR_Leave/GetPageList",data:e})}function i(e){return Object(l["a"])({method:"get",url:"HR_Leave/Delete",params:e})}function s(e){return Object(l["a"])({method:"post",url:"HR_DailyReRecord/GetPageList",data:e})}function u(e){return Object(l["a"])({method:"get",url:"HR_DailyReRecord/Delete",params:e})}function p(e){return Object(l["a"])({method:"post",url:"HR_DailySure/GetPageList",data:e})}function c(e){return Object(l["a"])({method:"get",url:"HR_DailySure/Delete",params:e})}},"562a":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tableLayout",[e.dialogVisible?a("el-dialog",{staticClass:"dialogHeight",attrs:{title:"补卡单",visible:e.dialogVisible,center:!0,"before-close":e.dialogClosed,fullscreen:!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("correctTheTimeClockCard",{attrs:{fInterID:e.fInterID}})],1):e._e(),a("btn",{attrs:{slot:"btn",btnTexts:e.btnTexts,isQuery:!0},on:{btnDelete:e.btnDelete,btnEdit:e.btnEdit,btnAdd:e.btnAdd},slot:"btn"}),a("LYform",{attrs:{slot:"header",formOptions:e.formOptions,IsQuery:!0},on:{query:e.query,"update:formData":function(t){e.formData=t},"uodate:loading":function(t){e.loading=t}},slot:"header"}),a("template",{slot:"center"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:!0,height:"100%","highlight-current-row":""},on:{"row-dblclick":e.rowDblclick,"current-change":e.rowClick}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"FBillNo",label:"单号"}}),a("el-table-column",{attrs:{prop:"FBillDate",label:"制单日期"}}),a("el-table-column",{attrs:{prop:"Ffuzeren",label:"点名负责人"}}),a("el-table-column",{attrs:{prop:"FChecker",label:"人事审批人"}}),a("el-table-column",{attrs:{prop:"FEmpName",label:"补卡人员"}}),a("el-table-column",{attrs:{prop:"FDateTime",label:"补卡时间"}}),a("el-table-column",{attrs:{prop:"FReason",label:"补卡原因"}}),a("el-table-column",{attrs:{prop:"FNote",label:"主管备注"}})],1)],1),a("el-pagination",{attrs:{slot:"footer","current-page":1,"page-sizes":[20,50,200,500],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange},slot:"footer"})],2)},o=[],r=a("1b62"),n=a("52d7"),i=a("f9ac"),s={mixins:[r["b"]],data:function(){return{formOptions:[{label:"单号",type:"text",field:"FBillNo",operator:"="},{label:"制单日期",type:"datetime",field:"FBillDate",operator:">="},{label:"点名负责人",type:"text",field:"Ffuzeren",operator:"="}],queryRequest:n["h"],deleteRequest:n["g"]}},components:{correctTheTimeClockCard:i["default"]}},u=s,p=a("2877"),c=Object(p["a"])(u,l,o,!1,null,null,null);t["default"]=c.exports},f9ac:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tableLayout",[a("EmpRecord",{attrs:{show:e.show},on:{"update:show":function(t){e.show=t},listenToParentEvent:e.getEmpInOf}}),a("btn",{attrs:{slot:"btn",btnTexts:e.btnTexts},on:{btnSave:e.btnSave,btnAudit:e.btnAudit,btnUnAudit:e.btnUnAudit,btnAdd:e.btnAdd,btnAddRow:e.btnAddRow,btnDeleteRow:e.btnDeleteRow},slot:"btn"}),a("LYform",{ref:"LYform",attrs:{slot:"header",formOptions:e.formOptions,formData:e.formData},on:{"update:formData":function(t){e.formData=t},"update:form-data":function(t){e.formData=t}},slot:"header"}),a("template",{slot:"center"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:!0,height:"100%","highlight-current-row":""},on:{"current-change":e.currentChange}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"FEmpName",label:"补卡人员"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{readonly:e.isdisabled},model:{value:t.row.FEmpName,callback:function(a){e.$set(t.row,"FEmpName",a)},expression:"scope.row.FEmpName"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-arrow-right",size:"mini",disabled:e.isdisabled},on:{click:function(t){e.show=!0}},slot:"append"})],1)]}}])}),a("el-table-column",{attrs:{prop:"FDateTime",label:"补卡时间",width:"245"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-date-picker",{attrs:{type:"datetime",readonly:e.isdisabled},model:{value:t.row.FDateTime,callback:function(a){e.$set(t.row,"FDateTime",a)},expression:"scope.row.FDateTime"}})]}}])}),a("el-table-column",{attrs:{prop:"FReason",label:"补卡原因"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择",disabled:e.isdisabled},model:{value:t.row.FReason,callback:function(a){e.$set(t.row,"FReason",a)},expression:"scope.row.FReason"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]}}])}),a("el-table-column",{attrs:{prop:"FNote",label:"主管备注"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{readonly:e.isdisabled},model:{value:t.row.FNote,callback:function(a){e.$set(t.row,"FNote",a)},expression:"scope.row.FNote"}})]}}])})],1)],1)],2)},o=[],r=a("1b62"),n=a("51e3"),i=a("4f94"),s={mixins:[r["a"]],data:function(){return{show:!1,addRquest:i["r"],updateRquest:i["v"],getRquest:i["t"],auditRquest:i["s"],unAuditRquest:i["u"],btnTexts:["新增","编辑","保存","审核","反审","增行","删行"],formOptions:[{label:"制单日期",type:"datetime",field:"FBillDate"},{label:"点名负责人",type:"text",field:"Ffuzeren"},{label:"单号",type:"text",field:"FBillNo"},{label:"人事审批人",type:"text",field:"FChecker"}],options:[{value:"事假",label:"事假"},{value:"病假",label:"病假"},{value:"迟到",label:"迟到"}]}},methods:{getEmpInOf:function(e){var t=this.tableData.indexOf(this.currentRow);this.$set(this.tableData[t],"FEmpName",e.FName),this.$set(this.tableData[t],"FEmpID",e.FItemID)}},components:{EmpRecord:n["default"]}},u=s,p=a("2877"),c=Object(p["a"])(u,l,o,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-6e20fb84.dda1fef2.js.map