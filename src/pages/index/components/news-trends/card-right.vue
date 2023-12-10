<template>
  <view class="card-right" v-showMeta="`animate__fadeInRight`" @tap="fn">
    <view class="card-left-title" >
      <view class="day">{{ notice.release_time.split('-')[2] }}</view>
      <view class="month">
        {{ notice.release_time.split('-')[0] }}-{{ notice.release_time.split('-')[1] }}
      </view>
    </view>
    <view class="card-right-content">
      {{ notice.news_title }}
    </view>
  </view>
</template>
   
   
<script setup>
import {computed} from 'vue'
import {MainStore} from '@/store'
import { WebDataStore } from '@/store/modules/web.js';
const UseMainStore = MainStore()
const UseWebDataStore = WebDataStore()
const $props = defineProps({
  notice: {
    type: Object,
    default: () => { }
  },
  index: {
        type: Number,
        default: 0
    }
})
const fn = computed(() => {
  return UseMainStore.IsPC ? clickNewsItem : clickNewsItemM
})
const clickNewsItem = () => {
    // console.log('通知公告下标',$props.index);
    UseWebDataStore.SetNoticeDataIndex($props.index)
    UseWebDataStore.SetNewsDetailIndex([1,4])   
    PubSub.publish('navgation-event', { e: '8' })
}

const clickNewsItemM = () => {
    // console.log('移动端跳转通知公告动态页',$props.index);
    UseWebDataStore.SetNoticeDataIndex($props.index)
    UseWebDataStore.SetNewsDetailIndex([1,4]) 
    uni.navigateTo({
         url: `/pages/index/child/news/inform-detail?id=${$props.index}`
    });
}
</script>
   
   
<style scoped lang='scss'>
.card-right {
  width: 100%;
  height: 220rpx;
  box-sizing: border-box;
  padding: 40rpx;
  display: flex;
  align-items: center;
  border-top: 2px solid #c9c9c979;
  justify-content: flex-start;
  cursor: pointer;

  .card-left-title {
    width: 130rpx;
    height: 90%;
    border: 1px solid var(--CHAHUAHONG);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    color: var(--CHAHUAHONG);
    background: rgb(255, 255, 255);
    background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(255, 255, 255));
    transition: all .5s;

    .day {
      font-weight: 900;
      font-size: 44rpx;
    }

    .month {
      font-weight: 500;
    }
  }

  .card-right-content {
    flex: 1;
    padding-left: 20rpx;
    box-sizing: border-box;
    line-height: 50rpx;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    /* 省略号显示的行数 */
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    .card-left-title {
      color: #fff;
      background: rgb(238, 63, 77);
      background: linear-gradient(to bottom, rgba(238, 63, 77, 1), rgba(200, 20, 20, 1) 100%);
    }
  }
}</style>