<template>
  <view class="teaching-team">
    <view class="m">
      <Swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }" :pagination="false" :modules="modules" class="mySwiper">
        <SwiperSlide class="swiper-slide" v-for="item, i in dataList" :key="item.title" @tap="mClickTeacherItem(i)">
          <el-card :body-style="{ padding: '0px' }">
            <image mode="scaleToFill" :src="item.img" class="image" />
            <view style="padding: 14px">
              <view class="title">{{ item.name }}</view>
              <view class="bottom">
                <view class="time desc">{{ item.title }}。{{ item.desc.area }}</view>
                <el-button size="small" class="button">详情</el-button>
              </view>
            </view>
          </el-card>
        </SwiperSlide>
      </Swiper>
    </view>
    <view class="pc">
      <Swiper ref="{swiperRef}" :loop="true" :slidesPerView="3" :centeredSlides="true" :spaceBetween="30" :pagination="{
        type: 'fraction',
      }" :navigation="true" :modules="PCmodules" class="myPcSwiper">
        <SwiperSlide class="hidden-sm-and-down" v-for="item,i in dataList" :key="item.title" @tap="clickTeacherItem(i)">
          <el-card :body-style="{ padding: '0px' }">
            <el-image fit="cover" :src="item.img" class="image" />
            <view style="padding: 14px" class="content">
              <view class="title">{{ item.name }}</view>
              <view class="bottom">
                <view class="time desc">{{ item.title }}。{{ item.desc.area }}{{item.desc.Exp[0]}}</view>
              </view>
            </view>
          </el-card>
        </SwiperSlide>
      </Swiper>
    </view>
  </view>
</template>
<script setup>
import { ref } from 'vue'
import PubSub from 'pubsub-js';
import { TeacherInfoStore } from '@/store/modules/teacherInfo'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
const modules = [EffectCoverflow, Pagination];
const UseTeacherInfoStore = TeacherInfoStore();
const dataList = UseTeacherInfoStore.teacherList;

// PC
import 'swiper/css/navigation';
const PCmodules = [Pagination, Navigation];

// 点击教师卡片
const clickTeacherItem = (i) => {
  UseTeacherInfoStore.updateTeacherInfo(dataList[i])
  UseTeacherInfoStore.updateCurrentStatus(1)
  PubSub.publish('index-teacher-event',{num:1})
  PubSub.publish('navgation-event', { e: '3' })
}
const mClickTeacherItem = (i) => {
  UseTeacherInfoStore.updateTeacherInfo(dataList[i])
  uni.navigateTo({
    url: '/pages/index/child/teaching-team/teacher-info-m'
  })
}
</script>

<style scoped lang="scss">

.mySwiper {
  margin: 20rpx auto;
  box-sizing: border-box;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 400rpx;
  height: fit-content;
  box-sizing: border-box;
  border-radius: 8rpx;
  position: relative;

  image {
    display: block;
    width: 100%;
    height: 300rpx;
  }

  .title {
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    color: #333;
    margin: 10rpx 0;
    height: 40px;
  }

  .bottom {
    padding-bottom: 40rpx;

    .desc {
      box-sizing: border-box;
      text-align: justify;
      line-height: 36rpx;
      color: #666;
      font-size: 28rpx;
      text-align: justify;
      display: -webkit-box;
      /* 带有-webkit-前缀的属性是针对 WebKit 内核浏览器的 */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      height: fit-content;
      -webkit-line-clamp: 3;
      /* 限制显示三行 */
      box-sizing: border-box;
    }

    .button {
      float: right !important;
      margin-top: 10rpx;
    }

  }
}

@include respondTo("mobile") {
  .teaching-team {
    .m {
      display: flex;
    }

    .pc {
      display: none;
    }
  }
}

@include respondTo("desktop") {
  .teaching-team {
    .m {
      display: none;
    }

    .pc {
      display: flex;

      .myPcSwiper {
        height: 320px;
        width: 100%;
        max-width: 1440px;
        box-sizing: border-box;
        padding: 0 40px;

        :deep(.swiper-pagination) {
          display: none !important;
        }

        .swiper-slide {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          .el-card {
            width: 84%;
            cursor: pointer;
            max-width: 320px;
            padding: 25px 0;
            padding-bottom: 10px;

            .image {
              border-radius: 50%;
              width: 100px;
              height: 100px;
              margin-left: 50%;
              transform: translate(-50%, -5px);
            }

            .desc {
              line-height: 26px;
            }

            .bottom {
              padding: 0;
            }
          }
        }

      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width:992px) {}
</style>
