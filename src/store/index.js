import { defineStore } from 'pinia'
import { ref } from 'vue'
export const MainStore = defineStore('main', () => {
    const isIndex = ref(true);
    const updateIsIndex = (value) =>{
        isIndex.value = value
    }
    const isMobile = ref(false);
    const setIsMobile = (value) => {
        isMobile.value = value;
    };
    // header菜单数据
    const menuData = ref([
        { title: "首页", name: "1", path: "/pages/Layout/Layout" },
        { title: "专业新闻", name: "8", path: "/pages/index/child/news/news" },
        {
          title: "专业介绍",
          name: "2",
          path: "/pages/index/child/specialty-instruction/specialty-instruction",
        },
        {
          title: "课程介绍",
          name: "4",
          path: "/pages/index/child/specialized-courses/specialized-courses",
        },
      
        {
          title: "师资团队",
          name: "3",
          path: "/pages/index/child/teaching-team/teaching-team",
        },
      
        {
          title: "实验室",
          name: "5",
          path: "/pages/index/child/laboratory/laboratory",
        },
        {
          title: "合作企业",
          name: "6",
          children: [
            {
              title: "华为",
              name: "6-1",
              path: "/pages/index/child/huawei/huawei",
            },
            {
              title: "薪享宏福",
              name: "6-2",
              path: "/pages/index/child/xin-xiang-hong-fu",
            },
            {
              title: "H3C",
              name: "6-3",
              path: "/pages/index/child/h3c/h3c",
            },
            {
              title: "浩鲸科技",
              name: "6-4",
              path: "/pages/index/child/hao-jing-technology/hao-jing-technology",
            },
            {
              title: "天融信",
              name: "6-5",
              path: "/pages/index/child/tian-rong-xin/tian-rong-xin",
            },
            {
              title: "中憬科技集团有限公司",
              name: "6-6",
              path: "/pages/index/child/zhong-jing/zhong-jing",
            },
          ],
        },
        {
          title: "优秀校友",
          name: "7",
          path: "/pages/index/child/connect/connect",
        },
      ])
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
        updateRouterIndex,
        isIndex,
        updateIsIndex,
        menuData
    }
})