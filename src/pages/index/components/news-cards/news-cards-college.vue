<template>
    <div v-if="collegeData">
        <SwiperCard :dataArray="collegeData" class="m-card" />
        <view class="pc-card">
            <el-row justify="start" :gutter="20">
                <el-col v-for="book, i in collegeData.slice(0, 8)" :key="i" :sm="8" :lg="6">
                    <el-card shadow="hover" :body-style="{ padding: '0px' }" @tap="clickNewsItem(book.id)">
                        <div class="pdfWrapper"
                            v-if="fileType.includes(book.honorImage[0].image_path.match(/\.([^.]+)$/)[1])"
                            v-pdf="book.honorImage[0].image_path">
                        </div>
                        <el-image v-else :src="book.honorImage[0].image_path" class="image" />
                        <div style="padding: 14px">
                            <view class="title">{{ book.news_title }}</view>
                            <view class="desc">{{ book.news_content }}</view>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </view>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import SwiperCard from './swiper-card.vue'

// 获取数据监听点击事件
import { WebDataStore } from '@/store/modules/web.js'
const UseWebDataStore = WebDataStore();
const collegeData = computed(() => UseWebDataStore.Certificate.list?.filter(item => item.type === '学院证书'));
// 卡片点击事件
const clickNewsItem = (i) => {
    // console.log('通知公告下标',i);
    UseWebDataStore.SetCertificateIndex(i)
    UseWebDataStore.SetNewsDetailIndex([1, 5])
    PubSub.publish('navgation-event', { e: '8' })
}

// 文档类型
const fileType = ['pdf', 'doc', 'docx']

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
                    height: 500rpx;
                    width: fit-content;

                    .title {
                        font-weight: bold;
                    }

                    .desc {
                        margin-top: 20rpx;
                        font-size: 28rpx;
                        color: #666;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        /* 设置显示的行数 */
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
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
  