<template>
  <view class="news-card-wrapper">
    <el-row class="m" justify="center">
      <el-col v-showMeta="i % 2 == 0 ? `animate__fadeInLeft` : `animate__fadeInRight`" v-for="card, i in cardNum" :key="i" :xs="12" :sm="12" :md="12">
        <el-card :body-style="{ padding: '0px' }">
          <image mode="widthFix" src="https://test.hebic.cn/uploadfile/2023/1106/20231106083305653.jpg" class="image" />
          <view class="content" style="padding: 4px">
            <h4>2023年华为ICT人才联盟双选会</h4>
            <view class="desc">给用人企业和24届毕业生搭建了很好的对接平台，积极的促进了24届毕业生的就业，谱写了我校与华为公司合作的新篇章</view>
            <view class="time">
              <!-- <time class="time">发布于:2023-11-06 08:29:57 </time> -->
              <!-- <el-button>查看详情</el-button> -->
              <view class="month">11月</view>
              <view class="year">2023年</view>
            </view>
          </view>
        </el-card>
      </el-col>
    </el-row>
    <!-- PC -->
    <el-row :gutter="20" justify="center" class="pc-el-row">
      <el-col   :xs="24" :sm="18" :lg="16">
        <view v-showMeta="`animate__bounceInLeft`" class="title" style="margin-bottom: 80rpx;">
          <view class="h1">新闻动态</view>
          <p></p>
          <view @tap="navgationTo('news')" class="mMore">更多</view>
          <view @tap="pcNavgationTo('8')" class="pcMore">更多</view>
        </view>
        <el-row justify="start" class="pc-child-el-row">
          <el-col :xs="24" :sm="11" :lg="12">
            <CardLeft />
          </el-col>
          <el-col :xs="24" :sm="11" :lg="12">
            <CardLeft />
          </el-col>
          <el-col :xs="24" :sm="11" :lg="12">
            <CardLeft />
          </el-col>
          <el-col :xs="24" :sm="11" :lg="12">
            <CardLeft />
          </el-col>
        </el-row>
      </el-col>
      <el-col   :xs="24" :sm="18" :lg="8">
        <view v-showMeta="`animate__bounceInRight`" class="title" style="margin-bottom: 80rpx;">
          <view  class="h1">通知公告</view>
          <p></p>
          <view @tap="navgationTo('news')" class="mMore">更多</view>
          <view @tap="pcNavgationTo('8')" class="pcMore">更多</view>
        </view>
        <CardRight />
        <CardRight />
        <CardRight />
        <CardRight />
        <CardRight />
        <CardRight />
        <CardRight />
      </el-col>
    </el-row>
  </view>
</template>
   
   
<script setup>
import { ref } from 'vue'
import CardLeft from './card-left.vue'
import CardRight from './card-right.vue'
const cardNum = ref(4);

// 移动端跳转
const navgationTo = (url) => {
  uni.navigateTo({
    url: `/pages/index/child/${url}/${url}`,
  });
};
// pc端跳转
const pcNavgationTo = (e) => {
  PubSub.publish('navgation-event', { e })
};
</script>
   
   
<style scoped lang='scss'>
@import '../../../../style.scss';

@include respondTo('mobile') {
  .news-card-wrapper {
    width: 100vw;

    .m {
      display: flex;
    }

    .mMore {
      display: flex;
    }

    .pcMore {
      display: none;
    }

    .pc-el-row {
      display: none !important;
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
      .m{
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
    }

    .pc-el-row {
      max-width: 1440px;
      width: 100vw;
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
          display: flex;
          align-items: center;
          justify-content: space-around;

          .el-col {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }

}

@include respondTo('pad') {}</style>