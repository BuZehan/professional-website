<template>
    <view class="xin426-container">
         <el-row>
             <el-col :xs="24" :sm="8" :lg="6" v-for="img in imgList" :key="img" >
                 <el-image v-showMeta="`animate__fadeInUp`"  fit="cover" hide-on-click-modal :src="img"/>
             </el-col>
         </el-row>
    </view>
 </template>
    
    
 <script setup>
 //    加载图片
 import img1 from '../image/207/equ/1.jpg'
 import img2 from '../image/207/equ/2.jpg'
 import img3 from '../image/207/equ/3.jpg'
 const imgList = [img1,img2,img3]
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