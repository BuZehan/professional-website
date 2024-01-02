<template>
    <view class="inform-modules">
        <!-- PC -->
        <el-row v-if="IsPC" class="inform-item " @tap="goToDetail(book.id)"
            v-for="book, i in ShowData" :key="i" v-showMeta="`animate__fadeInRight`">
            <el-col v-if="book" class="time" :xs="4" :sm="4">
                <view class="day">{{ i + 5 < 10 ? `0${i + 5}` : (i + 5) }}</view>
                        <view class="year">{{ book.release_time }}</view>
            </el-col>
            <el-col class="content" :xs="20" :sm="20">
                <view class="title">{{ book.news_title }}/</view>
                <view v-if="book.type === '教师证书'" style="color:rgb(223, 26, 26);display: flex;align-items: center;">
                    <view style="margin-right: 20rpx;">{{ book.type }}</view>
                    <el-image :src="top" fit="cover" />
                </view>
                <view v-else style="color:#666;">{{ book.type }}</view>
            </el-col>
        </el-row>
        <!-- mobile -->
        <el-row v-if="!IsPC" class="inform-item" @tap="goToDetailM(book.id)"
            v-for="book, i in ShowData" :key="i" v-showMeta="`animate__fadeInRight`">
            <el-col class="time" :xs="4" :sm="4">
                <view class="day">{{ i + 5 < 10 ? `0${i + 5}` : (i + 5) }}</view>
                        <view class="year">{{ book.release_time }}</view>
            </el-col>
            <el-col class="content" :xs="20" :sm="20">
                <view class="title">{{ book.news_title }}/</view>
                <view v-if="book.type === '教师证书'" style="color:rgb(223, 26, 26);display: flex;align-items: center;">
                    <view style="margin-right: 20rpx;">{{ book.type }}</view>
                    <el-image :src="top" fit="cover" />
                </view>
                <view v-else style="color:#666;">{{ book.type }}</view>
            </el-col>
        </el-row>
        <!-- 分页 -->
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :background="true"
            layout="prev, pager, next" :total="UseWebDataStore.Certificate.total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </view>
</template>
   
   
<script setup>
import { IsPC } from '@/hooks'
import { ref, computed } from 'vue';
import PubSub from 'pubsub-js';
import { getNews, getCertificate, getNotice } from "@/api"
import top from './image/top.png'
// 新闻数据
import { WebDataStore } from '@/store/modules/web.js'
const UseWebDataStore = WebDataStore();
// 教师证书 -> 置顶
const TeacherCertificate = computed(() => {
    return UseWebDataStore.TeacherCertificate.list
})
// 展示数据
const ShowData = computed(() => {
    let res = TeacherCertificate.value
    let cer = UseWebDataStore.Certificate.list.filter((item) => {
        return item.type != '教师证书'
    })
    return [...res, ...cer]
})
// 分页
const currentPage = computed({
    get() {
        return UseWebDataStore.Certificate.nextPage - 1
    },
    set(v) {
        // console.log(v);
    }
})
const pageSize = ref(10)
const handleSizeChange = (val) => {
    // console.log(`${val} items per page`)
}
const handleCurrentChange = async (val) => {
    // console.log(`current page: ${val}`)
    // console.log(certificateData);
    // console.log(certificateData);  // 获奖证书
    let certificateData = await getCertificate({ page: +val, limit: 10 })
    UseWebDataStore.SetCertificateData(certificateData)
}

// PC端跳转
const goToDetail = (i) => {
    // console.log(i);
    UseWebDataStore.SetCertificateIndex(i)
    PubSub.publish('go-to-detail', { i, type: 'certificate' })
}
// 移动端跳转
const goToDetailM = (i) => {
    UseWebDataStore.SetCertificateIndex(i)
    UseWebDataStore.SetNewsDetailIndex([1, 5])
    uni.navigateTo({
        url: `/pages/index/child/news/certificate-detail?id=${i}`
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
        padding: 20rpx;
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
        justify-content: space-between;
        .el-image{
            display: flex;
            align-items: center;
            justify-content: center;
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
}
</style>