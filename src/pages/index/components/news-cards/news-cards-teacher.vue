<template>
    <view>
        <SwiperCard :dataArray="teacherData" class="m-card" />
        <view class="pc-card">
            <el-row justify="start" :gutter="20">
                <el-col v-for="teacher, i in teacherData" :key="i"  :sm="8" :lg="6">
                    <el-card @tap="clickNewsItem(teacher.id)" shadow="hover" :body-style="{ padding: '0px' }">
                        <div class="pdfWrapper"
                            v-if="fileType.includes(teacher.honorImage[0].image_path.match(/\.([^.]+)$/)[1])"
                            v-pdf="teacher.honorImage[0].image_path">
                        </div>
                        <el-image v-else :src="teacher.honorImage[0].image_path" class="image" />
                        <div style="padding: 14px">
                            <view class="title">{{teacher.news_content}}</view>
                            <view class="desc">{{teacher.news_title}}</view>
                        </div>
                    </el-card>  
                </el-col>
            </el-row>
        </view>
    </view>
</template>
<script setup>
import { ref,computed } from 'vue'
import SwiperCard from "./swiper-card.vue"
import { WebDataStore } from '@/store/modules/web.js'
const UseWebDataStore = WebDataStore();
const teacherData = computed(() => UseWebDataStore.Certificate.list.filter(item => item.type === '教师证书'));
// 卡片点击事件
const clickNewsItem = (id) => {
    // console.log('通知公告下标',id);
    UseWebDataStore.SetCertificateIndex(id)
    UseWebDataStore.SetNewsDetailIndex([1, 5])
    PubSub.publish('navgation-event', { e: '8' })
}
const fileType = ['pdf', 'doc', 'docx']

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
                    height: 500rpx;
                    width: fit-content;
                    .title {
                        font-weight: bold;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        /* 设置显示的行数 */
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
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
  