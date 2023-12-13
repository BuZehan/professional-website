<template>
   <view class="stu-detail">
      <template class="m-header">
         <AppPopup />
         <AppHeader />
      </template>
      <view class="container-content">
         <backgroundImg :img="stu_img_list" />
         <view class="trans">
            <AppBreadcrumb class="bread" :currentPageTxtArr="['优秀校友',UseStuInfoStore.currentStuData.title.substring(0,8)+'...']" @changePage="changePage" />
            <el-row justify="center">
               <el-col :xs="{ span: 23 }" :sm="{ span: 22 }" :xl="20">
                  <view class="title">优秀校友</view>
                  <p class="line"></p>
                  <view class="content">
                     <el-row class="stu-detail-row" justify="center">
                        <el-col class="desc-title" :xs="24" :sm="24" :md="20">
                           {{ UseStuInfoStore.currentStuData.title }}
                        </el-col>
                        <el-col class="desc" :xs="24" :sm="24" :md="20">
                           <div class="con" v-html="UseStuInfoStore.currentStuData.desc.replace(/<img/g, str)">
                           </div>
                        </el-col>
                     </el-row>
                     <el-button @tap="back"  color="rgb(200,20,20)">返回</el-button>
                  </view>
               </el-col>
            </el-row>
         </view>
      </view>
      <Footer class="footer" />
   </view>
</template>
<script setup>
import { ref,computed } from 'vue';

// 仓库状态数据
import { StuInfoStore } from '@/store/modules/stu.js';
const UseStuInfoStore = StuInfoStore();
const back = () => {
   UseStuInfoStore.updateCurrentRouterIndex(0)
   console.log(UseStuInfoStore.currentRouterIndex);
}
const changePage = (i) => {
  uni.navigateTo({
    url: '/pages/index/child/outstanding-graduate/outstanding-graduate'
  });
}
const stu_img_list = computed(() => {
 return  UseStuInfoStore.currentStuData.imgList.length > 0 ? UseStuInfoStore.currentStuData.imgList : ''
})

const str = '<img class="image" style="max-height:500rpx;max-width:80vw; margin:10px auto !important;display:block; "'

</script>
   
   
<style scoped lang='scss'>

@include respondTo("mobile") {
   .stu-detail {
      height: 100vh;
      overflow: scroll;
      .footer {
         display: flex;
      }

      .m-header {
         display: block;
         position: fixed;
         top: 0;
         z-index: 5000;
      }

      .container-content {
         margin-top: 100rpx;
         .trans {
            transform: translateY(-60rpx);

            .bread {
               background-color: rgba(0, 0, 0, 0.363);
               padding: 0 !important;
            }
         }

         .title {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 30rpx 0;
            font-weight: bold;
            height: 80rpx;
            font-size: 70rpx;
            margin-top: 40rpx;
         }

         .line {
            margin-top: 46rpx;
         }

         .content {
            .c {
               text-indent: 60rpx;
               margin-bottom: 20px;
            }
         }
      }
   }

   .m-header {
      display: block;
      position: fixed;
      top: 0;
      z-index: 5000;
   }

   .stu-detail-row {
      text-indent: 0 !important;

      .desc-title {
         display: flex;
         align-items: center;
         justify-content: center;
         font-size: 34rpx;
         font-weight: bold;
         margin-bottom: 50rpx;
      }

      .desc {
         p {
            margin-bottom: 20rpx;
         }
      }
   }

   .el-button {
      float: right;
   }
}


</style>