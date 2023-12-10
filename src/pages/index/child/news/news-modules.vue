<template>
    <view class="inform-modules">
        <template v-for="news, i in newsData" :key="i">
            <!-- Mobile -->
            <view v-if="i % 2 === 1" @tap="goToDetailM(i)" class="pc-container-r hidden-md-and-up"
                v-showMeta="`animate__fadeInRight`">
                <el-row class="news-item">
                    <el-col :xs="24" :xl="5" class="img-wrapper">
                        <el-image class="image" fit="fill" :src="news.images[0].image_path" />
                    </el-col>
                    <el-col :xs="24" :xl="2" class="time">
                        <el-row>
                            <el-col :xs="3" :xl="17">
                                <view class="year">{{ news.release_time.split('-')[0] }}</view>
                            </el-col>
                            <el-col :xs="5">
                                <view class="day">{{ news.release_time.split('-')[1] }}-{{ news.release_time.split('-')[2]
                                }}
                                </view>
                            </el-col>
                        </el-row>
                        <view class="more hidden-sm-and-down"><el-icon :size="26" @tap="goToDetail(i)">
                                <Right />
                            </el-icon></view>
                    </el-col>
                    <el-col :xs="24" class="desc">
                        <view class="desc-title">{{ news.news_title }}</view>
                        <p>{{ news.news_content }}
                        </p>
                    </el-col>
                </el-row>
            </view>
            <view v-if="i % 2 === 0" @tap="goToDetailM(i)" class="pc-container-l hidden-md-and-up"
                v-showMeta="`animate__fadeInLeft`">
                <el-col :xs="24" :md="6" class="img-wrapper">
                    <el-image class="image" fit="fill" :src="news.images[0].image_path" />
                </el-col>
                <el-row class="news-item">
                    <el-col :xs="24" :md="3" :xl="2" class="time">
                        <el-row>
                            <el-col :xs="3" :md="24" :xl="17">
                                <view class="year">{{ news.release_time.split('-')[0] }}</view>
                            </el-col>
                            <el-col :xs="5" :md="24">
                                <view class="day">{{ news.release_time.split('-')[1] }}-{{ news.release_time.split('-')[2]
                                }}
                                </view>
                            </el-col>
                        </el-row>
                        <view class="more hidden-sm-and-down"><el-icon :size="26">
                                <Right />
                            </el-icon></view>
                    </el-col>
                    <view class="more hidden-sm-and-down" @tap="goToDetail(i)"><el-icon :size="26">
                            <Right />
                        </el-icon></view>
                    <el-col :xs="24" :md="15" class="desc">
                        <view class="desc-title">{{ news.news_title }}</view>
                        <p>{{ news.news_content }}
                        </p>
                    </el-col>

                </el-row>
            </view>
            <!-- PC -->
            <view v-if="i % 2 === 1" class="pc-container-r  hidden-sm-and-down" v-showMeta="`animate__fadeInRight`">
                <el-row class="news-item">
                    <el-col :xs="24" :md="6" :xl="5" class="img-wrapper">
                        <el-image class="image" fit="fill" :src="news.images[0].image_path" />
                    </el-col>
                    <el-col :xs="24" :md="3" :xl="2" class="time">
                        <el-row>
                            <el-col :xs="3" :md="24" :xl="17">
                                <view class="year">{{ news.release_time.split('-')[0] }}</view>
                            </el-col>
                            <el-col :xs="5" :md="24">
                                <view class="day">{{ news.release_time.split('-')[1] }}-{{ news.release_time.split('-')[2]
                                }}
                                </view>
                            </el-col>
                        </el-row>
                        <view class="more hidden-sm-and-down"><el-icon :size="26" @tap="goToDetail(i)">
                                <Right />
                            </el-icon></view>
                    </el-col>
                    <el-col :xs="24" :md="15" class="desc">
                        <view class="desc-title">{{ news.news_title }}</view>
                        <p>{{ news.news_content }}
                        </p>
                    </el-col>
                </el-row>
            </view>
            <view v-if="i % 2 === 0" class="pc-container-l hidden-sm-and-down" v-showMeta="`animate__fadeInLeft`">
                <el-row class="news-item">
                    <el-col :xs="24" :md="3" :xl="2" class="time">
                        <view class="year">{{ news.release_time.split('-')[0] }}</view>
                        <view class="day">{{ news.release_time.split('-')[1] }}-{{ news.release_time.split('-')[2] }}</view>
                        <view class="more hidden-sm-and-down"><el-icon :size="26" @tap="goToDetail(i)">
                                <Right />
                            </el-icon></view>
                    </el-col>
                    <el-col :xs="24" :md="15" :xl="17" class="desc">
                        <view class="desc-title">{{ news.news_title }}</view>
                        <p>{{ news.news_content }}
                        </p>
                    </el-col>
                    <el-col :xs="24" :md="6" :xl="5" class="img-wrapper">
                        <el-image class="image" fit="fill" :src="news.images[0].image_path" />
                    </el-col>
                </el-row>
            </view>
        </template>
        <!-- 分页 -->
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :background="true"
            layout="prev, pager, next" :total="UseWebDataStore.newsData.total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </view>
</template>
   
   
<script setup>
import { ref, computed } from 'vue'
import PubSub from 'pubsub-js'
import { Right } from '@element-plus/icons-vue'
import { getNews, getCertificate, getNotice } from "@/api"

// 新闻数据
import { WebDataStore } from '@/store/modules/web.js'
const UseWebDataStore = WebDataStore();
const newsData = computed(() => {
    return UseWebDataStore.newsData.list;
});
// 分页
const currentPage = computed({
    get() {
        return UseWebDataStore.newsData.nextPage - 1
    },
    set(v) {
        // console.log(v);
    }
})
const pageSize = ref(5)
const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = async (val) => {
    console.log(`current page: ${val}`)
    let newsData = await getNews({ page: +val, limit: 5 })
    console.log(newsData);
    UseWebDataStore.SetNewsData(newsData)
}
const goToDetail = (i) => {
    UseWebDataStore.SetNewsDataIndex(i)
    PubSub.publish('go-to-detail', { i, type: 'news' })
}
// 移动端跳转
const goToDetailM = () => {
    uni.navigateTo({
        url: '/pages/index/child/news/news-detail?id=1',
    })
}


</script>
   
   
<style scoped lang='scss'>
.inform-modules {
    height: fit-content;
    text-indent: 0 !important;

    .img-wrapper {
        overflow: hidden;

        .el-image {
            width: 100%;
            height: 100%;
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

    .pc-container-r,
    .pc-container-l {
        height: 100%;
        width: 100%;
        padding: 0;
        box-sizing: border-box;
        padding: 20rpx;
        position: relative;
        border: 1rpx solid #ddd;
        margin-bottom: 60rpx;

        &::after {
            content: "";
            background: url('./image/right-news.png') no-repeat bottom left;
            background-size: cover;
            position: absolute;
            width: 1000rpx;
            opacity: 1;
            height: 100%;
            right: 0;
            bottom: 0;
            z-index: -1;
        }

        .news-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .time {
            width: 100%;
            margin: 10rpx 0;

            .el-row {
                width: 100%;

                .el-col {
                    .year {
                        font-size: 34rpx;
                    }
                }
            }
        }

        .desc {
            .desc-title {
                font-size: 34rpx;
                color: #333;
            }

            p {
                font-size: 28rpx;
                color: #666;
                margin-top: 40rpx;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                /* 省略号显示的行数 */
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}

@include respondTo('desktop') {

    .pc-container-r,
    .pc-container-l {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: normal;
        line-height: 46rpx;
        position: relative;
        margin-bottom: 80rpx;

        &::after {
            content: "";
            background: url('./image/right-news.png') no-repeat top right;
            background-size: cover;
            position: absolute;
            width: 1000rpx;
            opacity: 1;
            height: 100%;
            right: 0;
            bottom: 0;
            z-index: -1;
        }

        .news-item {
            height: 380rpx;
            border: 1rpx solid #cccccc8d;
            box-sizing: border-box;
            width: 100%;

            &:hover {
                .more {
                    background-color: var(--CHAHUAHONG);
                    color: #fff !important;
                }

                .image {
                    transform: scale(1.3);
                }
            }

            .img-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                overflow: hidden;
                position: relative;
                box-sizing: border-box;

                .image {
                    transition: all .9s;
                    position: absolute;
                    height: 100%;
                    bottom: 0;
                }
            }

            .time {
                color: var(--CHAHUAHONG);
                box-sizing: border-box;
                padding: 60rpx 40rpx;

                .year {
                    font-weight: bold;
                    font-size: 40rpx;
                }

                .day {
                    font-weight: normal;
                    font-size: 28rpx;
                }

                .more {
                    font-size: 28rpx;
                    color: var(--CHAHUAHONG);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all .4s;
                    width: 60rpx;
                    margin: 0 auto;
                    margin-top: 60rpx;
                    transform: translateX(-40rpx);
                    cursor: pointer;

                }
            }

            .desc {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                box-sizing: border-box;
                padding-right: 20rpx;
                position: relative;

                .desc-title {
                    font-size: 32rpx;
                    color: #333;
                    font-weight: bold;
                    margin-top: 56rpx;
                }

                p {
                    margin-top: 20rpx;
                    font-size: 28rpx;
                    color: #666;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    /* 省略号显示的行数 */
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }

    .pc-container-l {
        &::after {
            content: "";
            background: url('./image/left-news.png') no-repeat top left;
            background-size: cover;
            position: absolute;
            width: 1000rpx;
            opacity: 1;
            height: 100%;
            left: 0;
            bottom: 0;
            z-index: -1;
        }
    }
}</style>