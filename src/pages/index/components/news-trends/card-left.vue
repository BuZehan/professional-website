<template>
    <view class="card-left" v-showMeta="`animate__fadeInLeft`">
        <view class="content" @tap="fn">
            <el-image fit="fill" :src="news_data.images[0].image_path" />
            <view class="time">
                <view class="day">{{ news_data.release_time.split('-')[2] }}</view>
                <view class="year">{{ news_data.release_time.split('-')[0] }}-{{ news_data.release_time.split('-')[1] }}
                </view>
            </view>

            <view class="title">
                {{ news_data.news_title }}
            </view>
            <view class="desc">
                {{ news_data.news_content }}
            </view>
        </view>
        <view class="border"></view>
        <view class="border-1"></view>
        <view class="border-2"></view>
        <view class="border-3"></view>
        <view class="border-4"></view>

    </view>
</template>
   
   
<script setup>
import { WebDataStore } from '@/store/modules/web.js';
import {MainStore} from '@/store'
import {computed} from 'vue'
const UseMainStore = MainStore()
const UseWebDataStore = WebDataStore()
const $props = defineProps({
    news_data: {
        type: Object,
        default: () => { }
    },
    index: {
        type: Number,
        default: 0
    }
});
const fn = computed(() => {
    // console.log('@IsPC@',UseMainStore.IsPC);
  return UseMainStore.IsPC ? clickNewsItem : clickNewsItemM
})
let i = $props.index;
const clickNewsItem = () => {
    // console.log($props.index);
    UseWebDataStore.SetNewsDataIndex(i)
    UseWebDataStore.SetNewsDetailIndex([0,3])   
    PubSub.publish('navgation-event', { e: '8' })
}

const clickNewsItemM = () => {
    // console.log('跳转新闻动态页');
    UseWebDataStore.SetNewsDataIndex($props.index)
    UseWebDataStore.SetNewsDetailIndex([0,3]) 
    uni.navigateTo({
         url: `/pages/index/child/news/news-detail?id=${$props.index}`
    });
}
</script>
   
   
<style scoped lang='scss'>
.card-left {
    width: 94%;
    height: 750rpx;
    margin-bottom: 40rpx;
    cursor: pointer;
    transition: all .4s;
    position: relative;
    transform-origin: bottom;
    box-sizing: border-box;
    max-width: 400px;

    .content {
        height: 740rpx;
        transform: translateY(40rpx);
        transition: all .7s;
        overflow: hidden;

        .el-image {
            transition: all .9s;
            overflow: hidden;
        }

    }

    .border-1,
    .border {
        position: absolute;
        width: 0;
        height: 2px;
        transition: all .5s;
        background-color: #c9c9c979;
        top: -1px;
        left: 0;
    }

    .border {
        width: 100%;
    }

    .border-1,
    .border-2,
    .border-3,
    .border-4 {
        position: absolute;
        width: 0;
        height: 0;
        transition: all .8s;
    }

    .border-2 {
        right: 0;
        top: 0px;
    }

    .border-3 {
        bottom: 0;
        right: 0;
    }

    .border-4 {
        bottom: 0px;
        left: 0;
    }

    &:hover {

        .border-1,
        .border-2,
        .border-3,
        .border-4 {
            background-color: var(--CHAHUAHONG);
        }

        .border-1 {
            height: 1px;
            width: 100%;
        }

        .border-2 {
            height: 100%;
            width: 1px;
        }

        .border-3 {
            height: 1px;
            width: 100%;
        }

        .border-4 {
            height: 100%;
            width: 1px;
        }

        .content {
            transform: translateY(0rpx);

            .title,
            .desc {
                box-sizing: border-box;
                padding: 0 40rpx;
            }

            .title {
                padding-top: 20rpx;
            }

            .desc {
                -webkit-line-clamp: 3 !important;
            }


        }
    }

    .el-image {
        height: 430rpx;
        width: 100%;
        transition: all .4s;
    }

    .title,
    .desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        /* 省略号显示的行数 */
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 44rpx;
    }

    .title {
        margin: 20rpx 10rpx;
        font-weight: 600;
        line-height: 48rpx;
    }

    .desc {
        color: #999;
        font-size: 26rpx;
    }

    .time {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 26rpx;
        color: #eee;
        padding: 10rpx;
        width: 100rpx;
        height: 80rpx;
        background-color: rgb(200, 20, 20);

        .day {
            font-weight: 900;
            font-size: 34rpx;
        }
    }
}

@include respondTo('pad') {
    .card-left {
        width: 60vw;
    }
}

@include respondTo('mobile') {
    .card-left {
        margin: 0 auto;
    }
}
</style>