<template>
    <view class="app-top-banner hidden-sm-and-down">
        <!-- <el-image src="../../static/banner-logo.png"  /> -->
        <view class="animated-banner" ref="banner">
            <!-- WIFI -->
            <!-- <view class="layer">
                <img class="logo-start" ref="logoStart" src="../../static/animate-banner/yuan.png" />
            </view> -->
            <!-- <view class="layer">
                <img class="logo-fk" ref="logoFk" src="../../static/animate-banner/fk.png" />
            </view> -->
            <!-- IP is Everything -->
            <!-- <view class="layer">
                <img class="logo-IP" ref="logoIP" src="../../static/animate-banner/logo-IP.png" />
            </view> -->
            <!-- <view class="layer">
                <img class="logo-lx" ref="logoLx2" src="../../static/animate-banner/lx.png" />
            </view>
              <view class="layer">
                <img class="logo-lx" ref="logoLx" src="../../static/animate-banner/lx.png" />
            </view>
            <view class="layer">
                <img class="logo-lx" ref="logoLx1" src="../../static/animate-banner/lx.png" />
            </view> -->

        </view>
        <!-- navgation -->
        <el-row class="navgation" justify="center">
            <el-col class="logo" :md="24" :lg="8">
                <el-row>
                    <el-col>
                        <el-image :src="logo" />
                    </el-col>
                    <!-- <el-col>
                        <el-image src="../../static/animate-banner/logo-IP.png" />
                    </el-col> -->
                </el-row>
            </el-col>
            <el-col class="menu" :md="24" :lg="16">
                <el-menu :default-active="'1'" mode="horizontal" :ellipsis="false" @select="handleSelect"
                    background-color="transparent" text-color="#fff" active-text-color="#fff" style="border:none;">
                    <template v-for="item in UseMainStore.menuData" :key="item.title">
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
</template>
   
   
<script setup>
import { ref, onBeforeUnmount, watch } from "vue";
import PubSub from "pubsub-js";
import { MainStore } from "../../store";
import { WebDataStore } from '@/store/modules/web.js';
const UseWebDataStore = WebDataStore()
const UseMainStore = MainStore();
// 仓库状态数据
import { StuInfoStore } from '@/store/modules/stu.js';
const UseStuInfoStore = StuInfoStore();
import { useMouse } from '@/hooks'
const { x, y } = useMouse()
const banner = ref(null)

import logo from '../../static/animate-banner/banner-fm1-logo.png'
let i = 0
let disX = 0
let layers = null
const logoStart = ref(null)
const logoLx = ref(null)
const logoLx1 = ref(null)
const logoLx2 = ref(null)
// const logoIP = ref('logoIP')
const area = '120px'
watch([x, y], (v) => {
    layers = banner.value.$el.children
    const x = v[0]
    const y = v[1]
    let j = +area.replace(/[a-zA-Z]/g, "").substring(area.length - 2, -2);
    if (y > j) {
        if (i != 0) {
            Array.from(layers).forEach(element => {
                element.children[0].style.transition = 'all .5s'
            });
        }
        i = 0;
        // logoStart.value.style.transform = `translate(500px,150px) rotate(0deg) scale(0.7) rotate(0deg)`
        // logoStart.value.style.opacity = 0.5
        // logoLx.value.style.transform = `translate(0px, 100px) rotate(0deg) scale(.3)`
        // logoLx.value.style.opacity = 0.5
        // logoLx1.value.style.transform = `translate(-100px, 80px) rotate(0deg) scale(.2)`
        // logoLx2.value.style.transform = `translate(50px, 80px) rotate(0deg) scale(.12)`
        return
    } else {
        if (i === 0) {
            Array.from(layers).forEach(element => {
                element.children[0].style.transition = 'all 0s'
            });
        }
        i === 0 ? (i = x) : i;
        disX = x - i;
        // logoStart.value.style.transform = `translate(${500 - disX / 10}px, 150px) rotate(0deg) scale(0.7) rotate(0deg)`
        // logoLx.value.style.transform = `translate(${0 + disX / 15}px,${100 + disX / 20}px) rotate(0deg) scale(0.3)`
        // logoLx.value.style.opacity = 0.5 +  disX / 1200

        // logoLx1.value.style.transform = `translate(${-100 + disX / 18}px,${80 + disX / 25}px) rotate(0deg) scale(0.2)`
        // logoLx2.value.style.transform = `translate(${50 + disX / 18}px,${80 + disX / 35}px) rotate(0deg) scale(0.12)`
    }
})

// 菜单点击事件
const handleSelect = (key, keyPath) => {
    switch (key) {
        case '3':
            PubSub.publish('index-teacher-event', { num: 0 })
            break;
        case '7':
            UseStuInfoStore.updateCurrentRouterIndex(0)
            break;
        case '8':
            UseWebDataStore.SetNewsDataIndex(0)
            UseWebDataStore.SetNewsDetailIndex([1, 0])
            break;
        default:
            break;
    }
    PubSub.publish('navgation-event', { e: key })
}

// &::before{
//                 content: "";
//                 position: absolute;
//                 width: 263px;
//                 height: 151px;
//                 z-index: -1;
//                 left: 0;
//                 background: url('../../static/server.png') no-repeat center / cover;
//                 background-image: linear-gradient(to left,rgb(139, 0, 0),rgba(255,255,255,0)),url('../../static/animate-banner/server.png');
//             }
</script>
   
   
<style scoped lang='scss'>
@include respondTo('desktop') {
    .app-top-banner {
        height: v-bind(area);
        background-color: var(--MAIN);
        width: 100vw;
        position: relative;
        overflow: hidden;
        margin: 0 auto;

        .animated-banner {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: hidden;

            .layer {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: flex-end;
                justify-content: center;

                .logo-start {
                    opacity: 0.5;
                    transition: all .5s;
                    transform: translate(500px, 150px) rotate(0deg) scale(0.7) rotate(0deg);
                }

                .logo-lx {
                    opacity: 0.7;
                }

                .logo-lx {
                    opacity: 0.7;
                }

                .logo-lx {
                    opacity: 0.7;
                }
            }


        }
    }

    .navgation {
        position: absolute;
        top: 0;
        height: v-bind(area);
        width: 100%;
        //background: linear-gradient(to bottom, #00000086 0%, #00000000 50%);
        box-sizing: border-box;
        padding: 0 200px;
        z-index: 50;
        max-width: 1920px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;

        .logo {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            transform: scale(1) translateY(0);
            transform-origin: left center;

            .el-row {
                .el-col {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: fit-content;
                }
            }

            .el-image {}
        }

        .menu {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            position: relative;

        }

        .el-menu {
            width: 100%;
            display: flex;
            justify-content: space-around;

            .el-menu-item {
                border-bottom: none;
                width: calc(100% / 8);
                min-width: 70px;
                max-width: 80px;

                &:hover {
                    background-color: transparent;
                    animation: jump 0.4s;
                }

                @keyframes jump {
                    to {
                        transform: translateY(-10px);
                    }

                    from {
                        transform: translateY(0px);

                    }
                }
            }
        }

        @media screen and (min-width: 1200px) {
            .el-menu {
                justify-content: flex-end;
            }
        }

        @media screen and (max-width:1199px) {
            .el-menu {
                transform: translateY(-15px);
            }

            .logo {
                transform-origin: center center;
                height: 85px;
                justify-content: center;
            }
        }
    }
}</style>