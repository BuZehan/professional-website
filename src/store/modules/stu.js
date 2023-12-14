import { defineStore } from 'pinia'
import { ref } from 'vue'
export const StuInfoStore = defineStore('stuInfo', () => {
    
    // 路由下标
    const currentRouterIndex = ref(0)
    // 更新路由下标
    const updateCurrentRouterIndex = (data) => {
        currentRouterIndex.value = data;
    }
    
    // 校友数据
    const currentStuData = ref(
        {
            title: "标题",
            desc: ["描述"],
            releaseTime: "2023-11-25",
            imgList: []
        })
    const updatecurrentStuData = (data) => {
        currentStuData.value = data; 
    }
    return {
        currentRouterIndex,
        updateCurrentRouterIndex,
        currentStuData,
        updatecurrentStuData
    }
}, {
    persist: true
})