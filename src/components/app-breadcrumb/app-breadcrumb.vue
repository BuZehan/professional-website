<template>
    <el-row class="daohang" justify="center" style="padding: 20px 0;">
        <el-col :xs="{ span: 20 }" :sm="{ span: 20 }" :md="{ span: 18 }">
            <el-image src="../../static/wz.png" />
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item  @tap="navgationTo(mParams)" class="hidden-sm-and-up">{{ txt }}</el-breadcrumb-item>
                <el-breadcrumb-item  @tap="pcNavgationTo(pcParams)" class="hidden-xs-only">{{ txt }}</el-breadcrumb-item>
                <el-breadcrumb-item  v-for="t,i in currentPageTxtArr" @tap="changePage(i,t)" :key="t">{{ t }}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
    </el-row>
</template>
   
   
<script setup>
import { uni } from '@dcloudio/uni-h5';
import { ArrowRight } from '@element-plus/icons-vue'

const $props = defineProps({
    txt: {
        type: String,
        default: '首页'
    },
    mParams: {
        type: String,
        default: 'index'
    },
    pcParams: {
        type: String,
        default: '1'
    },
    currentPageTxtArr: {
        type: Array,
        default: () => []
    }
})
// pc端跳转
const pcNavgationTo = (e) => {
    PubSub.publish('navgation-event', { e })
};
// 跳转---移动端
const navgationTo = (url) => {
    uni.navigateTo({
        url: `/pages/${url}/${url}`,
    });
};
const $emits =defineEmits(['changePage'])
// 点击当前页面
const changePage = (i) => {
    if(i === 0) {
        $emits('changePage',0)
    }
};


</script>
   
   
<style scoped lang='scss'>
.daohang {
    position: relative;
    z-index: 10;
    .el-col {
        display: flex;
        align-items: center;

        .el-image {
            transform: scale(.7);
        }

        :deep(.el-breadcrumb) {
            .el-breadcrumb__inner {
                cursor: pointer !important;
                color: #fff;
            }
        }
    }
}
</style>