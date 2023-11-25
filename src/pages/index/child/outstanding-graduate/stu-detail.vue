<template>
   <view class="stu-detail">
    
    <el-button @tap="back">返回</el-button>
   </view>
</template>
   
   
<script setup>
   import {ref} from 'vue'
   import PubSub from 'pubsub-js';
   const back = () => {
      PubSub.publish('stu-click-event',{v:0})
   }
</script>
   
   
<style scoped lang='scss'>
   
</style>