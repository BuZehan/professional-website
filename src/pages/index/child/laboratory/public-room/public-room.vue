<template>
    <view class="xin426-container">
        <el-row>
            <el-col :sm="8" :lg="6" v-for="img in imgList" :key="img">
                <el-image lazy v-showMeta="`animate__fadeInUp`" fit="cover" :src="img" />
            </el-col>
        </el-row>
    </view>
</template>
    
    
<script setup>
//    加载图片
import img1 from '../image/312/1.jpg'
import img2 from '../image/312/2.jpg'
//  新图
import room1 from '../image/312/1.jpg'
import room2 from '../image/312/2.jpg'
import room4 from '../image/312/4.jpg'
import room5 from '../image/312/5.jpg'
import room6 from '../image/312/6.jpg'
import room11 from '../image/312/11.jpg'
import room22 from '../image/312/22.jpg'
const imgList = [room1,room2,room4,room5,room6,room11,room22,img1,img2]
</script>
    
<style scoped lang='scss'>
.xin426-container {
    width: 100%;

    .el-row {
        width: 100%;

        .el-col {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 60rpx;

            .el-image {
                width: 100%;
                max-width: 300px;
                cursor: pointer;
                height: 220px;
            }
        }
    }

}</style>