<template>
    <view class="stu-show">
        <el-row justify="space-between">
            <el-col v-showMeta="i % 2 === 0 ? `animate__fadeInRight` : `animate__fadeInLeft`" @tap="goToDetail(i)" :xs="24" :sm="{span:11,offset:1}" :md="{span:12,offset:0}" v-for="i in 5" :class="i % 2 === 1 ? 'el-col-border' : ''" :key="i">
                <StuCard />
            </el-col>
        </el-row>
    </view>
</template>
   
   
<script setup>
import PubSub from 'pubsub-js';
import StuCard from './stu-card.vue';
const goToDetail = (i) => {
    console.log(i);
    PubSub.publish('stu-click-event',{v:1})
}
</script>
   
   
<style scoped lang='scss'>
@import '@/style.scss';

.stu-show {
    box-sizing: border-box;
    width: 100%;
    height: fit-content;
    text-indent: 0 !important;

    .el-row {
        height: 100%;

        .el-col {
            box-sizing: border-box;
            padding: 0 30rpx;
            padding-bottom: 80rpx;
        }

        .el-col-border {
            border-right: 1rpx solid #aaa;
        }
    }
}
@include respondTo('mobile') {
    
.stu-show {
    .el-row {
        .el-col {
            box-sizing: border-box;
            padding: 0 ;
            padding-bottom: 40rpx;
        }
        .el-col-border {
            border-right: none;
        }
    }
}
}
</style>