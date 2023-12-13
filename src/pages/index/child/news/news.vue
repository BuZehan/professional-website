<template>
  <view class="container-news" ref="target">
    <template v-if="!IsPC">
      <AppPopup />
      <AppHeader />
    </template>
    <view class="container-content">
      <backgroundImg :img="sl" />
      <view class="trans">
        <AppBreadcrumb :currentPageTxtArr="['专业新闻']" />
        <el-row justify="center">
          <el-col :xs="{ span: 24 }" :sm="{ span: 20 }" :md="{ span: 20 }" :xl="18">
            <view class="title">{{ CurrentTitle }}</view>
            <p class="line"></p>
            <view class="content">
              <el-row>
                <!-- 菜单切换 -->
                <el-col :xs="24" :md="{ span: 4 }" v-showMeta="`animate__fadeInLeft`">
                  <!-- 新闻动态 -->
                  <el-row justify="center" class="news-menu">
                    <el-col :class="{ active: currentIndex === 0 || currentIndex === 3 }" :xs="12" :sm="10" :md="20"
                      :lg="24" @tap="toogleComponent(0)">
                      新闻动态
                    </el-col>
                  </el-row>
                  <!-- 通知公告 -->
                  <el-row justify="center" class="news-menu">
                    <el-col :class="{ active: currentIndex === 1 || currentIndex === 4 }" :xs="12" :sm="10" :md="20"
                      :lg="24" @tap="toogleComponent(1)">
                      通知公告
                    </el-col>
                  </el-row>
                  <!-- 获奖证书 -->
                  <el-row justify="center" class="news-menu">
                    <el-col :class="{ active: currentIndex === 2 || currentIndex === 5 }" :xs="12" :sm="10" :md="20"
                      :lg="24" @tap="toogleComponent(2)">
                      获奖证书
                    </el-col>
                  </el-row>
                </el-col>
                <!-- 组件切换 -->
                <el-col class="component-wrapper" :xs="{ span: 22, offset: 1 }" :sm="{ span: 18, offset: 3 }"
                  :md="{ span: 20, offset: 0 }">
                  <Transition name="el-fade-in" mode="out-in">
                    <!-- <KeepAlive> -->
                    <component :is="Components[currentIndex]" />
                    <!-- </KeepAlive> -->
                  </Transition>
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
import {IsPC} from '@/hooks'
import { onActivated, ref, computed, onMounted } from 'vue';
import PubSub from 'pubsub-js';
import { WebDataStore } from '@/store/modules/web.js';
import { MainStore } from '../../../../store';
const UseMainStore = MainStore()
const UseWebDataStore = WebDataStore()
let currentIndex = ref(0);
// 石榴背景
import sl from '@/static/sl.jpg';
onActivated(() => {
  PubSub.publish('scroll-top', { data: true });
  currentIndex.value = !UseMainStore.IsPC ? 0 : UseWebDataStore.NewsDetailIndexArr[1];
  // console.log(currentIndex.value);
})
// 动态组件
import InformModules from './inform-modules.vue';
import NewsMoudlers from './news-modules.vue';
import Certificate from './certificate-modules.vue';

// 新闻详情组件
import NewsDetail from './news-detail.vue';
import InformDetail from './inform-detail.vue';
import CertificateDetail from './certificate-detail.vue';
const Components = [NewsMoudlers, InformModules, Certificate, NewsDetail, InformDetail, CertificateDetail];
// 切换组件
const toogleComponent = (index) => {
  UseWebDataStore.SetNewsDataIndex(index)
  currentIndex.value = index;
};
PubSub.subscribe('go-to-detail', (msg, data) => {
  if (data.type === 'news') {
    currentIndex.value = 3;
  } else if (data.type === 'inform') {
    currentIndex.value = 4;
  } else {
    currentIndex.value = 5;
  }
})
PubSub.subscribe('back-event', (msg, data) => {
  currentIndex.value = data.index
})
// 滚动页面
const target = ref(null)
// pc端监听点击首页新闻事件
// PubSub.subscribe('index-news-xwdt-event', (msg, data) => {
//   currentIndex.value = data.num
// })
// 计算标题文字
const CurrentTitle = computed(() => {
  let i = currentIndex.value
  return (i === 0 || i === 3) ? '新闻动态' : (i === 1 || i === 4) ? '通知公告' : '获奖证书'
})


</script>

<style scoped lang="scss">
.container-news {
  position: relative;

  .container-content {
    height: fit-content !important;
    overflow: hidden;


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
    text-overflow: ellipsis;
    box-sizing: border-box;

    .news-menu {
      font-weight: normal;
      letter-spacing: 4rpx;
      text-indent: 2rpx;
      width: 100%;

      .el-col {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        cursor: pointer;
        margin-bottom: 20rpx;
        border: 1rpx solid var(--CHAHUAHONG);
        color: #333;
        transition: all .5s;

        &:hover {
          background-color: rgb(200, 20, 20);
        }
      }

      .active {
        background-color: rgb(200, 20, 20);
        color: #ffffff;
      }
    }

    .component-wrapper {
      box-sizing: border-box;
      width: 100%;
    }
  }
}

@include respondTo("mobile") {
  .container-news {
    .footer {
      display: flex;
    }

    .m-header {
      display: block;
      position: fixed;
      top: 0;
      z-index: 8000;
    }

    .container-content {
      margin-top: 100rpx;
      overflow-y: scroll;

      .trans {
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
  .container-news {
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
      line-height: 40px;
      font-size: 32rpx;
      font-weight: bold;
      color: #333;

      view {
        text-indent: 60rpx;
        margin-bottom: 20rpx;
      }

      .component-wrapper {
        padding-left: 80rpx;
      }
    }
  }
}
</style>
