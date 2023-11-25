import { defineStore } from 'pinia'
import { ref } from 'vue'
export const StuInfoStore = defineStore('stuInfo', () => {
    //    路由下标
    const currentRouterIndex = ref(0)
    // 更新路由下标
    const updateCurrentRouterIndex = (data) => {
        currentRouterIndex.value = data;
    }
    return {
        currentRouterIndex,
        updateCurrentRouterIndex
    }
}, {
    persist: true
})