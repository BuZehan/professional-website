<template>
    <view>
        <SwiperCard :dataArray="stuArray" class="m-card" />
        <view class="pc-card">
            <el-row justify="start" :gutter="20">
                <el-col v-for="stu, i in stuArray" :key="i"  :sm="8" :lg="6">
                    <el-card shadow="hover" :body-style="{ padding: '0px' }">
                        <el-image :src="stu.img" class="image" />
                        <div style="padding: 14px">
                            <view class="title">{{stu.title}}</view>
                            <view class="desc">{{stu.desc}}</view>
                        </div>
                    </el-card>  
                </el-col>
            </el-row>
        </view>
    </view>
</template>
<script setup>
import { ref } from 'vue'
import SwiperCard from "./swiper-card.vue"
// 学生
import stu1 from "@/static/news/stu1.png"
const stuArray = [{ img: stu1, title: '华为HCIP证书', desc: '22级专接本1班-张计龙', time: '2021.10.23' }, { img: stu1, title: '获奖证书--title', desc: '获奖证书', time: '2021.11.10' }]

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
  