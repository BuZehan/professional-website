<template>
    <view class="app-top-banner hidden-sm-and-down">
        <!-- <el-image src="../../static/banner-logo.png"  /> -->
        <view class="animated-banner" ref="banner">
            <!-- WIFI -->
            <view class="layer">
                <img class="logo-wifi" ref="logoWifi" src="../../static/animate-banner/cloud1.png" />
            </view>
            <!-- IP is Everything -->
            <!-- <view class="layer">
                <img class="logo-IP" ref="logoIP" src="../../static/animate-banner/logo-IP.png" />
            </view> -->
        </view>
        <!-- navgation -->
        <el-row class="navgation" justify="center">
            <el-col class="logo" :md="24" :lg="8">
                <el-row>
                    <el-col>
                        <el-image src="../../static/animate-banner/logo.png" />
                    </el-col>
                    <el-col>
                        <el-image src="../../static/animate-banner/logo-IP.png" />
                    </el-col>
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
import PubSub from "pubsub-js";
import { MainStore } from "../../store";
const UseMainStore = MainStore();
import { useMouse } from '@/hooks'
import { watch, ref } from 'vue'
const { x, y } = useMouse()
const banner = ref(null)

let i = 0
let disX = 0
let layers = null
const logoWifi = ref('logoWifi')
const logoIP = ref('logoIP')
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
        logoWifi.value.style.transform = `translate(-350px,-75px) rotate(0deg) scale(.7)`
        // logoIP.value.style.transform = `translate(0, 45px) rotate(0deg) scale(1)`
        return
    } else {
        if (i === 0) {
            Array.from(layers).forEach(element => {
                element.children[0].style.transition = 'all 0s'
            });
        }
        i === 0 ? (i = x) : i;
        disX = x - i;
        logoWifi.value.style.transform = `translate(${-350 + disX / 12}px, -75px) rotate(0deg) scale(.7)`
        // logoIP.value.style.transform = `translate(-${20 + disX / 20}%, 45px) rotate(0deg) scale(1)`
    }
})

// 菜单点击事件
const handleSelect = (name) => {
    PubSub.publish('navgation-event', { e: name })
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
        background-color: #8f000b;
        width: 100vw;
        position: relative;
        overflow: hidden;
        max-width: 1920px;
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

                .logo-wifi {
                    width: 50px;
                    height: 50px;
                }

                .logo-IP {
                    width: 400px;
                    height: 50px;
                    //transform: translate(800px, -50px) rotate(0deg) scale(.8);
                }
            }


        }
    }

    .navgation {
        position: absolute;
        top: 0;
        left: 0;
        height: v-bind(area);
        width: 100%;
        //background: linear-gradient(to bottom, #00000086 0%, #00000000 50%);
        box-sizing: border-box;
        padding: 0 200px;
        z-index: 50;

        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            transform: scale(0.8) translateY(0);
            transform-origin: left center;
            .el-row {
                .el-col {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    height: fit-content;
                    margin-top: 8px;
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
        }
    }
}</style>