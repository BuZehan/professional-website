<template>
    <div v-if="Certificate">
        <SwiperCard :dataArray="collegeArray" class="m-card" />
        <view class="pc-card" >
            <el-row justify="start" :gutter="20">
                <el-col v-for="book, i in Certificate" :key="i" :sm="8" :lg="6">
                    <el-card shadow="hover" :body-style="{ padding: '0px' }" @tap="clickNewsItem(i)">
                        <el-image :src="book.honorImage[0].image_path" class="image" />
                        <div style="padding: 14px">
                            <view class="title">{{book.news_title}}</view>
                            <view class="desc">{{book.news_content}}</view>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </view>
    </div>
</template>
<script setup>
import { ref ,computed} from 'vue'
import SwiperCard from './swiper-card.vue'
// 学院
import img1 from '@/static/news/1.jpg'
import img2 from '@/static/news/2.jpg'
import img3 from '@/static/news/3.jpg'
import auth from '@/static/news/authorization.jpg'
const collegeArray = [{ img: auth, title: '华为ICT学院授权证书', desc: '河北传媒学院，', time: '2021.11.10', label: 'index' },
{ img: img1, title: '华为中国大学生ICT大赛2021', desc: '实践赛-河北赛区本科组云赛道中荣获三等奖', time: '2021.11.10' },
{ img: img2, title: '华为中国大学生ICT大赛2021', desc: '实践赛-河北赛区本科组网络赛道中荣获三等奖', time: '2021.11.10' },
{ img: img3, title: '华为中国大学生ICT大赛2021------压缩图', desc: '实践赛-河北赛区本科组网络赛道中荣获三等奖', time: '2021.11.10' },
]
// 新闻数据
import {WebDataStore} from '@/store/modules/web.js'
import {MainStore} from '@/store'
const UseMainStore = MainStore()
const UseWebDataStore = WebDataStore();
const Certificate = UseWebDataStore.Certificate.list;
// 卡片点击事件
const clickNewsItem = (i) => {
    // console.log('通知公告下标',i);
    UseWebDataStore.SetCertificateIndex(i)
    UseWebDataStore.SetNewsDetailIndex([1,5])   
    PubSub.publish('navgation-event', { e: '8' })
}

</script>

<style scoped lang="scss">

@include respondTo('mobile') {
    .pc-card {
        display: none;
    }

    .m-card {
        display: block;
    }
}

@include respondTo('desktop') {
    .m-card {
        display: none;
    }

    .pc-card {
        display: block;
        width: 70vw;
        height: fit-content;
        max-width: 1200px;

        .el-row {
            height: fit-content;
            box-sizing: border-box;
            padding-top: 20rpx;

            .el-col {
                text-align: justify;
                margin-bottom: 40rpx;
                box-sizing: border-box;
                display: flex;
                align-items: flex-start;
                justify-content: center;

                .el-card {
                    cursor: pointer;
                    max-width: 400rpx;
                    height: fit-content;
                    max-height: 400px;
                    .image{
                        max-height: 300px;
                        min-height: 250;
                    }
                    .title {
                        font-weight: bold;
                    }

                    .desc {
                        margin-top: 20rpx;
                        font-size: 28rpx;
                        color: #666;
                    }
                }

            }
        }

        .pagination {
            .el-col {
                .el-pagination {
                    :deep(.btn-next) {
                        border: 0;
                        background-color: transparent;
                        box-sizing: border-box;
                        padding: 20rpx 0;
                        cursor: pointer;
                    }

                    :deep(.btn-prev) {
                        border: 0;
                        background-color: transparent;
                        box-sizing: border-box;
                        padding: 20rpx 0;
                        cursor: pointer;
                    }

                    :deep(.is-active) {
                        background-color: #d00202c9 !important;
                    }

                    :deep(.number) {
                        &:hover {}
                    }

                    :deep(.more) {
                        &:hover {
                            color: #d00202c9;
                        }
                    }

                    :deep(.btn-prev .is-first) {
                        background-color: red;
                    }
                }
            }
        }

    }

    .m-card {
        display: none;
    }
}
</style>
  