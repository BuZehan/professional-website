<template>
    <el-row class="lab-row" justify="center">
      <el-col class="lab-desc hidden-sm-and-down" :xs="22" :sm="12">
        <p>高校网络工程实验室是一个先进的技术研究和实践基地，致力于培养学生在网络工程领域的专业能力和创新思维。该实验室配备了先进的网络设备和实验平台，为学生提供了广阔的学习和实践机会。</p>
        <p>实验室的硬件设施包括高性能的服务器、路由器、交换机等核心网络设备，以及先进的通信设备和安全设备。同时，实验室还配备了现代化的计算机工作站、多媒体设备和数据存储设备，以满足学生在网络配置、调试和管理方面的需求。</p>
        <p>在该实验室中，学生可以学习到网络规划与设计、网络管理与维护、网络安全等相关的知识和技能。他们可以通过搭建和配置网络实验环境，进行网络性能测试和故障排除，以及应用各种网络技术解决实际问题的实践活动。</p>
        <p>实验室的师资力量雄厚，拥有一支富有经验和专业知识的教师团队。教师们将指导学生进行实验操作，并提供必要的技术支持和指导。</p>
        <p>高校网络工程实验室不仅为学生提供了理论知识的学习，更重要的是培养了他们的实际操作能力和问题解决能力。通过在实验室中的实践活动，学生可以加深对网络工程领域的理解，提高自己的技术水平，并为将来从事网络工程相关的职业打下坚实的基础。</p>
      </el-col>
      <el-col :xs="22" :sm="{offset:1,span:8}">
        <Swiper :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }" :loop="true" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
          class="mySwiper2">
          <SwiperSlide v-for="item in imgList" :key="item"><el-image :src="item" /></SwiperSlide>
        </Swiper>
        <Swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
          :watchSlidesProgress="true" :modules="modules" class="mySwiper">
          <SwiperSlide v-for="item in imgList" :key="item"><el-image :src="item" fitt="fill" /></SwiperSlide>
        </Swiper>
      </el-col>
      <el-col class="lab-desc hidden-md-and-up" :xs="22" :sm="14">
        <p>高校网络工程实验室是一个先进的技术研究和实践基地，致力于培养学生在网络工程领域的专业能力和创新思维。该实验室配备了先进的网络设备和实验平台，为学生提供了广阔的学习和实践机会。</p>
        <p>实验室的硬件设施包括高性能的服务器、路由器、交换机等核心网络设备，以及先进的通信设备和安全设备。同时，实验室还配备了现代化的计算机工作站、多媒体设备和数据存储设备，以满足学生在网络配置、调试和管理方面的需求。</p>
      </el-col>
    </el-row>
</template>
<script setup>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const thumbsSwiper = ref(null);
const modules = [FreeMode, Navigation, Thumbs];
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

import lab1 from "@/static/lab/lab1.jpg"
import lab2 from "@/static/lab/lab2.jpg"
import lab3 from "@/static/lab/lab3.jpg"
import lab_207_1 from "@/static/lab/lab-207-1.jpg"
import lab_207_2 from "@/static/lab/lab-207-2.jpg"
const imgList = [lab1, lab2, lab3, lab_207_1, lab_207_2]
</script>

<style scoped lang="scss">
.lab-row {
  width: 100vw;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 10px;
  .lab-desc{
    line-height:28px ;
    p{
      margin-bottom: 15px;
    }
  }
  .swiper {
    width: 100%;
    .swiper-wrapper{
      height: 100%;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    height: 100%;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  .swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    height: 300px;
  }

  .mySwiper2 {
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .mySwiper .swiper-slide  {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}


@include respondTo('mobile') {
 p{
  font-size: 28rpx;
  margin-top: 20rpx;
  margin-bottom: 0 !important;
 }
}
</style>
