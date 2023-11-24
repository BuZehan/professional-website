<template>
    <view class="news-detail" ref="target">
        <template class="m-header hidden-md-and-up">
            <AppPopup />
            <AppHeader />
        </template>
        <el-row justify="center">
            <el-col class="title" :xs="22" :md="24">{{ newsData.title }}</el-col>
            <el-col class="time" :xs="22" :md="24"><el-icon :size="20" color="rgb(200,20,20)">
                    <Clock />
                </el-icon>{{ newsData.time }}</el-col>
            <el-col class="content" :xs="22" :md="24" v-for="c in newsData.content">
                <el-image v-if="c == 'img'" :src="newsData.imgUrl" fit="cover" />
                <p v-else>{{ c }}</p>
            </el-col>
        </el-row>
        <Footer class="hidden-md-and-up"/>
    </view>
</template>
   
   
<script setup>
import { Clock } from '@element-plus/icons-vue'
import {onActivated,ref,onMounted,nextTick} from 'vue'
import PubSub from 'pubsub-js';
import AppHeader from "@/components/app-header/app-header.vue";
import AppPopup from "@/components/app-popup/app-popup.vue";
import Footer from '@/components/app-footer/app-footer.vue'
import { onShow } from '@dcloudio/uni-app';
const newsData = {
    title: '网络专业学生积极参与2023年华为ICT大赛',
    time: '2023-11-21',
    imgUrl: 'https://test.hebic.cn/uploadfile/2023/1121/20231121085353148.jpg',
    content: [
        '2023年11月18日，我校兴安校区举办了“华为中国大学生ICT大赛2023-2024”河北省初赛，共有229名网络工程专',
        '当天上午10点，由王雷老师组织，229名网络工程专业学生参加了华为公司主办的2023年中国大学生ICT大赛河北省初赛。华为ICT大赛旨在为全球大学生打造ICT人才竞技交流赛事，提供国际化的学习平台，提升学生的ICT知识水平，并加强他们的实践动手能力以及运用新技术、新平台的创新创造能力。目前，华为ICT大赛已经成为中国高等教育学会认可的含金量高、参赛价值大的竞赛项目之一，纳入了全国普通高校大学生竞赛排行榜内竞赛项目名单。',
        'img',
        '网络工程专业一直秉承“以赛促教、以赛促学、以赛促发展”的理念，积极组织学生参加各种专业大赛，以促进专业的发展。'
    ]
}

// 页面滚动
onActivated(() => {
    PubSub.publish('scroll-top',{
    data:true
})  
})
const target = ref(null)
onMounted(() => {
   nextTick(() => {
 

   })
})
</script>
   
   
<style scoped lang='scss'>
@import '@/style.scss';


@include respondTo('mobile') {
    .news-detail {
        font-weight: normal;
        text-indent: 0 !important;
        position: relative;
        overflow: hidden;
        height: 100vh;
        overflow-y: scroll;
            .m-header {
            display: block;
            position: fixed;
            top: 0;
            z-index: 5000;
        }

        .title {
            margin-top: 140rpx;
            text-align: center;
            font-size: 40rpx;
            font-weight: bold;
        }

        .time {
            color: #999;
            font-size: 28rpx;
            display: flex;
            align-items: center;
            margin: 20rpx 0;

            .el-icon {
                margin-right: 10rpx;
            }
        }

        .content {
            display: flex;
            align-items: center;
            justify-content: center;
            p {
                text-indent: 70rpx;
            }

            .el-image {
                height:400rpx;
                margin: 20rpx auto;
            }
        }
    }

}


    
@include respondTo('desktop') {
    .news-detail {
        font-weight: normal;
        text-indent: 0 !important;

        .title {
            text-align: center;
            font-size: 60rpx;
            font-weight: bold;
        }

        .time {
            color: #999;
            font-size: 28rpx;
            display: flex;
            align-items: center;
            margin: 20rpx 0;
            .el-icon {
                margin-right: 10rpx;
            }
        }

        .content {
            text-indent: 70rpx;
            display: flex;
            align-items: center;

            .el-image {
                height: 500px;
                margin: 40rpx auto;
            }
        }
    }
}
</style>