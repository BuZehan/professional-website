<template>
    <view>
        <view class="show-card-container" @tap="clikCardEvent" :style="{ width: width + 'vw' }">
            <view class="title">{{ data.title }}</view>
            <view class="des">{{ data.desc }}</view>
            <!-- 一张图 -->
            <view :class="{ image__wrapper_less1: imgArrLength === 1 }">
                <el-image :previewSrcList="data.imgArr" :hide-on-click-modal="true" :lazy="true"
                    v-if="contentImageData.length === 1 && data.label !== 'video'" class="img-1" mode="center"
                    :src="BaseUrl + contentImageData[0]" />
                <view v-if="data.label === 'video'" class="video-container">
                    <video :id="`video${vId}`" @play='videoPlay' class="video" :src="BaseUrl + contentImageData[0]"
                        :poster="data.poster" />
                </view>
            </view>
            <view class="over-hidden">
                <view class="image_wrapper"
                    :class="{ image__wrapper_less2: imgArrLength === 2, image__wrapper_less3: imgArrLength === 3, image_wrapper_4: imgArrLength === 4, image_wrapper_odd: imgNum578 }">
                    <template v-if="contentImageData.length === 1">
                    </template>
                    <!-- 图片张数为 2 -->
                    <template v-else-if="contentImageData.length === 2">
                        <el-image :previewSrcList="data.imgArr" :hide-on-click-modal="true" :lazy="true" mode="aspectFill"
                            v-for="(img, i) in contentImageData" :key="img" :src="BaseUrl + img" />
                    </template>
                    <!-- 图片张数为 3 -->
                    <template v-else-if="contentImageData.length === 3">
                        <el-image :previewSrcList="data.imgArr" :hide-on-click-modal="true" :lazy="true" mode="aspectFill"
                            v-for="(img, i) in contentImageData" :key="img" :src="BaseUrl + img" />
                    </template>
                    <!-- 图片张数为 4 -->
                    <template v-else-if="contentImageData.length === 4">
                        <el-image :previewSrcList="data.imgArr" :hide-on-click-modal="true" :lazy="true" mode="aspectFill"
                            v-for="(img, i) in contentImageData" :key="img" :src="BaseUrl + img" />
                    </template>
                    <template v-else-if="imgNum578">
                        <!-- 前两张大图显示 -->
                        <el-image :previewSrcList="data.imgArr" :hide-on-click-modal="true" :lazy="true" mode="aspectFill"
                            class="item-1-2" v-for="(img, i) in contentImageData.slice(0, 2)" :key="img"
                            v-lazy="BaseUrl + img" />
                        <!-- 七张图则限制显示位6张 -->
                        <el-image :previewSrcList="data.imgArr" :hide-on-click-modal="true" :lazy="true"
                            v-if="imgArrLength === 7" mode="aspectFill"
                            v-for="(img, i) in contentImageData.slice(2, imgArrLength - 2)" :key="img"
                            :src="BaseUrl + img" />
                        <!-- 否则全部显示 最大9张 -->
                        <el-image :previewSrcList="data.imgArr" :hide-on-click-modal="true" :lazy="true" v-else
                            mode="aspectFill" v-for="(img, i) in contentImageData.slice(2, imgArrLength)" :key="i"
                            :src="BaseUrl + img" />
                    </template>
                    <template v-else>
                        <el-image :previewSrcList="data.imgArr" :hide-on-click-modal="true" :lazy="true" mode="aspectFill"
                            v-for="(img, i) in contentImageData.slice(0, 9)" :key="img" :src="BaseUrl + img" />
                        <!-- <view class="image_child_wrapper" v-if="contentImageData.slice(2, 6).length">
                        <image   mode="aspectFill" v-for="(img, i) in contentImageData.slice(2, 6)" :key="img"
                             v-lazy="BaseUrl + img" />
                    </view> -->
                    </template>
                </view>
            </view>

        </view>

    </view>
</template>
    
<script setup lang='ts'>
import { computed, onMounted, ref, onUnmounted } from 'vue'
// const BaseUrl = import.meta.env.VITE_APP_SERVER_IP + '/used/'
const BaseUrl = ''
const $props = defineProps({
    data: {
        type: Object,
        default: () => { }
    },
    width: {
        type: Number || String,
        default: 96
    },
    vId: {
        type: String,
        default: ''
    }
})
// 图片数据
const contentImageData = computed(() => {
    return $props.data.imgArr
})
// 图片数量
const imgArrLength = computed((): number => {
    return $props.data.imgArr.length
})
// 发布时间
// import { calculateTime } from '@/utils/utils'
import { uni } from '@dcloudio/uni-h5';
import PubSub from 'pubsub-js';
// const releaseTime = computed(() => {
//     return calculateTime(+$props.data.timestamp)
// })
// 计算图片数量位 4 5 7 8时
const imgNum578 = computed(() => {
    let len = imgArrLength.value
    const numArr = [4, 5, 7, 8]
    return numArr.includes(len)
})
const $emits = defineEmits(['PlayHandler','clikCardEvent']);

// 视频播放
const videoPlay = () => {
    if ($props.vId != '') {
        $emits('PlayHandler', $props.vId)
    }
}
// 视频暂停
PubSub.subscribe('v-pause', (msg, data) => {
    if (data.playId != $props.vId) {
        let videoContext = uni.createVideoContext(`video${$props.vId}`)
        videoContext.pause()
    }
    console.log(data.playId);
})

// 自定义事件
const clikCardEvent = () => {
    $emits('clikCardEvent')
}
</script>
      
    
<style scoped lang="scss">
.show-card-container {
    margin: 50rpx auto;
    box-sizing: border-box;
    border-radius: 10rpx;
    background-color: #ffffff;
    padding: 15rpx;
    max-width: 900rpx;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 0 20rpx 2rpx #c7c7c744;
    .title {
        text-align: center;
        font-weight: 600;
        font-size: 34rpx;
        color: #333;
        margin-top: 20rpx;
    }

    .des {
        text-align: justify;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        /* 省略号显示的行数 */
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 20rpx auto;
        font-size: 28rpx;
        color: #666;
        line-height: 40rpx;
    }

    .show_all_img {
        height: fit-content;
        display: grid;
        grid-template-columns: repeat(auto-fill, 200rpx);
        row-gap: 40rpx;
        // 用在父容器 
        justify-content: center;
        align-content: center;
        //用在子元素单元格上
        justify-items: center;
        align-items: center;
        column-gap: 20rpx;
        row-gap: 20rpx;

        .el-image {
            width: 200rpx;
            height: 200rpx;
            border-radius: 8rpx;
        }

        .detail_page_one_img {
            height: 600rpx;
            border-radius: 8rpx !important;
        }
    }

    // 详情页 展示<2张图片
    .detail_page_img_num {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;

        .el-image {
            border-radius: 10rpx;
            min-height: 400rpx !important;
            margin: 20rpx auto;
            background-color: #cccccc55;
        }
    }

    .image__wrapper_less2 {
        display: flex !important;
        flex-wrap: nowrap;
        height: 310rpx !important;
        width: 100% !important;
        justify-content: space-between !important;
        column-gap: 8rpx;

        .el-image {
            box-sizing: border-box;
            height: 380rpx !important;
            width: 50% !important;
        }
    }

    .image_wrapper_odd {
        grid-template-columns: repeat(6, 1fr) !important;
        grid-auto-flow: row dense;

        .item-1-2 {
            grid-column-start: span 3;
            height: 280rpx !important;
        }

        .el-image {
            grid-column-start: span 2;
        }
    }

    .image_wrapper_4 {
        grid-template-columns: repeat(6, 1fr) !important;
        grid-template-rows: repeat(2, 210rpx);
        column-gap: 7rpx !important;

        .el-image:first-child {
            grid-column: span 6;
            /* 横向跨越3列 */
            grid-row-start: span 2;
            /* 纵向跨越2行 */
            height: 420rpx !important;
        }
    }

    .image__wrapper_less1 {
        display: flex !important;
        width: fit-content;
        height: 500rpx;
        border-radius: 10rpx;
        overflow: hidden;
        align-items: center;
        justify-content: center;

        .img-1 {
            width: 100%;
            height: 100%;
        }
        .video-container{
            .video{
                width:620rpx;
                border-radius: 8rpx;
            }
        }

    }

    .over-hidden {
        overflow: hidden;
        border-radius: 10rpx;

        .image_wrapper {
            height: fit-content;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            // 用在父容器 
            justify-content: space-between;
            align-content: center;
            //用在子元素单元格上
            justify-items: center;
            align-items: center;
            gap: 5rpx;
            overflow: hidden;
            border-radius: 10rpx;

            .el-image {
                width: 100%;
                height: 200rpx;
                overflow: hidden;
            }


            .image_child_wrapper {
                display: flex;
                flex-wrap: wrap;
                width: 33%;
                height: 215rpx;
                justify-content: space-between;
                align-items: flex-start;

                .el-image {
                    width: 46%;
                    height: 100rpx;
                    margin: 3rpx;
                }
            }

        }
    }


}

@include respondTo('desktop') {
    .show-card-container{
        box-shadow: none;
        box-sizing: border-box;
        cursor: pointer;
        transition: all 0.5s;
    min-height: 389px;

       &:hover{
        box-shadow: 0 0 20px 0 #aaaaaabd;
        transform: translateY(-7px);
       }
    }
}
</style>