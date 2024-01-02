<template>
  <view class="container" ref="target">
    <template class="m-header">
      <AppPopup />
      <AppHeader />
    </template>
    <view class="container-content">
      <backgroundImg />
      <view>
        <AppBreadcrumb class="trans" @changePage="changePage" :currentPageTxtArr="currentStatus === 0? ['师资团队'] : ['师资团队']" />
        <view class="zz"></view>
        <el-row justify="center" class="instruction">
          <el-col :xs="{ span: 24 }" :sm="{ span: 20 }" :md="{ span: 18 }">
            <view class="title">{{ currentStatus === 0 ? '师资团队' : '教师' }}</view>
            <p class="line"></p>
            <view class="content pcContent">
              <Transition name="el-fade-in" mode="out-in">
                <KeepAlive>
                  <component :is="RouterArr[currentStatus]" />
                </KeepAlive>
              </Transition>
            </view>
            <view class="mContent">
              <ShowTeacherList />
            </view>
          </el-col>
        </el-row>
      </view>
    </view>

    <Footer class="footer" />
  </view>
</template>

<script setup>
import { ref, onBeforeUnmount, onActivated,onMounted } from 'vue'
import PubSub from 'pubsub-js'
import ShowTeacherList from './show-teacher-list.vue';
import { TeacherInfoStore } from '@/store/modules/teacherInfo.js'
const UseTeacherInfoStore = TeacherInfoStore()
// 教师详情
import TeacherInfo from "./teacher-info.vue";
// 路由数组
const RouterArr = [ShowTeacherList, TeacherInfo]
// 切换当前状态
const currentStatus = ref(UseTeacherInfoStore.currentStatus)
PubSub.subscribe('teacher-event', (msg, v) => {
  scrollPage(v.v)
  currentStatus.value = v.v
})
// pc端监听点击首页教师事件
PubSub.subscribe('index-teacher-event', (msg, data) => {
  currentStatus.value = data.num
})
// 返回师资团队
const changePage = (e) => {
  scrollPage(e)
  currentStatus.value = e;
}
// 滚动页面
const target = ref(null)
const scrollPage = (v) => {
  if (v !== 0) {
    PubSub.publish('scroll-top', { data: true });
    target.value.$el.scrollTo({
      top: 0,
      behavior: "smooth" // 使用平滑滚动效果
    })
  }
}
onActivated(() => {
  PubSub.publish('scroll-top', { data: true });  
})
onBeforeUnmount(() => {
  PubSub.unsubscribe('teacher-event')
  PubSub.unsubscribe('index-teacher-event')
})

</script>

<style scoped lang="scss">

.container {
  position: relative;

  .container-content {
    height: fit-content !important;

    .instruction {
      transform: translateY(-120rpx);
    }

    .trans {
      transform: translateY(-40rpx);
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30rpx 0;
    font-weight: bold;
    color: #333;

  }

  .line {
    height: 1px;
    width: 100%;
    background-color: #a1a1a14f;
    margin-top: 60rpx;
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
    height: 100vh;
    overflow-y: auto;

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
        transform: translateY(-120rpx);
      }

      .title {
        height: 60rpx;
        font-size: 60rpx;
      }

      .content {
        line-height: 50rpx;

        .c {
          text-indent: 60rpx;
          margin-bottom: 20px;
        }
      }

      .pcContent {
        display: none;
      }
    }

    //分页
    :deep(.el-pagination) {
      button {
        cursor: pointer;
      }
    }
  }
}

@include respondTo("desktop") {
  .container {
    .zz {
      width: 100vw;
      height: 80px;
      background-color: #fff;
      opacity: 0.7;
      transform: translateY(-120px);
      position: absolute;
      left: 0;
    }

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
    }


    .content {
      line-height: 40px;
      font-size: 32rpx;
      font-weight: bold;
      color: #333;
      max-width: 1440px;
      margin: 0 auto;

      view {}
    }

    .pcContent {
      display: block;
    }

    .mContent {
      display: none;
    }
  }
}</style>
