<template>
  <view class="app-header">
    <el-row class="hidden-md-and-up" justify="space-between">
      <el-col class="app-logo" :xs="16" :sm="10">
        <image mode="widthFix" src="../../static/logo-sm.png" />
      </el-col>
      <el-col class="app-menu" :xs="4" :sm="2">
        <!-- 移动端菜单栏 -->
        <view class="app-mobile-navigation" @tap="clickMenuHandler">
          <!-- <image v-show="menuActive" src="../../static/menu.png" />
          <image v-show="!menuActive" src="../../static/cancle.png" /> -->
          <view :class="{ 'menu-hamburger': true, active: !menuActive }">
            <view class="hamburge hamburger-1"></view>
            <view class="hamburge hamburger-2"></view>
            <view class="hamburge hamburger-3"></view>
          </view>
        </view>
      </el-col>
    </el-row>
    <!-- PC端菜单栏 -->
    <view class="app-pc-navigation hidden-sm-and-down">
      <el-row justify="space-around">
        <el-col class="app-logo" :sm="6" :md="8" :lg="8">
          <image mode="widthFix" src="../../static/logo.png" />
        </el-col>
        <el-col class="app-menu" :sm="18" :md="16" :lg="16">
          <el-menu :default-active="activeStr" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <template v-for="item in listData" :key="item.title">
              <el-menu-item v-if="!item.children" :index="item.name">{{
                item.title
              }}</el-menu-item>
              <!-- 二级菜单 -->
              <el-sub-menu v-else :index="item.name" :key="item.title">
                <template #title>{{ item.title }}</template>
                <el-menu-item v-for="c in item.children" :key="c.title" :index="c.name">{{ c.title
                }}</el-menu-item>
              </el-sub-menu>
            </template>
          </el-menu>
        </el-col>
      </el-row>
    </view>
  </view>
</template>

<script setup>
import { ref, onBeforeUnmount, watch } from "vue";
import PubSub from "pubsub-js";

const $props = defineProps({
  i: {
    type: Number,
    default: 1
  },
  j: {
    type: Number,
    default: 0
  }
})

// 移动端事件
const menuActive = ref(true);
const clickMenuHandler = () => {
  menuActive.value = !menuActive.value;
  PubSub.publish("clickMenu", { data: menuActive.value });
};

// 菜单数据
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
    path: "/pages/index/child/teaching-team/teaching-team",
  },
  {
    title: "专业课程",
    name: "4",
    path: "/pages/index/child/specialized-courses/specialized-courses",
  },
  {
    title: "实验室",
    name: "5",
    path: "/pages/index/child/laboratory/laboratory",
  },
  {
    title: "合作企业",
    name: "6",
    children: [
      {
        title: "华为",
        name: "6-1",
        path: "/pages/index/child/huawei/huawei",
      },
      {
        title: "薪享宏福",
        name: "6-2",
        path: "/pages/index/child/xin-xiang-hong-fu",
      },
      {
        title: "H3C",
        name: "6-3",
        path: "/pages/index/child/h3c/h3c",
      },
      {
        title: "浩鲸科技",
        name: "6-4",
        path: "/pages/index/child/hao-jing-technology/hao-jing-technology",
      },
      {
        title: "天融信",
        name: "6-5",
        path: "/pages/index/child/tian-rong-xin/tian-rong-xin",
      },
      {
        title: "中憬科技集团有限公司",
        name: "6-6",
        path: "/pages/index/child/zhong-jing/zhong-jing",
      },
    ],
  },
  {
    title: "优秀毕业生",
    name: "7",
    path: "/pages/index/child/connect/connect",
  },
  { title: "专业新闻", name: "8", path: "/pages/index/child/news/news" },
]);
const $emits = defineEmits(["changeComponents"]);
const activeStr = ref("")
const handleSelect = (key, keyPath) => {
  activeStr.value = key;
  $emits("changeComponents", key);
};

// :deep(.is-active) {
//       border-bottom: 2px solid #d00202 !important;
//       color: #d00202 !important;
//     }

//     :deep(.el-menu-item) {
//       &:hover {
//         background-color: #d0020218;
//         color: #d00202;
//       }
//     }

//     :deep(.el-sub-menu__title) {
//       &:hover {
//         background-color: #d0020218;
//         color: #d00202;
//       }
//     }

</script>

<style scoped lang="scss">
@import "../../style.scss";

@include respondTo("mobile") {
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8888;
    width: 100vw;

    .el-row {
      height: 100rpx;
      overflow: hidden;
      background-color: var(--HUAQING);

      .el-col {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .app-logo {
        width: 100%;
        height: 100rpx;

        image {
          width: 100%;
          padding-left: 8rpx;
          max-height: 100rpx;
        }
      }

      .app-menu {
        height: 100%;
        width: 100%;

        .app-mobile-navigation {
          .menu-hamburger {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-around;
            width: 60rpx;
            height: 50rpx;

            .hamburge {
              width: 100%;
              background-color: rgb(255, 255, 255);
              border-radius: 10rpx;
              height: 4rpx;
              margin: 4rpx 0;
              transition: var(--el-transition-all);
            }

            .hamburger-1 {
              width: 50%;
            }

            .hamburger-2 {
              width: 100%;
              height: 4rpx;
            }

            .hamburger-3 {
              width: 75%;
              height: 4rpx;
            }

          }

          .active {
            .hamburger-1 {
              height: 6rpx;
              transform-origin: bottom;
              transform: rotate(45deg) translate(5px);
            }

            .hamburger-2 {
              transform-origin: top;
              transform: rotate(-45deg);
              height: 6rpx;
            }

            .hamburger-3 {
              height: 6rpx;
              transform-origin: bottom;
              transform: translate(8px, -6px) rotate(45deg);
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 425px) and (max-width:767px) {}

@include respondTo("desktop") {
  .app-pc-navigation {
    width: 100vw;
    height: 130rpx;
    background-color: #fff;
    border-bottom: solid 1px var(--el-menu-border-color);
    overflow: hidden;
    position: fixed;
    z-index: 8888;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;

    .app-menu {
      .el-menu-demo {
        border: none;
      }
    }

    .el-row {
      .el-col {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .app-logo {
        height: 100%;
        display: flex;
        justify-content: flex-start !important;
      }

    }
  }

  :deep(.el-menu) {
    .is-active {
      color: rgb(200, 20, 20) !important;
      border-bottom: 2px solid rgb(200, 20, 20) !important;
    }

    .el-sub-menu,
    .el-menu-item,
    .el-sub-menu__title {
      &:hover {
        background-color: rgb(240, 240, 240) !important;
        color: rgb(200, 20, 20) !important;
      }
    }

  }

  :deep(.el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title) {
    color: rgb(200, 20, 20) !important;
    border-bottom: rgb(200, 20, 20) !important;
  }
}
</style>
