<template>
  <view class="container">
    <template class="m-header">
      <AppPopup />
      <AppHeader />
    </template>
    <view class="container-content">
      <backgroundImg :img="[xxhf_img1]" />
      <view class="trans">
        <AppBreadcrumb class="breadcrumb" :currentPageTxtArr="['合作企业', '薪享宏福']" />
        <el-row justify="center">
          <el-col :xs="{ span: 20 }" :sm="{ span: 20 }" :md="{ span: 18 }">
            <view class="title">薪享宏福</view>
            <p class="line"></p>
            <view class="content">
              <!-- 左图右文 -->
              <el-row justify="space-between" :gutter="20">
                <el-col  v-showMeta="`animate__fadeInLeft`"  class="instruction" :xs="24" :sm="12">
                  <h2>薪享宏福 专注培养云计算工程师</h2>
                  <p>薪享宏福，“北京缘起宏福科技有限公司” 旗下云计算实训品牌，专注为云计算行业提供解决方案，为企业提供云计算人才定制服务。公司自 2014
                    年成立以来，紧随国家云计算发展战略及产业发展步伐，精准聚焦于云计算高端技术人才的培养与输送。</p>
                  <p>公司作为传统学校教育和就业市场之间的桥梁，致力于帮助社会解决“学校教育与就业市场高度不对称的问题”。公司从毕业 0-5
                    年的群体中挖掘被“错配的人才”，通过搭建精英化、多层次、高区分的培养体系以及充分的就业辅导，并利用公司与优质就业单位的资源和联系，为“人才”找准“位置”，最终实现提升人才附加价值，服务社会人力资源优化配置的目的。
                  </p>
                  <el-button @tap="jumpPage" style="float: right;">了解详情</el-button>

                </el-col>
                <el-col  v-showMeta="`animate__fadeInRight`"  class="image-wrapper" :xs="24" :sm="12">
                  <Swiper :pagination="{ dynamicBullets: true, }" :autoplay="{ delay: 3500, disableOnInteraction: false, }"
                    :loop="true" :autoHeight="true" :modules="modules" class="mySwiper">
                    <SwiperSlide><el-image src="https://www.xinxianghf.cn/static/img/a_3.png" fit="cover" /></SwiperSlide>
                    <SwiperSlide><el-image src="https://www.xinxianghf.cn/static/img/a_4.png" fit="cover" /></SwiperSlide>
                    <SwiperSlide><el-image src="https://www.xinxianghf.cn/static/img/a_7.png" fit="cover" /></SwiperSlide>
                    <SwiperSlide><el-image src="https://www.xinxianghf.cn/static/img/a_5.png" fit="cover" /></SwiperSlide>
                  </Swiper>
                </el-col>
              </el-row>
              <!-- 文字 -->
              <el-row justify="space-between"  v-showMeta="`animate__fadeInUp`"  :gutter="20">
                <el-col class="instruction" :xs="24" :sm="24">
                  <p>通过整合优质教育资源，公司已持续为华为、爱立信、阿里、百度云、金山云、电信云、中国移动、光大银行、建设银行等 200+ 家企业输送云计算高端人才。</p>
                </el-col>
              </el-row>
            </view>
          </el-col>
        </el-row>
      </view>
    </view>
    <Footer class="footer" />
  </view>
</template>
  
<script setup>
// 面包屑
import AppBreadcrumb from "@/components/app-breadcrumb/app-breadcrumb.vue";
import AppHeader from "@/components/app-header/app-header.vue";
import AppPopup from "@/components/app-popup/app-popup.vue";
// 页脚
import Footer from "@/components/app-footer/app-footer.vue"
// 背景图
import backgroundImg from "../background-img/background-img.vue";
// banner
import xxhf_img1 from './image/xxhf/xxhf_banner_1.jpg';
import hw_img3 from './image/huawei/huawei_banner2.jpg';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
const modules = [Pagination, Autoplay];

// pc端---跳转
const pcNavgationTo = (e) => {
  PubSub.publish('navgation-event', { e })
};
// 跳转---移动端
const navgationTo = (url) => {
  uni.navigateTo({
    url: `/pages/${url}/${url}`,
  });
};
const jumpPage = () => {
  window.open("https://www.xinxianghf.cn/schoolIntroduction")
};

</script>
  
<style scoped lang="scss">
@import "../../../../style.scss";
.swiper-pagination-bullet-active{
  background-color: rgb(200,20,20) !important;
}
.container {
  position: relative;

  .container-content {
    height: fit-content !important;

    .trans {
      transform: translateY(-40rpx);
    }

    .daohang {
      .el-col {
        display: flex;
        align-items: center;

        .el-image {
          transform: scale(.7);
        }

        :deep(.el-breadcrumb) {
          .el-breadcrumb__inner {
            cursor: pointer !important;
          }
        }
      }
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30rpx 0;
    font-weight: bold;
  }

  .line {
    height: 1px;
    width: 100%;
    background-color: #a1a1a14f;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .content {
    font-size: 28rpx;
    text-align: justify;
    display: -webkit-box;
    /* 带有-webkit-前缀的属性是针对 WebKit 内核浏览器的 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }
}

@include respondTo("mobile") {
  .container {
    .footer {
      display: flex;
    }

    .breadcrumb {
      background-color: rgba(48, 49, 51, 0.636);
      padding: 0 !important;
    }

    .m-header {
      display: block;
      position: fixed;
      top: 0;
      z-index: 5000;
    }

    .container-content {
      margin-top: 100rpx;
      height: calc(100vh - 100rpx);

      .trans {
        transform: translateY(-60rpx);
      }

      .title {
        height: 80rpx;
        font-size: 50rpx;
        color: #303133;
      }

      .content {
        line-height: 50rpx;

        .c {
          text-indent: 60rpx;
          margin-bottom: 20px;
        }
      }
    }
  }
}

@include respondTo("desktop") {
  .container {
    .footer {
      display: none;
    }

    .breadcrumb {
      background-color: rgba(48, 49, 51, 0.636);
      padding: 0 !important;
    }

    .container-content {
      .trans {
        transform: translateY(-32px);
      }
    }

    .m-header {
      display: none;
    }

    .title {
      height: 80rpx;
      font-size: 60rpx;
      color: #333;
    }


    .content {
      line-height: 40px;
      font-size: 32rpx;
      font-weight: bold;
      color: #333;

      .instruction {
        box-sizing: border-box;
        padding-bottom: 0;
        text-align: justify;
        padding: 40rpx 0;

        h2 {
          margin-bottom: 40rpx;
          color: #333;
          font-size: 42rpx;
        }

        p {
          font-weight: normal;
          line-height: 64rpx;
          margin-bottom: 20rpx;
        }
      }

      .image-wrapper {
        position: relative;
        overflow-y: hidden;
        box-sizing: border-box;
        display: flex;
        align-items: center;

        .mySwiper {
          width: 100%;
          max-width: 500px;

          .swiper-slide {}
        }

      }

      view {
        text-indent: 60rpx;
        margin-bottom: 20rpx;
      }
    }
  }
}
</style>
  