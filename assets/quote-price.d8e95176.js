import"./vue.df901c44.js";import{_ as a,b as e,c as s,f as t,i as o}from"./index.05df70b1.js";import{d as l,k as n,v as r,o as i,f as p,a0 as c,a1 as d,a4 as u,a5 as m,m as b,a3 as f,F as v,a9 as j,J as h,ab as _,ac as g,ad as w}from"./@vue.889a75b5.js";import"./ant-design-vue.a6735399.js";import"./@babel.29daae83.js";import"./regenerator-runtime.6bfb484e.js";import"./@ant-design.2d3b2fbb.js";import"./@ctrl.fa7cbd46.js";import"./lodash-es.a53432ff.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.5d25c98b.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./dayjs.39b8ebe2.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./lodash.3cabe671.js";import"./vuex.7d8a0789.js";import"./axios.82d3905a.js";import"./vue-router.8ca1e268.js";import"./nprogress.6eaf9b6f.js";import"./js-cookie.31874410.js";import"./clipboard.16092f5a.js";const y=l({name:"QuotePrice",setup(){const a=n("context"),l=r(null);i((()=>{if(l.value){console.log("??",l.value);const s=a.$store.state.username;e({container:l.value,content:"阿云配件维修"+(s?" - "+s:"")})}}));const c=p({b_id:[]}),d=r([]),u=()=>{if(o(c.b_id))return d.value=[];a.$http.post("/quote/price",{b_id:c.b_id[c.b_id.length-1]}).then((a=>{d.value=a.data})).catch((a=>{}))};return{quoteContent:l,formState:c,brandData:s,fixProblem:t,cascaderFilter:(a,e)=>e.some((e=>e.b_name.toLowerCase().indexOf(a.toLowerCase())>-1)),handleBrandChange:()=>{u()},search:u,listdata:d}}}),C=a=>(_("data-v-82cf0610"),a=a(),g(),a),x={class:"quote-price",ref:"quoteContent"},q={class:"quote-price-inner"},k={class:"quote-price-search__wrap"},S=h(" 查询 "),F={class:"quote-list"},P=h(),B=h("元 "),D={class:"ad"},I={class:"icon-label"},L=C((()=>m("span",null,"15038181660",-1))),$={class:"icon-label"},z=C((()=>m("span",null,"15038181660",-1))),J={class:"icon-label"},O=C((()=>m("span",null,"15038181660",-1))),Q=C((()=>m("span",null,"扫码关注",-1)));var U=a(y,[["render",function(a,e,s,t,o,l){const n=c("a-cascader"),r=c("a-form-item"),i=c("a-form"),p=c("a-button"),h=c("ZwIcons"),_=c("a-image");return d(),u("div",x,[m("div",q,[m("div",k,[b(i,{model:a.formState,layout:"inline",autocomplete:"off"},{default:f((()=>[b(r,{class:"selector"},{default:f((()=>[b(n,{value:a.formState.b_id,"onUpdate:value":e[0]||(e[0]=e=>a.formState.b_id=e),name:"b_id",options:a.brandData,"field-names":{label:"b_name",value:"b_id"},"get-popup-container":a.fixProblem,"expand-trigger":"hover","show-search":{filter:a.cascaderFilter},placeholder:"选择品牌型号",onChange:a.handleBrandChange},null,8,["value","options","get-popup-container","show-search","onChange"])])),_:1})])),_:1},8,["model"]),b(p,{type:"primary",onClick:a.search},{default:f((()=>[S])),_:1},8,["onClick"])]),m("div",F,[m("ul",null,[(d(!0),u(v,null,j(a.listdata,(a=>(d(),u("li",null,[m("label",null,w(a.f.f_name)+":",1),P,m("span",null,w(a.repair_price),1),B])))),256))])]),m("div",D,[m("p",null,[m("span",I,[b(h,{type:"svg",name:"phone"})]),L]),m("p",null,[m("span",$,[b(h,{type:"svg",name:"aliww"})]),z]),m("p",null,[m("span",J,[b(h,{type:"svg",name:"tb"})]),O]),m("p",null,[Q,b(_)])])])],512)}],["__scopeId","data-v-82cf0610"]]);export{U as default};