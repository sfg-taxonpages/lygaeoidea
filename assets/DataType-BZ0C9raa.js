import{r as d,n as v,b as i,d as b,t as _,a as x,g as y,p as h,e as o,j as p,w as g}from"./index-KHXQrMPW.js";const w={__name:"AnimateNumber",props:{number:{type:Number,default:100},duration:{type:Number,default:1e3}},emits:["animation:start","animation:end"],setup(t,{emit:l}){const s=t,n=d(0),r=d(0),c=l;v(()=>s.number,(e,a)=>{e!==a&&f()},{immediate:!0});function f(){let e=null;c("animation:start");const a=u=>{e||(e=u);const m=Math.min((u-e)/s.duration,1);n.value=Math.floor(m*(s.number-r.value)+r.value),m<1?window.requestAnimationFrame(a):(r.value=n.value,c("animation:end"))};window.requestAnimationFrame(a)}return(e,a)=>(i(),b("div",null,_(n.value.toLocaleString()),1))}},N={class:"flex items-center bg-base-foreground flex-col relative"},k={class:"leading-3 text-center mt-5"},C={class:"font-medium text-2xl block line"},q={class:"uppercase text-sm"},A={__name:"DataType",props:{icon:{type:Object,required:!0},count:{type:Number,default:0},label:{type:String,required:!0}},setup(t){return(l,s)=>{const n=x("ClientOnly");return i(),b("div",N,[(i(),y(h(t.icon),{class:"h-14 w-14 z-10 text-primary-color dark:text-base-content"})),o("div",k,[o("span",C,[p(n,null,{default:g(()=>[p(w,{number:t.count},null,8,["number"])]),_:1})]),o("span",q,_(t.label),1)])])}}};export{A as default};
