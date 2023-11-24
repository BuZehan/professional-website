<template>
  <view class="container">
    <template class="m-header">
      <AppPopup />
      <AppHeader />
    </template>
    <view class="container-content">
      <backgroundImg />
      <view class="trans">
        <AppBreadcrumb :currentPageTxtArr="['优秀毕业生']" />
      <el-row justify="center">
        <el-col :xs="{ span: 18}" :sm="{ span:18 }" :md="{ span: 18 }">
          <view class="title">优秀毕业生</view>
          <p class="line"></p>
          <view class="content">
            
          </view>
        </el-col>
      </el-row>
      </view>
    </view>
    <Footer class="footer"/>
  </view>
</template>

<script setup>
import {onActivated} from 'vue'
import OutstandingGraduate from "@/pages/index/components/outstanding-graduate/outstanding-graduate.vue";

// 面包屑
import AppBreadcrumb from "@/components/app-breadcrumb/app-breadcrumb.vue";
import AppHeader from "@/components/app-header/app-header.vue";
import AppPopup from "@/components/app-popup/app-popup.vue";
// 页脚
import Footer from "@/components/app-footer/app-footer.vue"
// 背景图
import backgroundImg from "../background-img/background-img.vue";
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


onActivated(() => {
  PubSub.publish('scroll-top', { data: true });
})
</script>

<style scoped lang="scss">
@import "../../../../style.scss";

.container {
  position: relative;

  .container-content {
    height: fit-content !important;
 .trans{
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
    margin-top: 50px;
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
    .footer{
      display: flex;
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
      .trans{
        transform: translateY(-100rpx);
      }
      .title {
        height: 80rpx;
        font-size: 70rpx;
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
    .footer{
      display: none;
    }
    .container-content{
      .trans{
        transform: translateY(-145px);
      }
    }
    .m-header {
      display: none;
    }

    .title {
      height: 80rpx;
      font-size: 90rpx;
      color: #fff;
    }


    .content {
      line-height: 40px;
      font-size: 32rpx;
      font-weight: bold;
      color: #333;

      view {
        text-indent: 60rpx;
        margin-bottom: 20rpx;
      }
    }
  }
}
</style>
