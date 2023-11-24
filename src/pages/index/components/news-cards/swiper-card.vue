<template>
    <Swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper swiper">
        <SwiperSlide class="swiper-slide" v-for="item in dataArray" :key="item.img">
            <el-card :body-style="{ padding: '0px' }">
                <el-image fit="fill" :src="item.img" />
                <view v-if="!item.label" style="padding: 6px">
                    <view class="card-title">{{ item.title }}</view>
                    <view class="bottom">
                        <view class="desc">{{ item.desc }}</view>
                        <view class="time">日期：{{ item.time }}</view>
                        <el-button size="small" class="button">详情</el-button>
                    </view>
                </view>
            </el-card>
            </SwiperSlide>
    </Swiper>
</template>
   
   
<script setup>
   // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';
const modules = [EffectCards];

defineProps({
    dataArray: {
        type: Array,
        default: () => []
    }
})
</script>
   
   
<style scoped lang='scss'>
@import '../../../../style.scss';
.swiper {
    width: 480rpx;
    height: fit-content;
    margin-bottom: 30rpx;
}
.swiper-slide {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: 18px;
    color: #fff;
    border: 2rpx solid #d1d1d1;
    border-radius: 14rpx !important;
    box-sizing: border-box;
    margin-top: 40rpx;
    .el-card {
        height: 640rpx;
        position: relative;
        width: 480rpx;
        .card-title {
            font-size: 32rpx;
            font-weight: bold;
            color: #333;
            /* 显示三行文字，超出部分用省略号表示 */
            display: -webkit-box;
            /* 带有-webkit-前缀的属性是针对 WebKit 内核浏览器的 */
            -webkit-line-clamp: 2;
            /* 限制显示三行 */
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 10rpx 0;
        }

        .desc {
            color: #666;
            font-size: 30rpx;
            /* 显示三行文字，超出部分用省略号表示 */
            display: -webkit-box;
            /* 带有-webkit-前缀的属性是针对 WebKit 内核浏览器的 */
            -webkit-line-clamp: 3;
            /* 限制显示三行 */
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            box-sizing: border-box;
            margin-top: 20rpx;
        }

        .time {
            color: #999;
            font-size: 28rpx;
            margin-top: 40rpx;
        }

        .el-button {
            position: absolute;
            bottom: 5rpx;
            right: 5rpx;
        }
    }
}

</style>