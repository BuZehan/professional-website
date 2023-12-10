<template>
    <view>
        <SwiperCard :dataArray="StuData" class="m-card" />
        <view class="pc-card">
            <el-row justify="start" :gutter="20">
                <el-col v-for="stu, i in StuData" :key="i"  :sm="8" :lg="6">
                    <el-card shadow="hover" :body-style="{ padding: '0px' }" @tap="clickNewsItem(stu.id)">
                        <el-image :src="stu.honorImage[0].image_path" class="image" />
                        <div style="padding: 14px">
                            <view class="title">{{stu.news_title}}</view>
                            <view class="desc">{{stu.news_conten}}</view>
                        </div>
                    </el-card>  
                </el-col>
            </el-row>
        </view>
    </view>
</template>
<script setup>
import { computed } from 'vue'
import { WebDataStore } from '@/store/modules/web.js'
import SwiperCard from "./swiper-card.vue"
const UseWebDataStore = WebDataStore();
const StuData = computed(() => UseWebDataStore.Certificate.list.filter(item => item.type === '学生证书'));
// 卡片点击事件
const clickNewsItem = (id) => {
    // console.log('通知公告下标',i);
    UseWebDataStore.SetCertificateIndex(id)
    UseWebDataStore.SetNewsDetailIndex([1, 5])
    PubSub.publish('navgation-event', { e: '8' })
}
</script>

<style scoped lang="scss">

@include respondTo('mobile') {
.m-card{
    display: block;
}

.pc-card{
    display: none;
}
}

@include respondTo('desktop') {
    .m-card{
        display: none;
    }
    
    .pc-card{
        display: block;
        width: 70vw;
        max-width: 1200px;
        .el-card{
            cursor: pointer;
        }
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

    }
}
</style>
  