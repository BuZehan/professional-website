import{R as e}from"./index-7785427a.js";const s="/assets/banner-fm-1befed0c.png";const t=(s,t,a={})=>new Promise(((n,o)=>{e({url:`http://121.37.119.45:8800/api/v1${t}`,method:s,data:a,header:{},success(e){n(e.data)},fail(e){o(e)}})})),a=e=>t("GET","/news/getNews",e),n=e=>t("GET","/honor/getHonor",e),o=e=>t("GET","/notification/getNotification",e),i=e=>t("GET","/swiper/getBanner",e),r=e=>t("GET","/stu/getStu",e);export{o as a,n as b,i as c,s as d,r as e,a as g};