<template>
    <view class="xin426-container">
         <el-row>
             <el-col :xs="24"  :sm="8" :lg="6" v-for="img in imgList" :key="img" >
                 <el-image v-showMeta="`animate__fadeInUp`" hide-on-click-modal fit="cover" :src="img"/>
             </el-col>
         </el-row>
    </view>
 </template>
    
    
 <script setup>
 //    加载图片
 import img1 from '../image/207/room/1.jpg'
 import img2 from '../image/207/room/2.jpg'
 import img3 from '../image/207/room/3.jpg'
 import img4 from '../image/207/room/4.jpg'
 import img5 from '../image/207/room/5.jpg'
 import img6 from '../image/207/room/6.jpg'
 const imgList = [img1,img2,img3,img4,img5,img6]
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