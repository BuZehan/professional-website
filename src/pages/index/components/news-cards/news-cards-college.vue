<template>
    <div>
        <SwiperCard :dataArray="collegeArray" class="m-card" />
        <view class="pc-card">
            <el-row justify="start" :gutter="20">
                <el-col v-for="card, i in cardNum" :key="i" :sm="8" :lg="6">
                    <el-card shadow="hover" :body-style="{ padding: '0px' }">
                        <el-image src="../../../../static/news/1.jpg" class="image" />
                        <div style="padding: 14px">
                            <view class="title">华为中国大学生ICT大赛</view>
                            <view class="desc">河北传媒学院代表队</view>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </view>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import SwiperCard from './swiper-card.vue'
// 学院
import img1 from '@/static/news/1.jpg'
import img2 from '@/static/news/2.jpg'
import img3 from '@/static/news/3.jpg'
import auth from '@/static/news/authorization.jpg'
const collegeArray = [{ img: auth, title: '华为ICT学院授权证书', desc: '河北传媒学院，', time: '2021.11.10', label: 'index' },
{ img: img1, title: '华为中国大学生ICT大赛2021', desc: '实践赛-河北赛区本科组云赛道中荣获三等奖', time: '2021.11.10' },
{ img: img2, title: '华为中国大学生ICT大赛2021', desc: '实践赛-河北赛区本科组网络赛道中荣获三等奖', time: '2021.11.10' },
{ img: img3, title: '华为中国大学生ICT大赛2021', desc: '实践赛-河北赛区本科组网络赛道中荣获三等奖', time: '2021.11.10' },
]
const cardNum = ref(5)
</script>

<style scoped lang="scss">
@import '../../../../style.scss';

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
                align-items: center;
                justify-content: center;

                .el-card {
                    cursor: pointer;
                    max-width: 460rpx;
                    height: 500rpx;

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
  