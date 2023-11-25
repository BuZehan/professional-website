<template>
    <el-row class="stu-card">
        <el-col :xs="8" :sm="8" class="image-wrapper">
            <el-image fit="cover" :src="stu_img" />
        </el-col>
        <el-col :xs="16" :sm="16" class="right-text">
            <view class="title">斯泽夫学长在清华经管学院2021毕业典礼演讲</view>
            <view class="line"></view>
            <view class="desc">
                登上大舞台融入新格局——在清华经管学院2021毕业典礼上的演讲全国政协常委，哈电集团董事长、党委书记斯泽夫2021年6月27日斯泽夫各位敬爱的老师、亲爱的同学们：大家下午好！我是斯泽夫，清华经管学院93级校友，很高兴作为今年毕业典礼的主讲嘉宾在这里跟大家分享我的观点。我学经济管理何为“经管”，我认为就是“经世济民，求社会之功；管财理家，谋大众之利”，1993年当我来到清华经管学院的时候，正是秉持着这样的理念，我...
            </view>
            <view class="detail">查看详情<el-icon class="icon" style="vertical-align: middle">
                    <DArrowRight />
                </el-icon></view>
        </el-col>
    </el-row>
</template>
   
   
<script setup>
//    学生图片 展示
import stu_img from '@/pages/index/components/outstanding-graduate/image/21-17-bk-hhy/1.jpg'
import { DArrowRight } from '@element-plus/icons-vue'

</script>
   
   
<style scoped lang='scss'>
@import '@/style.scss';
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
@include respondTo ('desktop'){
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
            .icon{
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
</style>