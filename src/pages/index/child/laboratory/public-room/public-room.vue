<template>
    <view class="xin426-container">
         <el-row>
             <el-col :sm="8" :lg="6" v-for="img in imgList" :key="img" >
                 <el-image v-showMeta="`animate__fadeInUp`" fit="cover"  :src="img"/>
             </el-col>
         </el-row>
    </view>
 </template>
    
    
 <script setup>
 //    加载图片
 import img1 from '../image/312/1.jpg'
 import img2 from '../image/312/2.jpg'
 const imgList = [img1,img2]
 </script>
    
 <style scoped lang='scss'>
    .xin426-container{
     width: 100%;
     .el-row{
         width: 100%;
         .el-col{
             display: flex;
             align-items: center;
             justify-content: center;
             margin-bottom: 60rpx;
             .el-image{
                width: 100%;
                max-width: 300px;
                cursor: pointer;
            }
         }
     }
    
    }
 </style>