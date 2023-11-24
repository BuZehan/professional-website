<template>
  <Swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :loop="true"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mySwiper2"
  >
    <SwiperSlide v-for="item in imgList" :key="item"
      ><el-image :src="item"
    /></SwiperSlide>
  </Swiper>
  <Swiper
    @swiper="setThumbsSwiper"
    :loop="true"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
    <SwiperSlide v-for="item in imgList" :key="item"
      ><el-image :src="item" fitt="fill"
    /></SwiperSlide>
  </Swiper>
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
const imgList = [lab1,lab2,lab3,lab_207_1,lab_207_2]
</script>

<style scoped lang="scss">
@import '../../../../style.scss';
.swiper {
  width: 100vw;
  height: 100%;
}

.SwiperSlide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.SwiperSlide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.SwiperSlide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .SwiperSlide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .SwiperSlide-thumb-active {
  opacity: 1;
}

.SwiperSlide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@include respondTo('desktop') {
  .swiper{
    width: 80vw;
    max-width: 1200px;
  }
}
</style>
