<template>
    <view class="inform-modules">
        <!-- PC -->
        <el-row class="inform-item hidden-sm-and-down" @tap="goToDetail(i)" v-for="i in 5" :key="i" v-showMeta="`animate__fadeInRight`">
            <el-col class="time" :xs="4" :sm="4">
                <view class="day">{{ i + 5 < 10 ? `0${i + 5}` : (i + 5) }}</view>
                        <view class="year">2023/1{{ i }}</view>
            </el-col>
            <el-col class="content" :xs="20" :sm="20">
                <view class="title">恭喜 {{ i }}XXX 同学顺利考过华为HCIP-Cloud Computing证书！</view>
                <view class="desc"></view>
            </el-col>
        </el-row>
        <!-- mobile -->
        <el-row class="inform-item hidden-md-and-up" @tap="goToDetailM(i)" v-for="i in 5" :key="i" v-showMeta="`animate__fadeInRight`">
            <el-col class="time" :xs="4" :sm="4">
                <view class="day">{{ i + 5 < 10 ? `0${i + 5}` : (i + 5) }}</view>
                        <view class="year">2023/1{{ i }}</view>
            </el-col>
            <el-col class="content" :xs="20" :sm="20">
                <view class="title">恭喜 {{ i }}XXX 同学顺利考过华为HCIP-Cloud Computing证书！</view>
                <view class="desc"></view>
            </el-col>
        </el-row>
        <!-- 分页 -->
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :background="true"
            layout="prev, pager, next" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </view>
</template>
   
   
<script setup>
import { ref } from 'vue';
import PubSub from 'pubsub-js';

// 分页
const currentPage = ref(1)
const pageSize = ref(6)
const total = ref(24)
const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}
// PC端跳转
const goToDetail = (i) => {
    PubSub.publish('go-to-detail', { i, type: 'inform' })
}
// 移动端跳转
const goToDetailM = (i) => {
    uni.navigateTo({
        url:"/pages/index/child/news/inform-detail?id=1"
    })
}
</script>
   
   
<style scoped lang='scss'>
@import '@/style.scss';

.inform-modules {
    text-indent: 0 !important;

    .inform-item {
        border: 1px solid #ccc;
        background-color: #fff;
        box-sizing: border-box;
        padding: 40rpx;
        cursor: pointer;
        transition: all .25s;
        margin-bottom: 40rpx;

        &:hover {
            box-shadow: 0 6px 20rpx 0 #aaaaaaa9;
        }
    }

    .time {
        box-sizing: border-box;
    }

    .content {
        display: flex;
        align-items: center;
    }

    :deep(.el-pagination) {
        display: flex;
        justify-content: center;
        margin-top: 40rpx;

        .btn-next,
        .btn-prev {
            border: none;
            height: 32px;
            cursor: pointer;
            width: 32px;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgb(200, 20, 20);
            color: #eee;
        }

        .number {
            background-color: rgb(200, 20, 20);
            color: #eee;

            &:hover {
                color: #fff;
            }
        }

        .is-active {
            background-color: #fff !important;
            color: rgb(200, 20, 20) !important;
            border: 1rpx solid rgb(200, 20, 20);
        }

        .btn-prev {
            border: none;
        }
    }
}

@include respondTo('mobile') {
    .inform-item {
        padding: 16rpx !important;

        .time {
            padding-left: 0 !important;

            .day {
                font-weight: bold;
                font-size: 40rpx;
                text-align: center;
            }

            .year {
                font-size: 28rpx;
                text-align: center;
            }
        }

        .content {
            line-height: 42rpx;
            color: #333;
            box-sizing: border-box;
            padding-left: 40rpx;
        }
    }

}

@include respondTo('desktop') {
    .inform-item {
        padding: 40rpx;
    }

    .time {
        padding-left: 40rpx;

        .day {
            font-weight: bold;
            font-size: 60rpx;
        }

        .year {
            font-size: 40rpx;
        }
    }
}</style>