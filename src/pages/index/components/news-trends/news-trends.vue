<template>
    <view class="news-container">
        <NewsCard />
    </view>
</template>
   
   
<script setup>
   import NewsCard from './news-card.vue'
</script>
   
   
<style scoped lang='scss'>
@import '../../../../style.scss';

@include respondTo('mobile') {
    .news-container{
        width: 90vw;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
}
  

@include respondTo('desktop') {
    .news-container{
        width: 100vw;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin: 50rpx auto;
    }
}
</style>