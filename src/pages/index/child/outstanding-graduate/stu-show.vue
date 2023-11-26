<template>
    <view class="stu-show">
        <el-row justify="space-between">
            <el-col v-showMeta="i % 2 === 0 ? `animate__fadeInRight` : `animate__fadeInLeft`" @tap="goToDetail(stu)" :xs="24"
                :sm="{ span: 11, offset: 1 }" :md="{ span: 12, offset: 0 }" v-for="stu ,i  in currentStuData"
                :class="i % 2 === 1 ? 'el-col-border' : ''" :key="i">
                <StuCard :data="stu" />
            </el-col>
        </el-row>
        <!-- 分页 -->
        <el-pagination v-if="!isPC" v-model:current-page="currentPage" v-model:page-size="pageSize" :background="true"
            layout="prev, pager, next" :total="16" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </view>
</template>
   
   
<script setup>
import { ref, computed } from 'vue'
import PubSub from 'pubsub-js';
import StuCard from './stu-card.vue';
// 仓库状态数据
import { StuInfoStore } from '@/store/modules/stu.js';
// props值
const $props = defineProps({
    isPC: {
        type: Boolean,
        default: false
    }
})

const UseStuInfoStore = StuInfoStore();
const goToDetail = (data) => {
    console.log('跳转详情');
    UseStuInfoStore.updatecurrentStuData(data)
    UseStuInfoStore.updateCurrentRouterIndex(1)
    if ($props.isPC) {
        PubSub.publish('navgation-event', { e: '7' })
    }
}
// 分页
const currentPage = ref(1)
const pageSize = ref(6)
const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}

// 校友数据
const currentStuData = ref([
    {
        title: "21届毕业生--17网工本科班--胡海洋",
        desc: ["摩洛哥--卡萨布兰卡",
            "何为“经管”，我认为就是“经世济民，求社会之功；管财理家，谋大众之利”，1993年当我来到清华经管学院的时候，正是秉持着这样的理念，我开始如饥似渴地开启了学习生涯，学习了西方经济学等，了解了经济学的基本原理。吸收人类先进文明成果的同时，更加感受到中华文化的伟大，我们的传统文化不仅思想深邃圆融，内容广博，高扬道德，同时，也蕴含着丰富的管理思想，正是在中西方文化的汲取中滋养了我的管理理念。清华，给了我承担重任的肩膀。"
        ],
        releaseTime: "2022-08",
        imgList: []
    },
    {
        title: "斯泽夫学长在清华经管学院2021毕业典礼演讲",
        desc: ["登上大舞台融入新格局——在清华经管学院2021毕业典礼上的演讲全国政协常委，哈电集团董事长、党委书记斯泽夫2021年6月27日斯泽夫各位敬爱的老师、亲爱的同学们：大家下午好！我是斯泽夫，清华经管学院93级校友，很高兴作为今年毕业典礼的主讲嘉宾在这里跟大家分享我的观点。我学经济管理何为“经管”，我认为就是“经世济民，求社会之功；管财理家，谋大众之利”，1993年当我来到清华经管学院的时候，正是秉持着这样的理念，我",
            "何为“经管”，我认为就是“经世济民，求社会之功；管财理家，谋大众之利”，1993年当我来到清华经管学院的时候，正是秉持着这样的理念，我开始如饥似渴地开启了学习生涯，学习了西方经济学等，了解了经济学的基本原理。吸收人类先进文明成果的同时，更加感受到中华文化的伟大，我们的传统文化不仅思想深邃圆融，内容广博，高扬道德，同时，也蕴含着丰富的管理思想，正是在中西方文化的汲取中滋养了我的管理理念。清华，给了我承担重任的肩膀。"
        ],
        releaseTime: "2023-11-25",
        imgList: []
    }
])

</script>
   
   
<style scoped lang='scss'>
@import '@/style.scss';



.stu-show {
    box-sizing: border-box;
    width: 100%;
    height: fit-content;
    text-indent: 0 !important;
    margin: 20rpx auto;

    .el-row {
        height: 100%;

        .el-col {
            box-sizing: border-box;
            padding: 0 30rpx;
            padding-bottom: 80rpx;
        }

        .el-col-border {
            border-right: 1rpx solid #aaa;
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

    .stu-show {
        .el-row {
            .el-col {
                box-sizing: border-box;
                padding: 0;
                padding-bottom: 40rpx;
            }

            .el-col-border {
                border-right: none;
            }
        }
    }
}
</style>