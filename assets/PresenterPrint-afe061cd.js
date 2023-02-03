import{f as _,h as d,j as h,ag as p,c as m,ah as u,l as n,ai as t,aj as a,y as s,F as f,ak as g,al as v,am as x,n as r,an as y,ao as b,m as N,ap as k,aq as w,_ as P}from"./nav-0a751ebf.js";import{N as V}from"./NoteViewer-66618815.js";import{u as j}from"./index-cf730b38.js";const L={class:"m-4"},S={class:"mb-10"},C={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},z={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),A={key:0,class:"border-gray-400/50 mb-8"},F=_({__name:"PresenterPrint",setup(M){d(h),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),j({title:`Notes - ${m.title}`});const l=u(()=>x.slice(0,-1).map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.notesHTML!==""));return(o,i)=>(r(),n("div",{id:"page-root",style:v(s(w))},[t("div",L,[t("div",S,[t("h1",C,a(s(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(s(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",z,[t("div",B,[t("div",D,a(e==null?void 0:e.no)+"/"+a(s(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),H])]),N(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(l).length-1?(r(),n("hr",A)):k("v-if",!0)]))),128))])],4))}}),W=P(F,[["__file","/home/marco/Documenti/CorsoArduino/Lezione5/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
