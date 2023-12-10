import request from '@/utils/request'
// 新闻动态数据
export const getNews = (data) => request('GET','/news/getNews',data)
// 获奖证书数据
export const getCertificate = (data) => request('GET','/honor/getHonor',data)
// 通知公告
export const getNotice = (data) => request('GET','/notification/getNotification',data)
