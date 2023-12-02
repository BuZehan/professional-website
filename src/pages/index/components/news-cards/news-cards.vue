<template>
    <view class="new-cards-container">
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
import NewsCardsCollege from "./news-cards-college.vue"
import NewsCardStu from "./news-cards-stu.vue"
import NewsCardsTeacher from './news-cards-teacher.vue';
const components = [NewsCardsCollege,NewsCardsTeacher, NewsCardStu]

// 菜单
const i = ref(0)
const menuArr = ['获奖', '教师证书','学生证书']
const cardNum = ref(8)
// 分页
const currentPage3 = ref(8)
const pageSize3 = ref(100)
const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}
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