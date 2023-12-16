<template>
  <view class="container">
    <template class="m-header">
      <AppPopup />
      <AppHeader />
    </template>
    <view class="container-content">
      <backgroundImg :img="img" />
      <view class="trans">
        <AppBreadcrumb :currentPageTxtArr="['教学实验室']" />
        <el-row justify="center">
          <el-col :xs="{ span: 24 }" :sm="{ span: 22 }" :md="{ span: 22 }" :xl="{ span: 18 }">
            <view class="title">教学实验室</view>
            <p class="line"></p>
            <view class="content">
              <el-aside class="hidden-md-and-up" width="100vw">
                <el-menu class="el-menu-vertical-demo" default-active="2" @open="handleOpen" @close="handleClose">
                  <template v-for="item, i in RoomData" :key="i">
                    <el-sub-menu v-if="item.room" :index="`${i + 1}`">
                      <template #title>
                        <span>{{ item.name }}</span>
                      </template>
                      <el-menu-item v-if="item.room" v-for="child, j in item.room" @tap="toogleIndex(`${i + 1}-${j + 1}`,child.type)"
                        :index="`${i + 1}-${j + 1}`">
                        <el-icon>
                          <location />
                        </el-icon>
                        {{ child.name }}</el-menu-item>
                    </el-sub-menu>
                    <el-menu-item v-else @tap="toogleIndex(`${i + 1}`)" :index="`${i + 1}`">
                      <template #title>{{ item.name }}</template>
                    </el-menu-item>
                  </template>
                </el-menu>
              </el-aside>
              <el-container>
                <el-aside class="hidden-sm-and-down" width="260px">
                  <el-menu active-text-color="#333" class="el-menu-vertical-demo" default-active="2" text-color="#999"
                    @open="handleOpen" @close="handleClose">
                    <template v-for="item, i in RoomData" :key="i">
                      <el-sub-menu v-if="item.room" :index="`${i + 1}`">
                        <template #title>
                          <span>{{ item.name }}</span>
                        </template>
                        <el-menu-item v-if="item.room" v-for="child, j in item.room" @tap="toogleIndex(`${i + 1}-${j + 1}`,child.type)"
                          :index="`${i + 1}-${j + 1}`">
                          <el-icon v-if="!child.type">
                            <location />
                          </el-icon>
                          <el-icon v-else>
                            <el-image style="transform: scale(.72);" :src="VrIcon"/>
                          </el-icon>
                          {{ child.name }}</el-menu-item>
                      </el-sub-menu>
                      <!-- <el-menu-item v-else @tap="toogleIndex(`${i + 1}`)" :index="`${i + 1}`">
                        <template #title>{{ item.name }}</template> 
                      </el-menu-item> -->
                    </template>
                  </el-menu>
                </el-aside>

                <el-container>
                  <el-header>
                    <text class="el-header-title">{{ RoomData[currentRoomIndex].name.split('.')[1] }}</text>
                    <text class="tip" v-if="currentRoomIndex == 3">双击场景进入全屏</text>
                  </el-header>
                  <el-main>
                    <Transition name="el-fade-in" mode="out-in">
                      <keep-alive>
                        <component :is="Rooms[currentRoomIndex][j]" />
                      </keep-alive>
                    </Transition>
                  </el-main>
                </el-container>
              </el-container>
            </view>
          </el-col>
        </el-row>
      </view>
    </view>
    <Footer class="footer" />
  </view>
</template>

<script setup>
import { ref } from 'vue'
import PubSub from "pubsub-js";
import ThreeLab from './three-lab.vue'
import PublicRoom from './public-room/public-room.vue'
import Xin426Room from './xin-426/xin-426-room.vue'
import Xin426Equ from './xin-426/xin-426-equ.vue'
import Xin207Room from './xin-207/xin-207-room.vue'
import Xin207Equ from './xin-207/xin-207-equ.vue'
import { onActivated } from 'vue'
// 背景图
import img from './image/bg.jpg'
import VrIcon from './image/vrIcon.png'
onActivated(() => {
  PubSub.publish('scroll-top', { data: true });
})

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
}
const handleClose = (key, keyPath) => {
}
// 实验室+设备照片数据
const RoomData = ref([
  {
    name: "1. 华为网络实验室（兴新426）",
    room: [{
      name: "实验室全景照片",
      dataList: []
    }, {
      name: "设备照片",
      dataList: []
    }, {
      name: 'VR全景',
      type:'VR',
      dataList: []
    }]
  },
  {
    name: "2. 多媒体云计算实验室（兴B207）",
    room: [{
      name: "实验室全景图",
      dataList: []
    }, {
      name: "服务器照片",
      dataList: []
    }, {
      name: 'VR全景',
      type:'VR'
    }],
  },
  {
    name: "3. 公共机房（兴B312）",
    room: [{
      name: "公共机房全景图",
      dataList: []
    }, {
      name: 'VR全景',
      type:'VR'
    }]
  },

])
const currentRoomIndex = ref(0)
const j = ref(0)
const toogleIndex = (index,type) => {
  //console.log("index", index,type);

  let numArr = index.split("-");
  if (numArr.length === 1) {
    currentRoomIndex.value = +index - 1;
    j.value = 0;
  } else {
    currentRoomIndex.value = +numArr[0] - 1;
    j.value = +numArr[1] - 1;
  }
  if(type === 'VR') {
    PubSub.publish('changeScene',{i:+numArr[0]-1})
  }
};
const Rooms = [
  [Xin426Room, Xin426Equ, ThreeLab],
  [Xin207Room, Xin207Equ, ThreeLab],
  [PublicRoom, ThreeLab],
]
</script>

<style scoped lang="scss">
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

    .el-container {
      height: 1300rpx;

      .el-aside {
        //background-color: #545c64;
        height: 100%;
      }

      .el-header,
      .el-main {
        box-sizing: border-box;
        padding: 10rpx 80rpx;
      }

      .el-header {
        display: flex;
        align-items: flex-start;
        justify-content: center;

        .el-header-title {
          font-size: 40rpx;
          font-weight: bold;
        }

        .tip {
          color: #999;
          font-size: 28rpx;
          margin-left: 40rpx;
        }
      }

      .el-main {
        background-color: rgb(255, 255, 255);
      }
    }
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
        transform: translateY(-100rpx);
      }

      .title {
        height: 80rpx;
        font-size: 70rpx;
      }

      .content {
        line-height: 50rpx;

        .el-container {
          height: fit-content;

          .el-aside {
            height: 100%;
          }

          .el-header,
          .el-main {
            box-sizing: border-box;
            padding: 0;
          }

          .el-header {
            display: flex;
            align-items: center;
            justify-content: center;

            .tip {
              color: #999;
              font-size: 28rpx;
              margin-left: 40rpx;
            }
          }

          .el-main {
            background-color: rgb(255, 255, 255);
          }
        }

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
    }
  }
}
</style>
