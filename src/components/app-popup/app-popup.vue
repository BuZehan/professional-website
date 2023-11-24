<template>
  <view class="app-popup" :class="{ popupActive: isActive }">
    <el-collapse v-model="activeNames" @change="handleChange">
      <template v-for="item in listData" :key="item.title">
        <view
          v-if="!item.children"
          class="popup-item"
          @tap="navgationTo(item.path)"
          >{{ item.title }}</view
        >
        <el-collapse-item v-else :title="item.title" :name="item.name">
          <view
            v-for="child in item.children"
            :key="child.title"
            @tap="navgationTo(child.path)"
            >{{ child.title }}</view
          >
        </el-collapse-item>
      </template>
    </el-collapse>
  </view>
</template>

<script setup>
import { ref, watch } from "vue";
import PubSub from "pubsub-js";
// 菜单弹窗
const isActive = ref(false);
PubSub.subscribe("clickMenu", (msg, data) => {
  isActive.value = !isActive.value;
});

const activeNames = ref(["0"]);
const handleChange = (val) => {
  console.log(val);
};

// 列表数据
const listData = ref([
  { title: "首页", name: "1", path: "/pages/Layout/Layout" },
  {
    title: "专业介绍",
    name: "2",
    path: "/pages/index/child/specialty-instruction/specialty-instruction",
  },
  {
    title: "师资团队",
    name: "3",
    path:"/pages/index/child/teaching-team/teaching-team"
  },
  { title: "专业课程", name: "4", path:"/pages/index/child/specialized-courses/specialized-courses" },
  { title: "实验室", name: "5", path:"/pages/index/child/laboratory/laboratory" },
  {
    title: "合作企业",
    name: "6",
    children: [
      {
        title: "华为",
        name: "6-1",
        path: "/pages/index/child/enterprise/huawei",
      },
      {
        title: "薪享宏福",
        name: "6-2",
        path: "/pages/index/child/enterprise/xin-xiang-hong-fu",
      },
      {
        title: "H3C",
        name: "6-3",
        path: "/pages/index/child/enterprise/h3c",
      },
      {
        title: "浩鲸科技",
        name: "6-4",
        path: "/pages/index/child/enterprise/hao-jing-technology",
      },
      {
        title: "天融信",
        name: "6-5",
        path: "/pages/index/child/enterprise/tian-rong-xin",
      },
      {
        title: "中憬科技集团有限公司",
        name: "6-6",
        path: "/pages/index/child/enterprise/zhong-jing",
      },
    ],
  },
  {
    title: "优秀毕业生",
    name: "7",
    path: "/pages/index/child/outstanding-graduate/outstanding-graduate",
  },
  { title: "新闻动态", name: "8", path: "/pages/index/child/news/news" },
]);
// 跳转详情页
const navgationTo = (url) => {
  uni.navigateTo({
    url: url,
  });
};
</script>

<style scoped lang="scss">
@import "../../style.scss";
@include respondTo("mobile") {
  .app-popup {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    position: absolute;
    z-index: 5000;
    box-sizing: border-box;
    padding: 0 40rpx;
    padding-top: 100rpx;
    transform: translateX(100%);
    transition: all 0.3s;
    :deep(.el-collapse-item__header) {
      font-weight: 900;
    }
    .popup-item {
      width: 100%;
      padding: 0;
      border: none;
      display: flex;
      align-items: center;
      height: var(--el-collapse-header-height);
      line-height: var(--el-collapse-header-height);
      background-color: var(--el-collapse-header-bg-color);
      color: var(--el-collapse-header-text-color);
      cursor: pointer;
      border-bottom: 1px solid var(--el-collapse-border-color);
      font-size: var(--el-collapse-header-font-size);
      font-weight: 900;
      transition: border-bottom-color var(--el-transition-duration);
      outline: 0;
    }
  }
  .popupActive {
    transform: translateX(0);
  }
}



@include respondTo("desktop") {
  .app-popup {
    display: none;
  }
}
</style>
