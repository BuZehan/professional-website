<template>
    <view class="inform-modules">
        <!-- PC -->
        <el-row v-if="IsPC" class="inform-item hidden-sm-and-down" @tap="goToDetail(i)" v-for=" notice, i in NoticeData"
            :key="i" v-showMeta="`animate__fadeInRight`">
            <el-col v-if="notice" class="time" :xs="4" :sm="4">
                <view class="day">{{ i + 5 < 10 ? `0${i + 5}` : (i + 5) }}</view>
                        <view class="year">{{ notice.release_time }}</view>
            </el-col>
            <el-col v-if="notice" class="content" :xs="20" :sm="20">
                <view class="title">{{ notice.news_title }}</view>
                <!-- <view class="desc">{{ notice.news_content }}</view> -->
            </el-col>
        </el-row>
        <!-- mobile -->
        <el-row v-if="!IsPC" class="inform-item hidden-md-and-up" @tap="goToDetailM(i)" v-for=" notice, i in NoticeData"
            :key="i" v-showMeta="`animate__fadeInRight`">
            <el-col v-if="notice" class="time" :xs="4" :sm="4">
                <view class="day">{{ i + 5 < 10 ? `0${i + 5}` : (i + 5) }}</view>
                        <view class="year">{{ notice.release_time }}</view>
            </el-col>
            <el-col v-if="notice" class="content" :xs="20" :sm="20">
                <view class="title">{{ notice.news_title }}</view>
                <!-- <view class="desc">{{ notice.news_content }}</view> -->
            </el-col>
        </el-row>
        <!-- 分页 -->
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :background="true"
            layout="prev, pager, next" :total="UseWebDataStore.NoticeData.total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </view>
</template>
   
   
<script setup>
import { IsPC } from '@/hooks'
import { ref, computed } from 'vue';
import PubSub from 'pubsub-js';
import { getNews, getCertificate, getNotice } from "@/api"
// 新闻数据
import { WebDataStore } from '@/store/modules/web.js'
const UseWebDataStore = WebDataStore();
const NoticeData = computed(() => {
    return UseWebDataStore.NoticeData.list || []
});
// 分页
// 分页
const currentPage = computed({
    get() {
        return UseWebDataStore.NoticeData.nextPage - 1
    },
    set(v) {
        // console.log(v);
    }
})
const pageSize = ref(10)
const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = async (val) => {
    console.log(`current page: ${val}`)
    let certificateData = await getNotice({ page: +val, limit: 10 })
    UseWebDataStore.SetNoticeData(certificateData)
}
// PC端跳转
const goToDetail = (i) => {
    UseWebDataStore.SetNoticeDataIndex(i)
    PubSub.publish('go-to-detail', { i, type: 'inform' })
}
// 移动端跳转
// console.log(NoticeData);
const goToDetailM = (i) => {
    uni.navigateTo({
        url: "/pages/index/child/news/inform-detail?id=1"
    })
}

</script>
   
   
<style scoped lang='scss'>
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
        overflow: hidden;
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
        display: -webkit-box;

        .title {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .desc {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
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
        overflow: hidden;

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

            .title {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .desc {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
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