import { defineStore } from 'pinia'
import { ref } from 'vue'
export const WebDataStore = defineStore('WebData', () => {
    // 数据
    const newsData = ref([]);
    const SetNewsData = (data) => {
        newsData.value = data
    }
    // 动态详情下标数组
    const NewsDetailIndexArr = ref([0, 0])
    const SetNewsDetailIndex = (indexArr) => {
        NewsDetailIndexArr.value = indexArr
    }

    // 新闻动态下标
    const NewsDataIndex = ref(0)
    const SetNewsDataIndex = (index) => {
        NewsDataIndex.value = index
    }

    // 通知公告
    const NoticeData = ref([]);
    const SetNoticeData = (data) => {
        NoticeData.value = data
    }
    // 通知公告下标
    const NoticeDataIndex = ref(0)
    const SetNoticeDataIndex = (index) => {
        NoticeDataIndex.value = index
    }

    // 获奖证书
    const Certificate = ref([]);
    const SetCertificateData = (data) => {
        Certificate.value = data
    }
    // 增加获奖证书数据
    const AddCertificateData = (data) => {
        Certificate.value.list.push(...data.list)
    }
    // 获奖证书详情下标
    const CertificateIndex = ref(0)
    const SetCertificateIndex = (index) => {
        CertificateIndex.value = index
    }

    return {
        newsData,
        SetNewsData,
        NoticeData,
        SetNoticeData,
        Certificate,
        SetCertificateData,
        CertificateIndex,
        SetCertificateIndex,
        NoticeDataIndex,
        SetNoticeDataIndex,
        NewsDataIndex,
        SetNewsDataIndex,
        NewsDetailIndexArr,
        SetNewsDetailIndex,
        AddCertificateData
    }
}, {
    persist: true
})