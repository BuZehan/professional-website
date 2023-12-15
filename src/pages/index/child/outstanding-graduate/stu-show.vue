<template>
    <view class="stu-show">
        <el-row justify="space-between">
            <!-- PC -->
            <el-col class="hidden-sm-and-down"
                v-showMeta="(i + 1) % 2 === 0 ? `animate__fadeInRight` : `animate__fadeInLeft`" @tap="goToDetail(stu)"
                :xs="24" :sm="{ span: 11, offset: 1 }" :md="{ span: 12, offset: 0 }" v-for="stu, i  in currentStuData"
                :class="(i + 1) % 2 === 1 ? 'el-col-border' : ''" :key="i">
                <StuCard :data="stu" />
            </el-col>
            <!-- 移动端 -->
            <el-col class="hidden-md-and-up" v-showMeta="(i + 1) % 2 === 0 ? `animate__fadeInRight` : `animate__fadeInLeft`"
                @tap="goToDetailForMobile(stu.id)" :xs="24" :sm="{ span: 11, offset: 1 }" :md="{ span: 12, offset: 0 }"
                v-for="stu, i  in currentStuData" :class="(i + 1) % 2 === 1 ? 'el-col-border' : ''" :key="i">
                <StuCard :data="stu" />
            </el-col>
        </el-row>
        <!-- 分页 -->
        <el-pagination v-if="!isPC" v-model:current-page="currentPage" v-model:page-size="pageSize" :background="true"
            layout="prev, pager, next" :total="UseWebDataStore.AlumniData.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </view>
</template>
   
   
<script setup>
import { ref, computed,toRaw } from 'vue'
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
import { WebDataStore } from '../../../../store/modules/web';
const UseWebDataStore = WebDataStore()
const currentStuData = computed(() => {
    let res = UseWebDataStore.AlumniData?.list?.map(stu => {
        const imgCount = (stu.content?.match(/<img\s.*?>/g) || []).length;
        // 匹配<img />标签的href链接
        const hrefList = stu.content?.match(/<img\s.*?src="(.*?)".*?>/g)?.map(imgTag => {
            const hrefMatch = imgTag.match(/src="(.*?)"/);
            return hrefMatch ? hrefMatch[1] : '';
        });
        return {
            id: stu.id,
            title: stu.title,
            desc: stu.content,
            releaseTime: stu.release_time,
            imgList: hrefList
        }
    })
    return res
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
// 移动端跳转
const goToDetailForMobile = (id) => {
    console.log('跳转详情 for mobile');
    UseStuInfoStore.updatecurrentStuData(id)
    // UseStuInfoStore.updateCurrentRouterIndex(1)
    if ($props.isPC) {
        PubSub.publish('navgation-event', { e: '7' })
    }
    let stuData = currentStuData.value.filter(item => item.id === id).map(item => {
        // console.log(item);
        return {
            title: item.title,
            desc: item.desc,
            imgList: item.imgList,
            releaseTime:item.releaseTime
        }
    })
    UseStuInfoStore.updatecurrentStuData(toRaw(stuData))
    uni.navigateTo({
        url: "/pages/index/child/outstanding-graduate/stu-detail-m"
    })
}
// 分页
const currentPage = ref(1)
const pageSize = ref(6)
const handleSizeChange = (val) => {
    // console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    // console.log(`current page: ${val}`)
}



</script>
   
<style scoped lang='scss'>
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