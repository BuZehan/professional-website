<template>
   <view class="stu-detail">
      <el-row class="stu-detail-row" justify="center">
         <el-col class="title" :xs="24" :sm="24" :md="20">
               {{ UseStuInfoStore.currentStuData.title }}
         </el-col>
         <el-col class="desc" :xs="24" :sm="24" :md="20">
            <p v-for="desc , i in UseStuInfoStore.currentStuData.desc" :key="i">
               {{ desc }}
            </p>
         </el-col>
      </el-row>
      <el-button @tap="back" color="rgb(200,20,20)">返回</el-button>
   </view>
</template>
<script setup>
import { ref } from 'vue'
// 仓库状态数据
import { StuInfoStore } from '@/store/modules/stu.js';
const UseStuInfoStore = StuInfoStore();
const back = () => {
   UseStuInfoStore.updateCurrentRouterIndex(0)
   console.log(UseStuInfoStore.currentRouterIndex);
}
</script>
   
   
<style scoped lang='scss'>



@include respondTo('mobile') {
   .stu-detail-row {
      text-indent: 0 !important;
      .title {
         display: flex;
         align-items: center;
         justify-content: center;
         font-size: 34rpx;
         font-weight: bold;
         margin-bottom:50rpx;
      }
      .desc{
         font-weight: normal;
         text-indent: 70rpx;
         line-height: 60rpx;
         p{
            margin-bottom: 20rpx;
         }
      }
   }
   .el-button{
      float: right;
   }
}

@include respondTo('desktop') {
   .stu-detail-row {
      text-indent: 0 !important;
      .title {
         display: flex;
         align-items: center;
         justify-content: center;
         font-size: 60rpx;
         margin-bottom: 100rpx;
      }
      .desc{
         font-weight: normal;
         text-indent: 70rpx;
         line-height: 60rpx;
         p{
            margin: 40rpx auto;
         }
      }
   }
   .el-button{
      float: right;
   }
}
</style>