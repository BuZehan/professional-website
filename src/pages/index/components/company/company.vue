<template>
    <view class="wrapper">
        <el-row justify="center">
            <el-col   :xs="11" :sm="8" v-for="item,i in companyArr" :key="item.name" >
                <view v-showMeta="i % 2 === 0 ?`animate__fadeInLeft` : `animate__fadeInRight`" class="company-container">
                    <el-image :src="item.path" @tap="companyJump(i+1)" class="my_img" :class="{ h3c: item.name === 'h3c', trx: item.name === 'trx' }" fill="fill" />
                </view>
            </el-col>
        </el-row>
    </view>
</template>
   
   
<script setup>
import PubSub from 'pubsub-js';

defineProps({
    companyArr: {
        type: Array,
        default: []
    }
})
const companyJump = (i) => {
    PubSub.publish('navgation-event', {e:`6-${i}`})
}
</script>
   
   
<style scoped lang='scss'>

@include respondTo('mobile') {
    .wrapper {
        width: 100vw;
        .el-col {
            display: flex;
            align-items: center;
            justify-content: center;
            .company-container {
                width:300rpx;
                height: 150rpx;
                border-radius: 8rpx;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                border: 1px solid #cccccc8f;
                transition: all .4s;
                margin: 20rpx 0;
                background-color: #fff;
                .my_img {
                    transform: scale(.8);
                }
            }
        }

        .h3c {
            transform: scale(.5) !important;
        }
        .trx{
            transform: scale(.85) !important;
        }
    }
}

@include respondTo('desktop') {
    .wrapper {
        width: 70vw;
        max-width: 1200px;
        .el-col {
            display: flex;
            align-items: center;
            justify-content: center;

            .company-container {
                width: 500rpx;
                height: 300rpx;
                border-radius: 8rpx;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                border: 1px solid #cccccc8f;
                transition: all .4s;
                margin: 40rpx 0;

                &:hover {
                    box-shadow: 0 0 60rpx 0 #33333346;
                }

                .my_img {
                    transform: scale(.7);
                }
            }
        }

        .h3c {
            transform: scale(.5) !important;
        }
        .trx{
            transform: scale(1.1) !important;
        }
    }
}

@include respondTo('pad') {
    .wrapper{
        width: 90vw;
    }
  }
</style>