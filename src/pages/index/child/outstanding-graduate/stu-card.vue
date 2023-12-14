<template>
    <el-row class="stu-card">
        <el-col :xs="8" :sm="8" class="image-wrapper">
            <el-image v-if="data.imgList" fit="cover" :src="data.imgList[0]" />
        </el-col>
        <el-col :xs="16" :sm="16" class="right-text">
            <view class="title">{{ data.title }}</view>
            <view class="line"></view>
            <view class="desc">
                <p ></p>
            </view>
            <view class="detail">查看详情<el-icon class="icon" style="vertical-align: middle">
                    <DArrowRight />
                </el-icon></view>
        </el-col>
    </el-row>
</template>
   
   
<script setup>
// 学生图片 展示
import { DArrowRight } from '@element-plus/icons-vue'
const $props = defineProps({
    data: {
        type: Object,
        default: () => { }
    }
})
</script>
   
   
<style scoped lang='scss'>

@include respondTo('mobile') {
    .stu-card {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        cursor: pointer;

        .image-wrapper {
            overflow: hidden;
            height: 300rpx;
            margin-bottom: 18rpx;

            .el-image {
                width: 100%;
                height: 100%;
            }

        }

        .right-text {
            width: 100%;
            box-sizing: border-box;
            padding-left: 20rpx;

            .title {
                display: flex;
                align-items: flex-start;
                font-size: 30rpx;
            }

            .line {
                height: 1rpx;
                width: 100%;
                background-color: #ccc;
                margin: 8rpx auto;
            }

            .desc {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                /* 省略号显示的行数 */
                overflow: hidden;
                text-overflow: ellipsis;
                color: #999;
                font-weight: normal;
                line-height: 46rpx;
                font-size: 28rpx;
            }

            .detail {
                color: rgb(200, 20, 20);
                font-size: 30rpx;
                font-weight: normal;

                .icon {
                    margin-bottom: 2rpx;
                    margin-left: 10rpx;
                    transition: all 1s;
                }
            }
        }
    }
}

@include respondTo ('desktop') {
    .stu-card {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        cursor: pointer;

        &:hover {
            .image-wrapper {
                .el-image {
                    transform: scale(1.1);
                }
            }

            .icon {
                transform: translateX(100%);
            }
        }

        .image-wrapper {
            overflow: hidden;

            .el-image {
                width: 480rpx;
                height: 100%;
                overflow: hidden;
                transition: all .5s;
            }

        }

        .right-text {
            width: 100%;
            box-sizing: border-box;
            padding-left: 60rpx;

            .title {
                display: flex;
                align-items: flex-start;
                font-size: 38rpx;
            }

            .line {
                height: 1rpx;
                width: 100%;
                background-color: #ccc;
                margin-top: 70rpx;
                margin-bottom: 20rpx;
            }

            .desc {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                /* 省略号显示的行数 */
                overflow: hidden;
                text-overflow: ellipsis;
                color: #999;
                font-weight: normal;
                line-height: 46rpx;
                font-size: 28rpx;
                p{
                    min-height: 100px;
                }
            }

            .detail {
                color: rgb(200, 20, 20);
                font-size: 30rpx;
                font-weight: normal;

                .icon {
                    margin-bottom: 2rpx;
                    margin-left: 10rpx;
                    transition: all 1s;
                }
            }
        }
    }
}</style>