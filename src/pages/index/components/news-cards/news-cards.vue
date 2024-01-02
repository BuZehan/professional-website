<template>
    <view class="new-cards-container">
        <!-- 获奖证书组件 -->
        <view class="menu">
            <view class="menu-item" v-for="(item, index) in menuArr" :key="index" @click="i = index">
                <view class="text">{{ item }}</view>
                <view class="btm-line" :class="{ active: index === i }"></view>
            </view>
        </view>
        <el-divider border-style="dotted" />
        <!-- 滑动组件--移动端 -->
        <view class="Swiper-Container">
            <transition name="el-fade-in" mode="out-in">
                <keep-alive>
                    <component :is="components[i]" />
                </keep-alive>
            </transition>
        </view>
    </view>
</template>
   
   
<script setup>
import { ref } from 'vue'
// 组件
import NewsCardsCollege from "./news-cards-college.vue"
import NewsCardStu from "./news-cards-stu.vue"
import NewsCardsTeacher from './news-cards-teacher.vue';
const components = [NewsCardsCollege,NewsCardsTeacher, NewsCardStu]

// 菜单数据
const i = ref(0)
const menuArr = ['获奖', '教师证书','学生证书']

</script>
   
   
<style scoped lang='scss'>

.el-divider {
    margin: 0;
}

.menu {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    height: 80rpx;
    width: 100vw;
    margin: 0 auto;

    .menu-item {
        padding: 10rpx 20rpx;
        color: #666;
        cursor: pointer;

        .btm-line {
            height: 6rpx;
            width: 100%;
            border-radius: 20rpx;
            margin-top: 4rpx;
            transition: all .4s;
        }

        .active {
            background-color: #d00202c9;
        }
    }

}
.Swiper-Container{
    height: fit-content;
}



@include respondTo('desktop') {
    .new-cards-container {
        .menu {
            width: 72vw;
            max-width: 1200px;
            margin: 0 auto;
        }
    }
}
</style>