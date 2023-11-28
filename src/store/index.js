import { defineStore } from 'pinia'
import { ref } from 'vue'
export const MainStore = defineStore('main', () => {
    const isMobile = ref(false);
    const setIsMobile = (value) => {
        isMobile.value = value;
    };

    // 页面滚动距离 --- 移动端
    const mobileScrollY = ref(0);
    const setMobileScrollY = (value) => {
        mobileScrollY.value = value;
    };

    // 路由状态管理
    const RouterIndex = ref('0');
    const updateRouterIndex = (value) => {
        RouterIndex.value = value;
    };
    // hashMap
    const hashMap = new Map();
    // 专业介绍 -- 2
    hashMap.set("#/pages/index/child/specialty-instruction/specialty-instruction", '2');
    // 师资团队 -- 3 
    hashMap.set("#/pages/index/child/teaching-team/teaching-team",'3')
    // 专业课程 -- 4
    hashMap.set("#/pages/index/child/specialized-courses/specialized-courses",'4')
    // 实验室 -- 5
    hashMap.set("#/pages/index/child/laboratory/laboratory",'5')
    // 合作企业 -- 华为 -- 6
    hashMap.set("#/pages/index/child/enterprise/huawei", '6');
    // 优秀校友 -- 7
    hashMap.set("#/pages/index/child/outstanding-graduate/outstanding-graduate", '7');
    // 新闻动态 -- 8
    hashMap.set("#/pages/index/child/news/news", '8');
    return {
        isMobile,
        setIsMobile,
        mobileScrollY,
        setMobileScrollY,
        hashMap,
        RouterIndex,
        updateRouterIndex
    }
})