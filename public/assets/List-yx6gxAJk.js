import{i as $,d as y,T as w,j,k as S,c as B,w as k,u as a,o as n,a as t,t as s,l as L,b as x,e as h,F as V,h as N,n as D,f as M,m as P}from"./app-DvcEWBb-.js";import{_ as T}from"./Modal-B8qV30f2.js";import"./JsBarcode-aMoV0t29.js";import{_ as A}from"./AppLayout-BuCQ6WFQ.js";import{_ as F,a as I}from"./SearchFilter-SpN_1X05.js";const R={class:"py-8"},U={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},q={class:"bg-white dark:bg-gray-900 shadow sm:rounded-lg"},z={class:"sm:rounded-lg"},E={class:"p-6 sm:rounded-t-lg border-b border-gray-200 dark:border-gray-700 block md:flex md:items-center md:justify-between"},O={class:"text-2xl"},G={class:"mt-1 text-gray-500 dark:text-gray-400"},H={class:"mt-4 sm:mt-0 block sm:flex sm:items-center sm:gap-4"},J={class:"bg-gray-50 dark:bg-black/50 border-b dark:border-gray-700 sm:rounded-b-lg"},K={key:0},Q={class:"flex flex-col"},W={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},X={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},Y={class:"relative overflow-hidden ring-1 ring-black ring-opacity-5"},Z={class:"min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700"},tt={class:"bg-gray-50 dark:bg-black/50"},et={scope:"col",class:"pl-5 pr-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"},st={scope:"col",class:"py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"},ot={scope:"col",class:"py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"},at={scope:"col",class:"py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"},it={class:"divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900"},dt=["onClick"],rt=["onClick"],lt=["onClick"],nt=["onClick"],ct={key:1,class:"py-4 px-6"},ht={class:"relative"},mt={class:"absolute top-0 right-0 hidden py-1.5 px-2 sm:flex sm:items-center sm:justify-center border-l border-b dark:border-gray-700 rounded-bl-lg hover:bg-gray-700 dark:hover:bg-gray-900 hover:text-gray-100 dark:hover:text-gray-100"},_t={class:"sr-only"},pt={class:"p-6 sm:flex sm:items-start"},gt={key:0,class:"flex-1"},ut={class:"-mt-2 text-lg font-bold leading-6 text-gray-900 dark:text-gray-100",id:"modal-title"},yt={class:"p-4 -mx-6 -mb-6 md:rounded-b-lg"},xt={class:"bg-white dark:bg-gray-900 w-full -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto print:m-0"},vt={class:"w-full my-4 table-fixed"},bt={class:"bg-white dark:bg-gray-900"},ft={class:"px-6 py-2 w-32 whitespace-nowrap"},wt={class:"px-6 py-2"},kt={class:"bg-gray-50 dark:bg-gray-900/50"},Ct={class:"px-6 py-2 w-32 whitespace-nowrap"},$t={class:"px-6 py-2"},jt={class:"bg-white dark:bg-gray-900"},St={class:"px-6 py-2 w-32 whitespace-nowrap align-top"},Bt={class:"px-6 py-2"},Lt={class:"text-sm font-mono tracking-wide whitespace-wrap"},Tt={__name:"List",props:["activities"],setup(m){const{t:i}=$({}),g=y(!1),r=y(null);y(!1);const _=m,u=w({selection:[],force:!1}),l=w({search:"",trashed:null});j(()=>u.selection.length>0&&u.selection.length<_.activities.data.length),S(()=>{const d=window.location.search,o=new URLSearchParams(d);l.trashed=o.has("trashed")?o.get("trashed"):""});const p=d=>{r.value=d,g.value=!0},v=()=>{g.value=!1,r.value=null},b=()=>{l.transform(d=>{let o={...d,remember:d.remember?"on":""};return Object.entries(o).reduce((e,[c,f])=>(f&&(e[c]=f),e),{})}).get(P("activity"),{preserveState:!0})},C=()=>{l.search="",l.trashed=null,b()};return(d,o)=>(n(),B(A,{title:a(i)("Activity Log")},{default:k(()=>[t("div",R,[t("div",U,[t("div",q,[t("div",z,[t("div",E,[t("div",null,[t("div",O,s(a(i)("Activity Log")),1),t("div",G,s(a(i)("Please review the result below")),1)]),t("div",H,[t("form",{onSubmit:L(b,["prevent"])},[x(F,{onReset:o[0]||(o[0]=e=>C()),modelValue:a(l).search,"onUpdate:modelValue":o[1]||(o[1]=e=>a(l).search=e),dropdown:!1},null,8,["modelValue"])],32)])]),t("div",J,[m.activities&&m.activities.data&&m.activities.data.length?(n(),h("div",K,[t("div",Q,[t("div",W,[t("div",X,[t("div",Y,[t("table",Z,[t("thead",tt,[t("tr",null,[t("th",et,s(a(i)("Created at")),1),t("th",st,s(a(i)("Name")),1),t("th",ot,s(a(i)("Description")),1),t("th",at,s(a(i)("By")),1)])]),t("tbody",it,[(n(!0),h(V,null,N(_.activities.data,e=>(n(),h("tr",{key:e.id,class:D([a(u).selection.includes(e.id)&&"bg-gray-50 dark:bg-gray-800/50",e.deleted_at&&"bg-red-100 dark:bg-red-900"])},[t("td",{class:"whitespace-nowrap pl-5 pr-3 py-4 text-sm font-medium",onClick:c=>p(e)},s(d.$datetime(e.created_at)),9,dt),t("td",{class:"whitespace-nowrap px-3 py-4 text-sm",onClick:c=>p(e)},s(e.log_name),9,rt),t("td",{class:"whitespace-nowrap px-3 py-4 text-sm",onClick:c=>p(e)},s(e.description),9,lt),t("td",{class:"whitespace-nowrap px-3 py-4 text-sm",onClick:c=>p(e)},s(e.causer?e.causer.name:""),9,nt)],2))),128))])])])])]),x(I,{class:"m-4",meta:_.activities.meta,links:_.activities.links},null,8,["meta","links"])])])):(n(),h("div",ct,s(a(i)("There is no data to display.")),1))])])])])]),x(T,{show:g.value,"max-width":"lg",onClose:o[3]||(o[3]=e=>v())},{default:k(()=>[t("div",ht,[t("div",mt,[t("button",{type:"button",onClick:o[2]||(o[2]=e=>v()),class:"rounded-md focus:outline-none focus:ring-0"},[t("span",_t,s(a(i)("Close")),1),o[4]||(o[4]=t("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1))])]),t("div",pt,[r.value?(n(),h("div",gt,[t("h3",ut,s(r.value.description),1),t("div",yt,[t("div",xt,[t("table",vt,[t("tr",bt,[t("td",ft,s(a(i)("Subject Id")),1),t("td",wt,s(r.value.subject_id),1)]),t("tr",kt,[t("td",Ct,s(a(i)("Subject Type")),1),t("td",$t,s(r.value.subject_type),1)]),t("tr",jt,[t("td",St,s(a(i)("Properties")),1),t("td",Bt,[t("pre",Lt,s(r.value.properties),1)])])])])])])):M("",!0)])])]),_:1},8,["show"])]),_:1},8,["title"]))}};export{Tt as default};
