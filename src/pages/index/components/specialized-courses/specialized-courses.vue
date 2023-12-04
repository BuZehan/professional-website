<template>
    <view class="course-container">
        <el-row  justify="center">
            <el-col class="image-wrapper" :xs="{span:22}" :sm="24" :md="12">
                    <el-image :previewSrcList="[img]" :hide-on-click-modal="true" :lazy="true" :src="img" fit="cover" />
                    <view class="tip">点击图片查看大图</view> 
            </el-col>
            <el-col class="text-wrapper" :xs="{span:22}" :sm="24" :md="12">
                <h4 class="title">
                    “1+3战略”:一个基础，三个方向：以数通为基础，大力发展云计算、移动互联网5G、ICT融合创新三个方向。
                  </h4>
            </el-col>
        </el-row>
    </view>
</template>
   
   
<script setup>
   import img from '../../../../static/zykc.jpg';
</script>
   
   
<style scoped lang='scss'>
.course-container{
    width: 100%;
    margin: 38rpx auto;
    max-width: 1440px;
    .el-row{
        width: 100%;
        .image-wrapper{
           display: flex;
           align-items: center;
           justify-content: center;
           flex-direction: column;
        }
        .tip{
            color: #aaa;
            font-size: 28rpx;
        }
        .text-wrapper{
            display: flex;
            align-items: center;
            .title{
                font-size: 50rpx;
                color: #333;
                line-height: 90rpx;
            }
        }
    }
   }
@include respondTo('mobile') {
.title{
    font-size: 34rpx !important;
    line-height: 50rpx !important;
    margin-top: 40rpx;
}
}

@include respondTo('desktop') {
    .image-wrapper{
        padding-right: 40px;
    }
    .text-wrapper{
        padding-left: 40px;
    }
}
</style>