<template>
  <view class="news-card-wrapper">
    <!-- PC -->
    <el-row justify="center" class="pc-el-row">
      <el-col :xs="24" :sm="20" :md="20" :lg="16">
        <view v-showMeta="`animate__bounceInLeft`" class="title" style="margin-bottom: 80rpx;">
          <view class="h1 hidden-sm-and-down">新闻动态</view>
          <p></p>
          <view @tap="navgationTo('news')" class="mMore hidden-sm-and-down">更多</view>
          <view @tap="pcNavgationTo('8')" class="pcMore hidden-sm-and-down">更多</view>
        </view>
        <el-row justify="center" class="pc-child-el-row">
          <el-col v-if="newsData" :xs="22" :sm="{ span: 10, offset: 1 }" :md="{ span: 12, offset: 0 }" :lg="12"
            v-for="news_data, i in newsData.slice(0, 4)" :key="news_data.id">
            <CardLeft :news_data="news_data" :index=i />
          </el-col>
          <!-- <el-col :xs="22" :sm="{ span: 10, offset: 1 }" :md="{span:12,offset:0}" :lg="12">
            <CardLeft />
          </el-col>
          <el-col :xs="22" :sm="{ span: 10, offset: 1 }" :md="{span:12,offset:0}" :lg="12">
            <CardLeft />
          </el-col>
          <el-col :xs="22" :sm="{ span: 10, offset: 1 }" :md="{span:12,offset:0}" :lg="12">
            <CardLeft />
          </el-col> -->
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <el-row v-showMeta="`animate__bounceInRight`" class="title" style="margin-bottom: 80rpx;">
          <view class="h1 hidden-sm-and-down">通知公告</view>
          <p></p>
          <view @tap="navgationTo('news')" class="mMore hidden-sm-and-down">更多</view>
          <view @tap="pcNavgationToTzgg('8')" class="pcMore hidden-sm-and-down">更多</view>
        </el-row>
        <el-row>
          <el-col :xs="24" v-for="notice,i in NoticeData.slice(0,7)" :key="notice.id">
            <CardRight  :notice="notice" :index="i" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </view>
</template>
   
   
<script setup>
import { ref } from 'vue'
import CardLeft from './card-left.vue'
import CardRight from './card-right.vue'
// 新闻数据
import { WebDataStore } from '@/store/modules/web.js'
const UseWebDataStore = WebDataStore();
const newsData = UseWebDataStore.newsData.list;
const NoticeData = UseWebDataStore.NoticeData.list;
// 移动端跳转
const navgationTo = (url) => {
  uni.navigateTo({
    url: `/pages/index/child/${url}/${url}`,
  });
};
// pc端跳转 -- 新闻动态
const pcNavgationTo = (e) => {
  UseWebDataStore.SetNewsDataIndex(0)
  UseWebDataStore.SetNewsDetailIndex([0, 0])
  PubSub.publish('navgation-event', { e })
};
// pc端跳转 -- 通知公告
const pcNavgationToTzgg = (e) => {
  UseWebDataStore.SetNoticeDataIndex(0)
  UseWebDataStore.SetNewsDetailIndex([0, 1])
  PubSub.publish('navgation-event', { e })
};

</script>
   
   
<style scoped lang='scss'>
@include respondTo('mobile') {
  .news-card-wrapper {
    width: 100%;

    .m {
      display: flex;
    }

    .mMore {
      display: flex;
    }


    .el-row {
      .el-col {
        display: flex;
        justify-content: center;
      }
    }

    .el-card {
      box-sizing: border-box;
      padding: 8rpx;
      width: 96%;
      margin-top: 16rpx;
      height: fit-content;
      position: relative;
      min-height: 440rpx;

      .image {
        width: 100%;
        height: 240rpx !important;
      }

      .content {
        h4 {
          color: #365883;
          font-weight: bold;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          /* 省略号显示的行数 */
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: justify;
          font-size: 30rpx;
        }

        .desc {
          line-height: 36rpx;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          /* 省略号显示的行数 */
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 26rpx;
          text-align: justify;
          margin-top: 12rpx;
          color: #666;
        }

        .time {
          position: absolute;
          width: 80rpx;
          height: 100rpx;
          top: 4px;
          left: 4px;
          background-color: #d00202;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .month {
            font-size: 26rpx;
            font-weight: bold;
          }

          .year {
            font-size: 24rpx;
            font-weight: bold;
            margin-top: 10rpx;
          }
        }

        .el-button {
          position: absolute;
          background-color: #365883;
          color: #fff;
          bottom: 20rpx;
          right: 20rpx;
        }
      }
    }

    @media screen and (min-width:768px) and (max-width:992px) {
      .m {
        width: 86vw;
        margin: 0 auto;
      }

      .el-card {
        width: 600rpx !important;
        height: 400rpx !important;
        margin-bottom: 40rpx;
      }
    }
  }
}

@include respondTo('desktop') {
  .news-card-wrapper {
    .m {
      display: none !important;
    }

    .mMore {
      display: none;
    }

    .pcMore {
      display: flex;
      cursor: pointer;

    }

    .pc-el-row {
      max-width: 1440px;
      width: 100%;
      display: flex;

      .el-col {
        width: 100%;

        .title {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;

          .h1 {
            font-size: 52rpx !important;
            font-weight: bold;
          }

          p {
            height: 1px;
            width: 100px;
            background-color: #d8d8d8a6;
            margin: 0 40rpx;
          }

          .more {
            font-size: 30rpx;
            color: #999;
            cursor: pointer;
            margin-left: 20px;
            transition: all .4s;

            &:hover {
              color: #365883;
            }
          }
        }

        .pc-child-el-row {
          width: 100%;
        }
      }
    }
  }

}

@include respondTo('pad') {}
</style>