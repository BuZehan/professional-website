<template>
  <view class="container">
    <template class="m-header">
      <AppPopup />
      <AppHeader />
    </template>
    <view class="container-content">
      <backgroundImg :img="UseStuInfoStore.currentRouterIndex === 0 ? '' : stu_img_list"/>
      <view class="trans">
        <AppBreadcrumb class="bread" :currentPageTxtArr="['优秀校友']" @changePage="changePage" />
        <el-row justify="center">
          <el-col :xs="{ span: 23 }" :sm="{ span: 22 }" :xl="20">
            <view class="title">优秀校友</view>
            <p class="line"></p>
            <view class="content">
              <Transition name="el-fade-in">
                <keep-alive>
                  <component :is="components[UseStuInfoStore.currentRouterIndex]" />
                </keep-alive>
              </Transition>
            </view>
          </el-col>
        </el-row>
      </view>
    </view>
    <Footer class="footer" />
  </view>
</template>

<script setup>
import { onActivated, computed ,ref,watch} from 'vue';
import PubSub from 'pubsub-js';
// 仓库状态数据
import {StuInfoStore} from '@/store/modules/stu.js';
const UseStuInfoStore = StuInfoStore();
// 路由数组
import StuShow from './stu-show.vue';
import StuDetail from './stu-detail.vue';
const components = [StuShow, StuDetail];

onActivated(() => {
  PubSub.publish('scroll-top', { data: true });
})
// 面包屑点击事件
const changePage = (i) => {
  UseStuInfoStore.updateCurrentRouterIndex(0)
}

// 导入默认图片
import BannerFM from '@/static/banner-fm.png'
const stu_img_list = computed(() => {
 return  UseStuInfoStore.currentStuData.imgList?.length > 0 ? UseStuInfoStore.currentStuData.imgList : [BannerFM]
})
// pc端监听点击首页教师事件
PubSub.subscribe('index-student-event', (msg, data) => {
  UseStuInfoStore.updateCurrentRouterIndex(0)
})
</script>

<style scoped lang="scss">

.container {
  position: relative;
  height: 100vh;
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
    .footer {
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

      .trans {
        transform: translateY(-60rpx);
        .bread{
          background-color: rgba(0, 0, 0, 0.363);
          padding: 0 !important;
        }
      }

      .title {
        height: 80rpx;
        font-size: 70rpx;
        margin-top: 40rpx;
      }
      .line{
        margin-top: 46rpx;
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
    height: fit-content;
    .footer {
      display: none;
    }

    .container-content {
      .trans {
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
    }
  }
}
</style>
