<template>
    <view class="graduate-container">
        <el-row>
            <el-col :lg="12"  v-for="stu in stuList" :key="stu.desc">
                <ShowCard @clikCardEvent="clikCardEvent" :width="90" @PlayHandler="videoPlayHandler" :vId="stu?.id"  :data="stu" />
            </el-col>
        </el-row>
    </view>
</template>
   
   
<script setup>
import {ref} from 'vue'
import PubSub from 'pubsub-js';
import ShowCard from "../show-card.vue"

import hhy_img_1 from './image/21-17-bk-hhy/1.jpg';
import hhy_img_2 from './image/21-17-bk-hhy/2.jpg';
import hhy_img_3 from './image/21-17-bk-hhy/3.jpg';
import hhy_img_4 from './image/21-17-bk-hhy/4.jpg';
import hhy_img_5 from './image/21-17-bk-hhy/5.jpg';
import hhy_img_6 from './image/21-17-bk-hhy/6.jpg';
import hhy_img_7 from './image/21-17-bk-hhy/7.jpg';
import hhy_img_8 from './image/21-17-bk-hhy/8.jpg';
import hhy_img_9 from './image/21-17-bk-hhy/9.jpg';

import cph_img_1 from './image/21-z-cph/1.jpg';
import cph_img_2 from './image/21-z-cph/2.jpg';

// import wc_video_1 from './image/22-18-wc/wangchong.mp4';
import poster from './image/poster.png'

// import ycq_video from './image/22-20-z-ycq/ycq.mp4'

import pj_img_1 from './image/pj/1.jpg'
import pj_img_2 from './image/pj/2.jpg'
import pj_img_3 from './image/pj/3.jpg'
import pj_img_4 from './image/pj/4.jpg'
const stuList = [
    {
        title: '21届毕业生--17网工本科班--胡海洋',
        desc: '摩洛哥--卡萨布兰卡--2022.8',
        imgArr: [hhy_img_1, hhy_img_2, hhy_img_3, hhy_img_4, hhy_img_5, hhy_img_6, hhy_img_7, hhy_img_8, hhy_img_9]
    },
    {
        title: '21专1-崔佩航-CETV播控技术员-北京',
        desc: '北京--2023.9.25',
        imgArr: [cph_img_1, cph_img_2]
    },
    {
        title:'丰沃创新---2022年华三杯大赛培训讲师--2022.9',
        desc:'庞杰晋升副主管',
        imgArr:[pj_img_1,pj_img_2,pj_img_4],
    },
    // {
    //     title:'22届毕业生--18级本科班--王冲',
    //     desc:'22届毕业生---学员采访--2022.9,就职于号浩鲸科技，做阿里云交付工作。',
    //     label:'video',
    //     imgArr:[wc_video_1],
    //     poster:poster,
    //     id:'1'
    // },
    //     {
    //     title:'22届毕业生--20级专接本2班--叶超群',
    //     desc:'2叶超群--2022届毕业生',
    //     label:'video',
    //     imgArr:[ycq_video],
    //     poster:poster,
    //     id:'2'
    // }
]

const videoPlayHandler = (e) => {
console.log('child',e);
PubSub.publish('v-pause',{playId:e})
}
// 点击卡片
const clikCardEvent = (e) => {
    uni.navigateTo({
        url: `/pages/index/child/outstanding-graduate/outstanding-graduate?id=${1}`,
    })
}
</script>
   
   
<style scoped lang='scss'>

@include respondTo('mobile') {
    .graduate-container {
    }
}
</style>