<template>
    <view class="wrapper">
        <el-row justify="center">
            <el-col :xs="11" :sm="8" v-for="item, i in companyArr" :key="item.name">
                <!-- PC端 -->
                <view v-if="IsPC" v-showMeta="i % 2 === 0 ? `animate__fadeInLeft` : `animate__fadeInRight`"
                    class="company-container" @tap="companyJump(i + 1)">
                    <el-image :src="item.path"  class="my_img"
                        :class="{ h3c: item.name === 'h3c', trx: item.name === 'trx' }" fill="fill" />
                </view>
                <!-- 移动端 -->
                <view v-else v-showMeta="i % 2 === 0 ? `animate__fadeInLeft` : `animate__fadeInRight`"
                    class="company-container"  @tap="companyJumpForMobile(i + 1)">
                    <el-image :src="item.path" class="my_img"
                        :class="{ h3c: item.name === 'h3c', trx: item.name === 'trx' }" fill="fill" />
                </view>
            </el-col>
        </el-row>
    </view>
</template>
   
   
<script setup>
import PubSub from 'pubsub-js';
import { uni } from '@dcloudio/uni-h5';
import { IsPC } from '@/hooks'
defineProps({
    companyArr: {
        type: Array,
        default: []
    }
})
const companyJump = (i) => {
    console.log(i, "pc跳转");
    PubSub.publish('navgation-event', { e: `6-${i}` })
}
// 移动端跳转
const companyJumpForMobile = (i) => {
    console.log('###', i);
    switch (i) {
        case 1:
            jumpForM(`/pages/index/child/enterprise/huawei`)
            break;
        case 2:
            jumpForM(`/pages/index/child/enterprise/xin-xiang-hong-fu`)
            break;
        case 3:
            jumpForM('/pages/index/child/enterprise/h3c')
            break;
        case 4:
            jumpForM('/pages/index/child/enterprise/hao-jing-technology')
            break;
        case 5:
            jumpForM('/pages/index/child/enterprise/tian-rong-xin')
            break;
        case 6:
            jumpForM('/pages/index/child/enterprise/zhong-jing')
            break;
        default:
            break;
    }
}
const jumpForM = (url) => {
    uni.navigateTo({
        url
    })
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
                width: 300rpx;
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

        .trx {
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

        .trx {
            transform: scale(1.1) !important;
        }
    }
}

@include respondTo('pad') {
    .wrapper {
        width: 90vw;
    }
}
</style>