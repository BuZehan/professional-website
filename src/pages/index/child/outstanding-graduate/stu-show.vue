<template>
    <view class="stu-show">
        <el-row justify="space-between">
            <el-col v-showMeta="i % 2 === 0 ? `animate__fadeInRight` : `animate__fadeInLeft`" @tap="goToDetail(i)" :xs="24"
                :sm="{ span: 11, offset: 1 }" :md="{ span: 12, offset: 0 }" v-for="i in 5" :class="i % 2 === 1 ? 'el-col-border' : ''"
                :key="i">
                <StuCard />
            </el-col>
        </el-row>
        <!-- 分页 -->
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :background="true"
            layout="prev, pager, next" :total="16" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </view>
</template>
   
   
<script setup>
import { ref,computed} from 'vue'
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
const goToDetail = (i) => {
    console.log('跳转详情');
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

</script>
   
   
<style scoped lang='scss'>
@import '@/style.scss';



.stu-show {
    box-sizing: border-box;
    width: 100%;
    height: fit-content;
    text-indent: 0 !important;

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
}</style>