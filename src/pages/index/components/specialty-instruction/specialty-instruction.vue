<template>
    <view class="instruction">
        <view class="title" style="color: #fff;">专业介绍</view>
        <view class="title-e" style="color: #eee;">Specialty Instruction</view>
        <el-row :gutter="40">
            <el-col class="image-wrapper" :sm="9">
                <el-image fit="cover" src="../../../../static/banner-scholl.jpg" />
            </el-col>
            <el-col class="text-wrapper" :sm="15">
                <view class="title">网络工程</view>
                <p> 本专业是河北省一流本科专业建设点，通过学习信息技术和通信技术的基础理论，使学生具备网络工程设计的基本理念和综合素养，掌握现代信息网络的系统规划设计、维护管理、安全技术和应用开发相关的理论、知识、技能和方法，熟练运用核心网络的组网规划、软件部署、数据配置、测试验收、维护优化等技能，
                    具备网络工程领域内分析问题、解决问题以及创新思维等能力，培养能够承担信息网络系统设计、开发、部署、运行和维护等工作的应用型人才。
                </p>
                <el-button class="btn" @tap="pcNavgationTo('2')">了解更多</el-button>
            </el-col>
        </el-row>
    </view>
</template>
   
   
<script setup>
import PubSub from 'pubsub-js';
const pcNavgationTo = (e) => {
  PubSub.publish('navgation-event', { e, index: true })
};
</script>
   
   
<style scoped lang='scss'>
.instruction {
    width: 90vw;
    overflow: hidden;
    margin: 80rpx auto;
    padding: 20rpx 0;
    margin-bottom: 160rpx;

    .title {
        font-size: 64rpx;
        font-weight: bold;
        margin-bottom: 10rpx;
        color: #d00202 !important;
        text-align: center;
    }

    .title-e {
        color: #999 !important;
        font-size: 48rpx;
        margin-bottom: 100rpx;
        text-align: center;
    }

    .el-row {
        height: 100%;
        width: 100%;

        .image-wrapper {
            height: 100%;
            width: 100%;

            .el-image {
                height: 100%;
                width: 100%;
            }
        }

        .text-wrapper {
            text-align: justify;
            line-height: 60rpx;

            .title {
                font-size: 38rpx;
                font-weight: bold;
                margin-bottom: 10rpx;
                color: #333 !important;
                text-align: start;
            }

            .title-e {
                color: #999;
                font-size: 48rpx;
                margin-bottom: 30rpx;
            }

            p {
                margin-top: 30rpx;
            }
.btn{
    float: right;
    margin-top: 100px;
}   
        }
    }

}</style>