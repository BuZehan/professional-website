<template>
    <view class="news-detail" ref="target">
        <template class="m-header hidden-md-and-up">
            <AppPopup />
            <AppHeader />
        </template>
        <el-row justify="center" v-if="Certificate">
            <el-col class="title" :xs="22" :md="24">{{ Certificate?.news_title }}</el-col>
            <el-col class="time" :xs="22" :md="24"><el-icon :size="20" color="rgb(200,20,20)">
                    <Clock />
                </el-icon>{{ Certificate.release_time }}</el-col>
            <!-- <el-col class="content" :xs="22" :md="24" v-for="c in newsData.content"> -->
            <el-col class="content" :xs="22" :md="24">
                <!-- <el-image v-if="c == 'img'" :src="newsData.imgUrl" fit="cover" /> -->
                <div class="pdfWrapper"
                    v-if="fileType.includes(Certificate.honorImage[0].image_path.match(/\.([^.]+)$/)[1])">
                    <div v-pdf="Certificate.honorImage[0].image_path" class="image">
                    </div>
                    <div class="down">
                        <a v-if="isPDF(Certificate.honorImage[0].image_path)" class="download hidden-sm-and-down"
                            :href="Certificate.honorImage[0].image_path" target="_blank">查看证书PDF</a>
                        <a v-if="isPDF(Certificate.honorImage[0].image_path)" class="download"
                            @tap="download(Certificate.honorImage[0].image_path, Certificate.honorImage[0].image_name)">下载证书附件</a>
                    </div>
                </div>
                <el-image v-else :src="Certificate.honorImage[0].image_path" class="image" />
                <!-- <el-image v-if="Certificate.honorImage" :src="Certificate.honorImage[0].image_path" fit="cover" /> -->
            </el-col>
            <!-- <div v-if="Certificate?.honorImage[0].image_path">{{ Certificate.honorImage[0].image_name.replace(/\.pdf$/, "")
            }}</div> -->

            <el-col class="content" :xs="22" :md="24">
                <view>{{ Certificate.news_content }}</view>
            </el-col>
        </el-row>

        <el-button color="rgb(200,20,20)" class="hidden-sm-and-down btn" type="primary" @tap="back">返回</el-button>
        <el-button color="rgb(200,20,20)" class="hidden-md-and-up btn" type="primary" @tap="Mback">返回</el-button>
        <Footer class="hidden-md-and-up" />
    </view>
</template>
   
   
<script setup>
import { WebDataStore } from '@/store/modules/web.js'
const UseWebDataStore = WebDataStore();
import { Clock } from '@element-plus/icons-vue'
import { onActivated, ref, onMounted, computed } from 'vue'
import PubSub from 'pubsub-js';
// import zhengshu from "@/static/news/stu1.png"
// const newsData = {
//     title: '恭喜 XXX 同学顺利考过华为HCIP-Cloud Computing证书！',
//     time: '2023-11-25',
//     imgUrl: zhengshu,
//     content: [
//         '2023年11月18日，我校兴安校区举办了“华为中国大学生ICT大赛2023-2024”河北省初赛，共有229名网络工程专',
//         'img',
//         '网络工程专业一直秉承“以赛促教、以赛促学、以赛促发展”的理念，积极组织学生参加各种专业大赛，以促进专业的发展。'
//     ]
// }
// 页面滚动
onActivated(() => {
    PubSub.publish('scroll-top', {
        data: true
    })
})
const back = () => {
    console.log(123);
    PubSub.publish('back-event', { index: 2 })
}
// 移动端返回
const Mback = () => {
    PubSub.publish('back-event', { index: 2 })
    uni.navigateBack({
        delta: 1
    })
}
// 新闻数据

const Certificate = computed(() => {
    let data = UseWebDataStore.Certificate.list.filter(item => item.id === UseWebDataStore.CertificateIndex)
    return data[0]
});
// console.log(Certificate.value);

const download = (url, fileName) => {
    uni.downloadFile({
        url,
        success: (res) => {
            // 将 URL 赋给一个链接的 href 属性，用户点击链接时可以下载或查看文件
            console.log(res);
            var link = document.createElement('a');
            link.href = res.tempFilePath;
            link.download = fileName; // 可选，指定下载时的文件名
            document.body.appendChild(link);
            link.click();
        }
    })
}
// 是否为PDF
const fileType = ['pdf', 'doc', 'docx']
const isPDF = computed(() => url => fileType.includes(url.match(/\.([^.]+)$/)[1]))
</script>
   
   
<style scoped lang='scss'>
.btn {
    margin-top: 50rpx;
    margin-bottom: 200rpx;
    float: right;
}

@include respondTo('mobile') {
    .news-detail {
        font-weight: normal;
        text-indent: 0 !important;
        position: relative;
        overflow: hidden;
        height: 100vh;
        overflow-y: scroll;

        .m-header {
            display: block;
            position: fixed;
            top: 0;
            z-index: 5000;
        }

        .title {
            margin-top: 140rpx;
            text-align: center;
            font-size: 40rpx;
            font-weight: bold;
        }

        .time {
            color: #999;
            font-size: 28rpx;
            display: flex;
            align-items: center;
            margin: 40rpx 0;
            opacity: 0.6;

            .el-icon {
                margin-right: 10rpx;
            }
        }

        .content {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .pdfWrapper {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .down {
                    display: flex;
                    margin-bottom: 40rpx;
                    a {
                        color: #999;
                        font-size: 14px;
                    }
                }
            }

            .download {
                cursor: pointer;
                margin: 0 10px;
                text-decoration: underline;
            }


            .el-image {
                height: 400rpx;
                box-shadow: 8rpx 8rpx 20rpx 4rpx #33333349;
                margin: 50rpx auto;
            }

            .image{
                box-shadow: 8rpx 8rpx 20rpx 4rpx #33333349;
                margin: 50rpx auto;
            }
        }
    }

}



@include respondTo('desktop') {
    .news-detail {
        font-weight: normal;
        text-indent: 0 !important;

        .title {
            text-align: center;
            font-size: 60rpx;
            font-weight: bold;
        }

        .time {
            color: #999;
            font-size: 28rpx;
            display: flex;
            align-items: center;
            margin: 20rpx 0;

            .el-icon {
                margin-right: 10rpx;
            }
        }

        .content {
            text-indent: 70rpx;
            display: flex;
            align-items: center;

            .pdfWrapper {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-indent: 0 !important;

                .down {
                    transform: translateY(-30px);
                    display: flex;

                    a {
                        color: #999;
                        font-size: 14px;
                    }
                }
            }

            .download {
                cursor: pointer;
                margin: 0 10px;
                text-decoration: underline;
            }

            .el-image {
                text-indent: 0 !important;
                margin: 40rpx auto;
                border-left: 1rpx solid #ddd;
                border-bottom: 1rpx solid #ddd;
                height: 800rpx;
            }
        }
    }
}
</style>