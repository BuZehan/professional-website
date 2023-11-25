<template>
   <view class="stu-detail">

      <el-button @tap="back">返回</el-button>
   </view>
</template>
<script setup>
import { ref } from 'vue'
// 仓库状态数据
import { StuInfoStore } from '@/store/modules/stu.js';
const UseStuInfoStore = StuInfoStore();
const back = () => {
   UseStuInfoStore.updateCurrentRouterIndex(0)
   console.log(UseStuInfoStore.currentRouterIndex);
}
</script>
   
   
<style scoped lang='scss'></style>