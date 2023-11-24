<template>
    <view class="bg-img-wrapper"  v-if="img" >
        <el-image :src="img" fit="cover" />
    </view>
    <view class="bg-img-wrapper" v-else></view>
</template>
   
   
<script setup>
   defineProps({
    img:{
        type:String,
        default:''
    }
   })
</script>
   
   
<style scoped lang='scss'>
@import '@/style.scss';
   .bg-img-wrapper{
    width: 100vw;
    max-width: 1920px;
    margin: 0 auto;
    height: 400px;
    background: url('../../../../static/backgroundImg.jpg') no-repeat center bottom ;
    background-size: cover;
    .el-image{
        width: 100vw;
        max-width: 1920px;
        background-size: cover;
        height: 400px;
    }
}
@include respondTo('mobile') {
    .bg-img-wrapper,.el-image{
        height: 340rpx !important;
    }
}
</style>