<template>
  <view class="app-header">
    <el-row class="hidden-md-and-up" justify="space-between">
      <el-col class="app-logo" :xs="16" :sm="9">
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
    <view class="app-pc-navigation hidden-sm-and-down" :class="{ hidden: scrollValue <= 50 && UseMainStore.isIndex }">
      <el-row justify="space-around">
        <el-col class="app-logo" :sm="6" :md="8" :lg="8">
          <image mode="widthFix" src="../../static/logo.png" />
        </el-col>
        <el-col class="app-menu" :sm="18" :md="16" :lg="16">
          <el-menu :default-active="activeStr" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect" text-color="#333" active-text-color="rgb(200,20,20)" background-color="#fff">
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
import { MainStore } from "../../store";
const UseMainStore = MainStore();
// 仓库状态数据
import { StuInfoStore } from '@/store/modules/stu.js';
const UseStuInfoStore = StuInfoStore();
const $props = defineProps({
  i: {
    type: Number,
    default: 1
  },
  j: {
    type: Number,
    default: 0
  },
  scrollValue: {
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
const listData = UseMainStore.menuData
const $emits = defineEmits(["changeComponents"]);
const activeStr = ref("1")
const handleSelect = (key, keyPath) => {
  activeStr.value = key;
  console.log('header', key);
  switch (key) {
    case '3':
      PubSub.publish('index-teacher-event', { num: 0 })
      break;
    case '7':
      UseStuInfoStore.updateCurrentRouterIndex(0)
      break;
    default:
      break;
  }

  $emits("changeComponents", key);
};
PubSub.subscribe("changeActive", (msg, data) => {
  activeStr.value = data.index;
});
// watch(() => $props.scrollValue, (v) => {
//   // console.log(v <= 50, "@@@@@");
// })
</script>

<style scoped lang="scss">
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
      position: relative;
      background: linear-gradient(92deg, var(--Footer) 0%, var(--Footer-DEEP) 100%);

      .el-col {
        height: 100%;
        display: flex;

        justify-content: center;
        align-items: center;
      }

      .app-logo {
        width: 100%;
        height: 100rpx;
        box-sizing: border-box;

        image {
          width: 100%;
          padding-left: 8rpx;
          max-height: 90rpx;
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

@include respondTo("desktop") {

  .app-pc-navigation {
    width: 100vw;
    height: 130rpx;
    opacity: 1;
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

        .el-menu-item {
          background-color: #fff;
          &:hover {
            background-color: #e7e7e7c4;
          }
        }
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



}

.hidden {
  display: none !important;
  transition: all .8s;
  opacity: 0;
}
</style>
