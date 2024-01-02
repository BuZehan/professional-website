<template>
    <view class="xin426-container">
        <el-row>
            <el-col :xs="24" :sm="8" :lg="6" v-for="img in imgList" :key="img">
                <el-image lazy v-showMeta="`animate__fadeInUp`" hide-on-click-modal fit="cover" :src="img" />
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

//  load img 
import room1 from '../image/207/room1/0.jpg'
import room2 from '../image/207/room1/2.jpg'
import room3 from '../image/207/room1/3.jpg'
//  门口两张
import room4 from '../image/207/room1/1.jpg'
import room5 from '../image/207/room1/4.jpg'
import room6 from '../image/207/room1/5.jpg'
import room7 from '../image/207/room1/6.jpg'
import room8 from '../image/207/room1/7.jpg'
import room9 from '../image/207/room1/9.jpg'
import room10 from '../image/207/room1/10.jpg'

// 视频

const imgList = [room1,room4, room2, room3,room5,room6,room7,room8,room9,room10, img1, img2, img3, img4, img5, img6]
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
                height: 220px;
                cursor: pointer;
            }
        }
    }

}
</style>