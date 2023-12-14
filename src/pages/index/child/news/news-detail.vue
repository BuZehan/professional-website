<template>
    <view class="news-detail" ref="target">
        <template class="m-header hidden-md-and-up">
            <AppPopup />
            <AppHeader />
        </template>
        <el-row justify="center" v-if="NewsData">
            <el-col class="title" :xs="22" :md="24">{{ NewsData.title }}</el-col>
            <el-col class="time" :xs="22" :md="24"><el-icon :size="20" color="rgb(200,20,20)">
                    <Clock />
                </el-icon>{{ NewsData.release_time }}</el-col>
            <!-- <el-col class="content" :xs="22" :md="24">
                <el-image :src="newsImage" fit="cover" />
            </el-col> -->
            <el-col v-if="IsPC && NewsData.content" class="content" :xs="22" :md="24">
                <div class="contentDIV" v-html="NewsData.content.replace(/<img/g, str)"></div>
            </el-col>
            <el-col v-if="!IsPC && NewsData.content" class="content" :xs="22" :md="24">
                <div class="contentDIV" v-html="NewsData.content.replace(/<img/g, strForMobile)"></div>
            </el-col>
            <!-- <el-col class="time" :xs="22" :md="24"><el-icon :size="20" color="rgb(200,20,20)">
                    <Clock />
                </el-icon>{{ NewsData.release_time }}</el-col> -->
        </el-row>
        <el-button color="rgb(200,20,20)" class="hidden-sm-and-down btn" type="primary" @tap="back">返回</el-button>
        <el-button color="rgb(200,20,20)" class="hidden-md-and-up btn" type="primary" @tap="Mback">返回</el-button>
        <Footer class="hidden-md-and-up footer" />
    </view>
</template>
   
   
<script setup>
import { Clock } from '@element-plus/icons-vue'
import { onActivated, ref, onMounted, nextTick, computed } from 'vue'
import PubSub from 'pubsub-js';
import { WebDataStore } from '@/store/modules/web.js'
import {IsPC} from '@/hooks'    
const UseWebDataStore = WebDataStore();
const NewsData = computed(() => {
    return UseWebDataStore.newsData.list.filter(item => item.id === UseWebDataStore.NewsDataIndex)[0]
});
// console.log(IsPC);
const str = '<img class="image" style="max-height:500px;max-width:1000px; margin:10px auto !important;display:block; "'
const strForMobile = '<img class="image" style="max-height:500px;max-width:80vw; margin:10px auto !important;display:block; "'
// margin:10px auto !important;display:block; style="height:400px; "
// 页面滚动
onMounted(() => {
    PubSub.publish('scroll-top', { data: true });
})
const target = ref(null)
onMounted(() => {
    nextTick(() => {
    })
})
const back = () => {
    PubSub.publish('back-event', { index: 0 })
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
    margin-bottom: 300rpx;
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
                box-sizing: border-box;
            }

            .el-image {
                height: 400rpx;
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

        .el-row {
            width: 100%;

            .content {
                width: 100%;
                display: flex;
                align-items: center;

                .contentDIV {
                    width: 100%;
                }

            }

        }

    }
}</style>