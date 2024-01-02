<template>
    <view class="xin426-container">
         <el-row>
             <el-col :sm="8" :lg="6" v-for="img in imgList" :key="img" >
                 <el-image  v-showMeta="`animate__fadeInUp`" lazy  fit="cover" :src="img"/>
             </el-col>
         </el-row>
    </view>
 </template>
    
    
 <script setup>
 //    加载图片
 import img1 from '../image/426/equ/1.jpg'
 import img2 from '../image/426/equ/2.jpg'
 import img3 from '../image/426/equ/3.jpg'
 import img4 from '../image/426/equ/4.jpg'
 import img5 from '../image/426/equ/5.jpg'
 import img6 from '../image/426/equ/6.jpg'
 import img7 from '../image/426/equ/7.jpg'
 import img8 from '../image/426/equ/8.jpg'
 import img9 from '../image/426/equ/9.jpg'
 import img10 from '../image/426/equ/10.jpg'
//  new img
import e1 from '../image/426/equ1/1.jpg'
import e2 from '../image/426/equ1/2.jpg'
import e3 from '../image/426/equ1/3.jpg'
import e4 from '../image/426/equ1/4.jpg'
import e5 from '../image/426/equ1/5.jpg'
import e6 from '../image/426/equ1/6.jpg'
import e7 from '../image/426/equ1/7.jpg'
import e8 from '../image/426/equ1/8.jpg'
import e9 from '../image/426/equ1/9.jpg'
import e10 from '../image/426/equ1/10.jpg'
import e11 from '../image/426/equ1/11.jpg'
 const imgList = [e6,e1,e2,e3,e4,e5,e7,e8,e9,e10,e11,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]
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
                height: 220px;
            }
         }
     }
    
    }
 </style>