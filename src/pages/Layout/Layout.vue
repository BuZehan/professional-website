<template>
  <view class="layout-container" :class="{ 'layout-padding-top': !UseMainStore.isIndex }" ref="layout">
    <template class="pc-header">
      <AppPopup />
      <AppHeader @changeComponents="changeComponents" :i="i" :j="j" :scrollValue="scrollValue" />
    </template>
    <Index v-if="!IsPC" />
    <template v-if="IsPC">
      <transition name="el-fade-in-linear" mode="out-in">
        <KeepAlive>
          <component :is="ComponentsArray[i][j]" />
        </KeepAlive>
      </transition>
    </template>
    <!-- 页脚 -->
    <AppFooter class="footer" />
  </view>
</template>

<script setup>
import { ref, onUnmounted, onMounted, nextTick, watch, computed } from "vue";
import PubSub from "pubsub-js";
import { windowResize, IsPC } from '@/hooks'
import { MainStore } from "@/store"
// 引入组件
import AppHeader from "@/components/app-header/app-header.vue";
import AppPopup from "@/components/app-popup/app-popup.vue";
import Index from "../index/index.vue";
// 页脚
import AppFooter from "@/components/app-footer/app-footer.vue"
// 专业介绍
import SpecialtyInstruction from "../index/child/specialty-instruction/specialty-instruction.vue";
// 师资团队
import TeachingTeam from "../index/child/teaching-team/teaching-team.vue";
// 专业课程
import SpecializedCourses from "../index/child/specialized-courses/specialized-courses.vue";
// 实验室
import Laboratory from "../index/child/laboratory/laboratory.vue";
// 优秀毕业生
import OutstandingGraduate from "../index/child/outstanding-graduate/outstanding-graduate";
// 新闻动态
import News from "../index/child/news/news";
// 二级路由
// 合作企业
import Huawei from "../index/child/enterprise/huawei.vue";
import H3C from "../index/child/enterprise/h3c.vue";
import XinXiangHongFu from "../index/child/enterprise/xin-xiang-hong-fu.vue";
import HaoJingTechnology from "../index/child/enterprise/hao-jing-technology.vue";
import TianRongXin from "../index/child/enterprise/tian-rong-xin.vue";
import ZhongJing from "../index/child/enterprise/zhong-jing.vue";
// 使用pinia仓库数据
const UseMainStore = MainStore()
const ComponentsArray = [
  [Index],
  [SpecialtyInstruction],
  [TeachingTeam],
  [SpecializedCourses],
  [Laboratory],
  [Huawei, XinXiangHongFu, H3C, HaoJingTechnology, TianRongXin, ZhongJing],
  [OutstandingGraduate],
  [News],
];
// 布局滚动事件
const scrollValue = ref(0)
nextTick(() => {
  layout.value.$el.addEventListener("scroll", (e) => {
    let dis = e.target.scrollTop;
    scrollValue.value = dis;
    // if (UseMainStore.isIndex) {
    // }
  })
})
const i = ref(0);
const j = ref(0);
const changeComponents = (index) => {
  // console.log(index);
  if (index != '1') {
    UseMainStore.updateIsIndex(false)
  } else {
    UseMainStore.updateIsIndex(true)
    // 返回首页
    nextTick(() => {
      layout.value.$el.scrollTo({
        left: 0,
        top: 0,
        // behavior: "smooth"
      })
    })
  }
  let numArr = index.split("-");
  if (numArr.length === 1) {
    i.value = +index - 1;
    j.value = 0;
  } else {
    i.value = +numArr[0] - 1;
    j.value = +numArr[1] - 1;
  }
};
// 监听其他组件事件，路由切换。
PubSub.subscribe('navgation-event', (msg, data) => {
  PubSub.publish('changeActive', { index: data.e });
  changeComponents(data.e);
})
// 获取Layout组件
const layout = ref(null);
// 置顶操作
PubSub.subscribe('scroll-top', (msg, data) => {
  if (data.data) {
    layout.value.$el.scrollTo({
      top: 0,
    })
  }
})



windowResize()
onUnmounted(() => {
  PubSub.unsubscribe('navgation-event');
  PubSub.unsubscribe('scroll-top');
})

// uni-app onShow事件
// import { onShow } from '@dcloudio/uni-app';
// onShow(() => {
// })
// const IndexScroll = () => {
//   // 首滚动距离
//   layout.value.$el.addEventListener("scroll", (e) => {
//     console.log(e.target.scrollTop, "首页滚动");
//     scrollValue.value = e.target.scrollTop;
//   })
// }
</script>

<style scoped lang="scss">
:deep(.el-popper.is-light) {
  background-color: var(--MAIN);
  border: none;
}

.layout-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  overflow-y: auto;
}

@include respondTo("mobile") {
  .pc-header {
    display: none;
  }

  .footer {
    display: none;
  }

  .pc {
    display: none;
  }

  .m {
    display: block;
  }
}

@include respondTo("desktop") {
  .layout-container {

    position: relative;
  }

  .layout-padding-top {
    padding-top: 120rpx;
  }

  .pc-header {
    display: block;
  }

  .m {
    display: none;
  }

  .pc {
    display: block;
  }
}
</style>
