import"./vue.9122bf33.js";import{_ as e}from"./index.c9bd1832.js";import{d as a,k as t,v as s,_ as i,$ as l,a0 as d,a1 as o,m as r,a3 as n,J as p,a9 as c,aa as m}from"./@vue.42962c1d.js";import"./ant-design-vue.692d4b86.js";import"./@babel.29daae83.js";import"./regenerator-runtime.6bfb484e.js";import"./@ant-design.a7a0eb88.js";import"./@ctrl.fa7cbd46.js";import"./lodash-es.a53432ff.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./dayjs.39b8ebe2.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash.3cabe671.js";import"./vuex.35cecaef.js";import"./axios.82d3905a.js";import"./vue-router.a3c62d0a.js";import"./nprogress.6eaf9b6f.js";import"./js-cookie.31874410.js";import"./clipboard.16092f5a.js";const u=e=>(c("data-v-b2fcbbf4"),e=e(),m(),e),b=p(" 清理 "),v={class:"modal-content"},j=u((()=>n("b",null,"IP ：",-1))),f=u((()=>n("div",{style:{"text-align":"right"}},[n("small",null,"多个 IP 请用 ' , ' 号隔开")],-1)));var g=e(a({setup(e){const a=t("context"),p=[{title:"序号",dataIndex:"index",width:48,align:"center",customRender:({index:e})=>e+1},{title:"用户名",dataIndex:["user","username"],width:156,align:"center"},{title:"方法",dataIndex:"actions",width:156},{title:"请求参数",dataIndex:"params",width:226,ellipsis:!0},{title:"IP",dataIndex:"ip",width:136,align:"center"},{title:"IP地址",dataIndex:"ipAddr",width:136,align:"center"},{title:"访问设备",dataIndex:"device",width:226,ellipsis:!0},{title:"访问时间",dataIndex:"create_at",width:150,align:"center"}],c=s(!1),m=s(""),u=()=>new Promise(((e,t)=>{a.$http.post("logs/dels",{ips:m.value}).then((t=>{a.$message[t.success?"success":"error"](t.message),c.value=!1,e(t)})).catch((e=>{t(e)})).finally((()=>{}))}));return(e,a)=>{const t=i("ClearOutlined"),s=i("a-button"),g=i("ListData"),x=i("a-textarea"),h=i("ZwModal"),w=i("ZwScrollbar");return l(),d(w,{"wrap-class":"pd-17"},{default:o((()=>[r(g,{class:"","row-key":"id",columns:p,apis:"logs","page-size":10,"top-tools":{hiddenAdd:!0}},{"append-tools-btn":o((()=>[r(s,{class:"clear-btn",onClick:a[0]||(a[0]=e=>c.value=!0)},{icon:o((()=>[r(t)])),default:o((()=>[b])),_:1})])),_:1}),r(h,{title:"日志清理",visible:c.value,"onUpdate:visible":a[2]||(a[2]=e=>c.value=e),onSubmit:u},{default:o((()=>[n("div",v,[j,r(x,{value:m.value,"onUpdate:value":a[1]||(a[1]=e=>m.value=e),valueModifiers:{trim:!0},placeholder:"请输入ip,多个ip用`,`号隔开"},null,8,["value"])]),f])),_:1},8,["visible"])])),_:1})}}}),[["__scopeId","data-v-b2fcbbf4"]]);export{g as default};