import{_ as e,W as a,y as s,L as t,P as l,a as n,c as d,w as c,m as i,i as o,d as r,e as p,s as u,t as m,u as f,U as _,g,V as b}from"./index-bc0df3a7.js";const h=e({__name:"inform-detail",setup(e){const h=a(),w=s((()=>h.NoticeData.list)),x=s((()=>h.NoticeDataIndex));t((()=>{l.publish("scroll-top",{data:!0})}));const v=()=>{console.log(123),l.publish("back-event",{index:1})},y=()=>{b({delta:1})};return(e,a)=>{const s=i("AppPopup"),t=i("AppHeader"),l=i("el-col"),b=i("el-icon"),h=i("el-image"),k=i("el-row"),D=i("el-button"),I=i("Footer"),j=o;return n(),d(j,{class:"news-detail",ref:"target"},{default:c((()=>[r("template",{class:"m-header hidden-md-and-up"},[p(s),p(t)]),p(k,{justify:"center"},{default:c((()=>[p(l,{class:"title",xs:22,md:24},{default:c((()=>[u(m(f(w)[f(x)].news_title),1)])),_:1}),p(l,{class:"time",xs:22,md:24},{default:c((()=>[p(b,{size:20,color:"rgb(200,20,20)"},{default:c((()=>[p(f(_))])),_:1}),u(m(f(w)[f(x)].release_time),1)])),_:1}),p(l,{class:"content",xs:22,md:24},{default:c((()=>[p(h,{src:f(w)[f(x)].notificationImage[0].image_path,fit:"cover"},null,8,["src"]),g(" <p v-else>{{ c }}</p> ")])),_:1}),p(l,null,{default:c((()=>[r("p",null,m(f(w)[f(x)].news_content),1)])),_:1}),g(' <el-image v-if="c == \'img\'" :src="newsData.imgUrl" fit="cover" /> ')])),_:1}),p(D,{color:"rgb(200,20,20)",class:"hidden-sm-and-down btn",type:"primary",onClick:v},{default:c((()=>[u("返回")])),_:1}),p(D,{color:"rgb(200,20,20)",class:"hidden-md-and-up btn",type:"primary",onClick:y},{default:c((()=>[u("返回")])),_:1}),p(I,{class:"hidden-md-and-up"})])),_:1},512)}}},[["__scopeId","data-v-39c4826b"]]);export{h as default};
