<template>
    <view class="app-top-banner hidden-sm-and-down">
        <!-- <el-image src="../../static/banner-logo.png"  /> -->
        <view class="animated-banner" ref="banner">
            <!-- 背景 -->
            <view class="layer">
                <img class="bg" src="../../static/animate-banner/banner-far.webp" />
            </view>
            <!-- 8.草地 -->
            <view class="layer">
                <img class="ground" ref="ground" src="../../static/animate-banner/ground.webp" />
            </view>
            <!-- 小孩拿着的树叶 -->
            <view class="layer">
                <img class="shuye" ref="shuye" src="../../static/animate-banner/shuye.webp" />
            </view>
            <!-- 小女孩 -->
            <view class="layer">
                <img class="girl" ref="girl" src="../../static/animate-banner/girl.webp" />
            </view>

            <!-- 4.左侧大树 -->
            <view class="layer">
                <img class="leftTree" ref="leftTree" src="../../static/animate-banner/leftTree.webp" />
            </view>
            <!-- 5.右侧大树 -->
            <view class="layer">
                <img class="bigTree" ref="bigTree" src="../../static/animate-banner/bigTree.webp" />
            </view>
            <!-- 松鼠 -->
            <view class="layer">
                <img class="songshu" ref="songshu" src="../../static/animate-banner/songshu.webp" />
            </view>
            <!-- 6.右侧草丛 -->
            <view class="layer">
                <img class="tree01" ref="tree01" src="../../static/animate-banner/tree01.webp" />
            </view>
            <!-- 7.女孩2号 -->
            <view class="layer">
                <img class="gril2" ref="gril2" src="../../static/animate-banner/gril2.webp" />
            </view>

        </view>
        <!-- navgation -->
        <el-row class="navgation" justify="end">
            <!-- <el-col class="logo" :sm="8"> -->
            <!-- <el-image src="../../static/animate-banner/wl-logo.jpeg"/> -->
            <!-- </el-col> -->
            <el-menu :default-active="'1'" mode="horizontal" :ellipsis="false"
                @select="handleSelect" background-color="transparent" text-color="#fff" active-text-color="#fff" style="border:none;">
                <template v-for="item in UseMainStore.menuData" :key="item.title">
                    <el-menu-item v-if="!item.children" :index="item.name">{{
                        item.title
                    }}</el-menu-item>
                    <!-- 二级菜单 -->
                    <el-sub-menu v-else :index="item.name" :key="item.title">
                        <template #title>{{ item.title }}</template>
                        <el-menu-item  v-for="c in item.children" :key="c.title" :index="c.name">{{ c.title
                        }}</el-menu-item>
                    </el-sub-menu>
                </template>
            </el-menu>
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
const girl = ref(null)
const shuye = ref(null)
const tree01 = ref(null)
const leftTree = ref(null)
const bigTree = ref(null)
const gril2 = ref(null)
const ground = ref(null)
const songshu = ref(null)
let i = 0
let disX = 0
let layers = null
watch([x, y], (v) => {
    layers = banner.value.$el.children
    const x = v[0]
    const y = v[1]
    if (y > 150) {
        if (i != 0) {
            Array.from(layers).forEach(element => {
                element.children[0].style.transition = 'all .5s'
            });
        }
        i = 0;
        girl.value.style.transform = `translate(-200px, 20px) rotate(0deg) scale(1)`
        gril2.value.style.transform = `translate(200px, 20px) rotate(0deg) scale(1)`
        tree01.value.style.transform = `translate(800px, 30px) rotate(0deg) scale(1)`
        shuye.value.style.transform = `translate(-165px, 0px) rotate(40deg) scale(1)`
        leftTree.value.style.transform = `translate(-820px, 30px) rotate(0deg) scale(1)`
        bigTree.value.style.transform = `translate(750px, 0px) rotate(0deg) scale(1.3)`
        ground.value.style.transform = `translate(-55px, 22px) rotate(0deg) scale(1)`
        songshu.value.style.transform = `translate(900px, 45px) rotate(0deg) scale(1)`

        return
    } else {
        if (i === 0) {
            // console.log(i);
            Array.from(layers).forEach(element => {
                element.children[0].style.transition = 'all 0s'
            });
        }
        i === 0 ? (i = x) : i;
        disX = x - i;
        girl.value.style.transform = `translate(-${200 + disX / 8}px, 20px) rotate(0deg) scale(1)`
        gril2.value.style.transform = `translate(${200 - disX / 8}px, 20px) rotate(0deg) scale(1)`
        shuye.value.style.transform = `translate(-${165 + disX / 8}px, 0px) rotate(40deg) scale(1)`
        tree01.value.style.transform = `translate(${800 - disX / 5}px, 30px) rotate(0deg) scale(1)`
        leftTree.value.style.transform = `translate(-${820 + disX / 20}px, 30px) rotate(0deg) scale(1)`
        bigTree.value.style.transform = `translate(${750 - disX / 20}px, 0px) rotate(0deg) scale(1.3)`
        ground.value.style.transform = `translate(-${55 + disX / 50}px, 22px) rotate(0deg) scale(1)`
        songshu.value.style.transform = `translate(${900 + disX / 20}px, ${45 + disX / 15}px) rotate(0deg) scale(1)`
    }
})

// 菜单点击事件..
const handleSelect = (name) => {
    console.log(name);
    PubSub.publish('navgation-event',{e:name})
}

</script>
   
   
<style scoped lang='scss'>

@include respondTo('desktop') {

    .app-top-banner {
        height: 160px;
        background-color: #fff;
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
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                img {}
            }

            .bg {
                height: 160px;
                width: 1920px;
                opacity: 1;
            }

            .shuye {
                height: 180px;
                width: 184px;
                opacity: 1;
            }

            .gril {
                height: 123px;
                width: 140px;
                opacity: 1;
            }

            .leftTree {
                height: 230px;
                width: 400px;
                opacity: 1;
            }

            .bigTree {
                height: 150px;
                width: 400px;
                opacity: 1;
            }

            .tree01 {
                height: 100px;
                width: 400px;
                opacity: 1;
            }

            .gril2 {
                height: 131px px;
                width: 200px;
                opacity: 1;
            }

            .ground {
                height: 148.5px;
                width: 100vwpx;
                opacity: 1;
            }

            .songshu {
                height: 97.5px;
                width: 132px;
                transform: translate(750px, 45px) rotate(0deg) scale(1);
            }
        }
    }

    .navgation {
        position: absolute;
        top: 0;
        left: 0;
        height: 160px;
        width: 100%;
        background: linear-gradient(to bottom, #00000086 0%, #00000000 50%);
        box-sizing: border-box;
        padding: 0 200px;
        .logo {
            .el-image {
                height: 150px;
            }
        }
        .el-menu{
           .el-menu-item{
            border-bottom: none;
            &:hover {
                background-color:transparent;
                animation: jump 0.4s;
            }
            @keyframes jump {
                to{
                    transform: translateY(-10px);
                }
                from{
                    transform: translateY(0px);

                }
            }
           }
        }
    }
}
</style>