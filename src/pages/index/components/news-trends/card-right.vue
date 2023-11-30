<template>
   <view class="card-right" v-showMeta="`animate__fadeInRight`">
         <view class="card-left-title">
               <view class="day">15</view>
               <view class="month">
                  2023-11
               </view>
         </view>
         <view class="card-right-content">
            2023年秋季 计算机系教学研讨活动与助教培训证书项目通知
         </view>
   </view>
</template>
   
   
<script setup>
   
</script>
   
   
<style scoped lang='scss'>

   .card-right{
    width: 100%;
    height: 220rpx;
    box-sizing: border-box;
    padding: 40rpx;
    display: flex;
    align-items: center;
    border-top: 2px solid #c9c9c979; 
    justify-content: flex-start;
    cursor: pointer;

    .card-left-title{
       width: 130rpx;
       height: 90%;
       border: 1px solid var(--CHAHUAHONG);
       display: flex;
       align-items: center;
       justify-content: space-evenly;
       flex-direction: column;
         color: var(--CHAHUAHONG);
         background: rgb(255, 255, 255);
         background: linear-gradient(to bottom, rgb(255, 255, 255) ,rgb(255, 255, 255));
         transition: all .5s;
       .day{
         font-weight: 900;
         font-size: 44rpx;
       }
       .month{
         font-weight: 500;
       }
    }
    .card-right-content{
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
    &:hover{
      .card-left-title{
         color: #fff;
        background: rgb(238,63,77);
        background: linear-gradient(to bottom, rgba(238,63,77,1) , rgba(200,20,20,1) 100%);
      }
     }
   }
</style>