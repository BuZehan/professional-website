import{d as e,r as s,o as i,a,c as o,w as t,i as r,b as n,e as l,K as p,f as c,T as d,g as m}from"./index-407bc2bb.js";import{P as u,A as g,a as h,F as f}from"./app-footer.24f711e0.js";import j from"./pages-index-index.2562d704.js";import x from"./pages-index-child-specialty-instruction-specialty-instruction.bec9eebb.js";import v from"./pages-index-child-teaching-team-teaching-team.1395610a.js";import b from"./pages-index-child-specialized-courses-specialized-courses.9d0ea90c.js";import w from"./pages-index-child-laboratory-laboratory.6402a5ef.js";import y from"./pages-index-child-outstanding-graduate-outstanding-graduate.2b5b8bba.js";import _ from"./pages-index-child-news-news.9d722614.js";import z from"./pages-index-child-enterprise-huawei.c2876f8c.js";import k from"./pages-index-child-enterprise-h3c.b525d779.js";import I from"./pages-index-child-enterprise-xin-xiang-hong-fu.e1bb24f3.js";import M from"./pages-index-child-enterprise-hao-jing-technology.9e0d1960.js";import A from"./pages-index-child-enterprise-tian-rong-xin.9aab2e04.js";import C from"./pages-index-child-enterprise-zhong-jing.2af640e3.js";import{_ as L}from"./_plugin-vue_export-helper.1b428a4d.js";import"./teacherInfo.4cd8e8dd.js";import"./zykc.132ab1f8.js";import"./stu-show.86c52b4b.js";import"./background-img.2b5b3eb0.js";import"./teacher-info.79949b39.js";import"./pages-index-child-news-news-detail.4d866425.js";import"./pages-index-child-news-inform-detail.75f6e64d.js";const S=e("main",(()=>{const e=s(!1),i=s(0);return{isMobile:e,setIsMobile:s=>{e.value=s},mobileScrollY:i,setMobileScrollY:e=>{i.value=e}}}),{persist:!0}),T=L({__name:"Layout",setup(e){const L=[[j],[x],[v],[b],[w],[z,I,k,M,A,C],[y],[_]],T=s(0),Y=s(0),E=e=>{let s=e.split("-");1===s.length?(T.value=+e-1,Y.value=0):(T.value=+s[0]-1,Y.value=+s[1]-1)};u.subscribe("navgation-event",((e,s)=>{u.publish("changeActive",{index:s.e}),E(s.e)}));const F=s(null);return u.subscribe("scroll-top",((e,s)=>{s.data&&F.value.$el.scrollTo({top:0})})),i((()=>{u.unsubscribe("navgation-event"),u.unsubscribe("scroll-top")})),S(),window.addEventListener("resize",(e=>{})),(e,s)=>{const i=r;return a(),o(i,{class:"layout-container",ref_key:"layout",ref:F},{default:t((()=>[n("template",{class:"pc-header"},[l(g),l(h,{onChangeComponents:E,i:T.value,j:Y.value},null,8,["i","j"])]),l(j,{class:"m"}),n("template",{class:"pc"},[l(d,{name:"el-fade-in-linear",mode:"out-in"},{default:t((()=>[(a(),o(p,null,[(a(),o(c(L[T.value][Y.value])))],1024))])),_:1})]),m(" 页脚 "),l(f,{class:"footer"})])),_:1},512)}}},[["__scopeId","data-v-8ea9a551"]]);export{T as default};
