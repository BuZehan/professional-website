<template>
    <view class="news-detail" ref="target">
        <template class="m-header hidden-md-and-up">
            <AppPopup />
            <AppHeader />
        </template>
        <el-row justify="center">
            <el-col class="title" :xs="22" :md="24">{{ NoticeData[NoticeDataIndex].news_title }}</el-col>
            <el-col class="time" :xs="22" :md="24"><el-icon :size="20" color="rgb(200,20,20)">
                    <Clock />
                </el-icon>{{ NoticeData[NoticeDataIndex].release_time }}</el-col>
            <el-col class="content" :xs="22" :md="24">
                <el-image :src="NoticeData[NoticeDataIndex].notificationImage[0].image_path" fit="cover" />
                <!-- <p v-else>{{ c }}</p> -->
            </el-col>
            <el-col>
                <p>{{ NoticeData[NoticeDataIndex].news_content }}</p>
            </el-col>
            <!-- <el-image v-if="c == 'img'" :src="newsData.imgUrl" fit="cover" /> -->
        </el-row>
        <el-button color="rgb(200,20,20)" class="hidden-sm-and-down btn" type="primary" @tap="back">返回</el-button>
        <el-button color="rgb(200,20,20)" class="hidden-md-and-up btn" type="primary" @tap="Mback">返回</el-button>
        <Footer class="hidden-md-and-up" />
    </view>
</template>
   
   
<script setup>
import { Clock } from '@element-plus/icons-vue'
import { onActivated, ref, onMounted, nextTick, computed } from 'vue'
import PubSub from 'pubsub-js';
// 新闻数据 
import { WebDataStore } from '@/store/modules/web.js'
const UseWebDataStore = WebDataStore();
const NoticeData = computed(() => {
    return UseWebDataStore.NoticeData.list
});
const NoticeDataIndex = computed(() => {
    return UseWebDataStore.NoticeDataIndex;
})
import zhengshu from "@/static/news/stu1.png"
const newsData = {
    title: '恭喜 XXX 同学顺利考过华为HCIP-Cloud Computing证书！',
    time: '2023-11-25',
    imgUrl: zhengshu,
    content: [
        '2023年11月18日，我校兴安校区举办了“华为中国大学生ICT大赛2023-2024”河北省初赛，共有229名网络工程专',
        'img',
        '网络工程专业一直秉承“以赛促教、以赛促学、以赛促发展”的理念，积极组织学生参加各种专业大赛，以促进专业的发展。'
    ]
}
// 页面滚动
onMounted(() => {
    PubSub.publish('scroll-top', {
        data: true
    })
})
const back = () => {
    console.log(123);
    PubSub.publish('back-event', { index: 1 })
}
// 移动端返回
const Mback = () => {
    uni.navigateBack({
        delta: 1
    })
}
</script>
   
   
<style scoped lang='scss'>
.btn {
    margin-top: 50rpx;
    margin-bottom: 200rpx;
    float: right;
}


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
            margin: 40rpx 0;
            opacity: 0.6;

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
                line-height: 44rpx;
                text-align: justify;
            }

            .el-image {
                height: 400rpx;
                max-height: 400rpx;
                box-shadow: 8rpx 8rpx 20rpx 4rpx #33333349;
                margin: 50rpx auto;
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
            justify-content: center;

            .el-image {
                text-indent: 0 !important;
                margin: 40rpx auto;
                border-left: 1rpx solid #ddd;
                border-bottom: 1rpx solid #ddd;
                max-width: 400px;

            }
        }
    }
}
</style>