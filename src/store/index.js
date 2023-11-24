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
    return {
        isMobile,
        setIsMobile,
        mobileScrollY,
        setMobileScrollY
    }
}, {
    persist: true
})