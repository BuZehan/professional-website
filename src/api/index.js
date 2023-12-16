import request from '@/utils/request'
// 新闻动态数据
export const getNews = (data) => request('GET','/news/getNews',data)
// 获奖证书数据
export const getCertificate = (data) => request('GET','/honor/getHonor',data)
// 教师证书
export const getTeacher = (data) => request('GET','/honor/getHonorForTeacher',data)
// 通知公告
export const getNotice = (data) => request('GET','/notification/getNotification',data)
// 轮播图数据
export const getBanner = (data) => request('GET','/swiper/getBanner',data)
// 校友数据
export const getAlumni = (data) => request('GET','/stu/getStu',data)