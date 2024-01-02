<template>
   <view class="xin426-container">
        <el-row>
            <el-col :xs="24" :sm="8" :lg="6" v-for="img,i in imgList" :key="img" >
                <el-image lazy v-showMeta="`animate__fadeInUp`"  fit="cover" :src="img"/>
            </el-col>
        </el-row>
   </view>
</template>
   
   
<script setup>
//    加载图片
import img1 from '../image/426/room/1.jpg'
import img2 from '../image/426/room/2.jpg'
import img3 from '../image/426/room/3.jpg'
import img4 from '../image/426/room/4.jpg'
import img5 from '../image/426/room/5.jpg'
import img6 from '../image/426/room/6.jpg'
import img7 from '../image/426/room/7.jpg'
// 新图
import r01 from '../image/426/room1/01.jpg'
import r02 from '../image/426/room1/02.jpg'
import r03 from '../image/426/room1/03.jpg'
import r04 from '../image/426/room1/04.jpg'

import r1 from '../image/426/room1/1.jpg'
import r2 from '../image/426/room1/2.jpg'
import r3 from '../image/426/room1/3.jpg'
import r4 from '../image/426/room1/4.jpg'

const imgList = [r01,r02,r03,r04,r1,r2,r3,r4,img1,img2,img3,img4,img5,img6,img7]
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
                height: 250px;
                cursor: pointer;
            }
        }
    }
   
   }
</style>