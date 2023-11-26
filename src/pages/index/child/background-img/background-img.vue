<template>
    <view class="bg-img-wrapper" v-if="imgType === 'string'">
        <el-image :src="img" fit="cover" />
    </view>
    <view v-else-if="imgType === 'array'">
        <swiper class="swiper" autoplay :interval="3000" circular easing-function="easeInCubic">
            <swiper-item v-for="(_img, index) in img" :key="index">
                <el-image fit="cover" :src="_img" />
            </swiper-item>
        </swiper>
    </view>
    <view class="bg-img-wrapper" v-else></view>
</template>
   
   
<script setup>
import { ref, onMounted, computed } from 'vue'
const $props = defineProps({
    img: {
        type: [String, Array],
        default: ''
    }
})
const imgType = computed(() => {
    return typeof $props.img === 'string' ? $props.img.length > 0 ? 'string' : '' : 'array'
})
</script>
   
   
<style scoped lang='scss'>
@import '@/style.scss';

.bg-img-wrapper {
    width: 100vw;
    max-width: 1920px;
    margin: 0 auto;
    height: 400px;
    background: url('../../../../static/backgroundImg.jpg') no-repeat center bottom;
    background-size: cover;

    .el-image {
        width: 100vw;
        max-width: 1920px;
        background-size: cover;
        height: 400px;
    }
}

.swiper {
    height: 400px;

    .el-image {
        width: 100vw;
        max-width: 1920px;
        background-size: cover;
        height: 400px;
    }
}

@include respondTo('mobile') {

    .bg-img-wrapper,
    .el-image {
        height: 340rpx !important;
    }
}
</style>