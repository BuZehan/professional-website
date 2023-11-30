<template>
  <view class="index-container">
    <template class="m-header">
      <AppPopup />
      <AppHeader />
    </template>
    <view class="index-content">
      <!-- 轮播图 -->
      <Swiper />
      <!-- 新闻动态 -->
      <view class="block news">
        <view class="title newsForMobile">新闻通知</view>
        <view class="title-e newsForMobile">News And Notice</view>
        <view class="content">
          <NewsTrends />
        </view>
        <el-button class="m-el-btn-jump" @tap="navgationTo('news')">了解更多</el-button>
      </view>
      <!-- 专业介绍 -- mobile-->
      <view class="block major hidden-md-and-up" v-showMeta="`animate__fadeInLsrcListeft`">
        <view class="title" style="color: #fff;">网络工程</view>
        <view class="title-e" style="color: #eee;">Network Project</view>
        <view class="content">
          <view class="m-show">
            本专业是河北省一流本科专业建设点，通过学习信息技术和通信技术的基础理论，使学生具备网络工程设计的基本理念和综合素养，掌握现代信息网络的系统规划设计、维护管理、安全技术和应用开发相关的理论、知识、技能和方法，熟练运用核心网络的组网规划、软件部署、数据配置、测试验收、维护优化等技能，
            具备网络工程领域内分析问题、解决问题以及创新思维等能力，培养能够承担信息网络系统设计、开发、部署、运行和维护等工作的应用型人才。
          </view>
          <view class="pc-show">
            <p>
              本专业是河北省一流本科专业建设点，通过学习信息技术和通信技术的基础理论，使学生具备网络工程设计的基本理念和综合素养，掌握现代信息网络的系统规划设计、维护管理、安全技术和应用开发相关的理论、知识、技能和方法，熟练运用核心网络的组网规划、软件部署、数据配置、测试验收、维护优化等技能，具备网络工程领域内分析问题、解决问题以及创新思维等能力，培养能够承担信息网络系统设计、开发、部署、运行和维护等工作的应用型人才。
            </p>
            <p>
              本专业以现代信息技术、网络通信技术为基础，面向电信级运营商，掌握核心信息通信设备的组网规划、软件部署、数据配置、测试验收、维护优化、数据通信以及云平台的交付运维等关键技术。通过学习华为数据通信技术和云计算技术，毕业时基本达到华为网络工程师中级资格，已有百余名学生通过HCIA、HCIP等华为认证，并在企业实习就业。
            </p>
            <!-- <p>
              主要核心课程：路由交换技术及应用、高级路由交换、操作系统、网络服务器建设、虚拟化技术、云计算、网络与媒体信息安全、多媒体网络程序设计、多媒体数据库技术及应用、互联网及多媒体通信协议、网络应用创新设计、现代移动通信技术、光纤通信技术、多媒体应用综合实训、多媒体网络综合实训、媒体云综合实训等。
            </p> -->
          </view>
        </view>
        <el-button class="m-el-btn-jump wlgc-btn" @tap="navgationTo('specialty-instruction')">了解更多</el-button>
      </view>
      <!-- 左图右文  专业介绍 -->
      <SpecialtyInstruction v-showMeta="`animate__fadeInRight`" class="hidden-sm-and-down"/>
      <!-- 师资团队 -->
      <view class="block teaching-team" v-showMeta="`animate__fadeInRight`">
        <view class="title">师资团队</view>
        <view class="title-e">Teaching Team</view>
        <view class="content">
          <MovableSwiper> </MovableSwiper>
        </view>
        <el-button class="m-el-btn-jump" @tap="navgationTo('teaching-team')">了解更多</el-button>
        <el-button class="pc-el-btn-jump" @tap="pcNavgationTo('3')">了解更多</el-button>
      </view>
      <!-- 专业课程 -->
      <el-row justify="center" class="block zykc" v-showMeta="`animate__fadeInRight`">
        <view class="title">专业课程</view>
        <view class="title-e">Specialized Courses</view>
        <el-col :xs="24" :sm="24" :md="20">
          <SpecializedCourses />
        </el-col>
        <el-button class="m-el-btn-jump" @tap="navgationTo('specialized-courses')">了解更多</el-button>
        <el-button class="pc-el-btn-jump" @tap="pcNavgationTo('4')">了解更多</el-button>
      </el-row>

      <!-- 实验室 -->
      <view class="block lab" v-showMeta="`animate__fadeInLeft`">
        <view class="title">教学实验室</view>
        <view class="title-e">Laboratory</view>
        <view class="content">
          <Lab />
        </view>
        <el-button class="m-el-btn-jump" @tap="navgationTo('laboratory')">了解更多</el-button>
        <el-button class="pc-el-btn-jump" @tap="pcNavgationTo('5')">了解更多</el-button>

      </view>
      <!-- 考证证书 -->
      <view class="block news" v-showMeta="`animate__fadeInRight`">
        <view class="title">获奖证书</view>
        <view class="title-e">Honor Certificate</view>
        <!-- <view class="title-e">News And Trends</view> -->
        <view class="content">
          <News />
        </view>
        <el-button class="m-el-btn-jump" @tap="navgationTo('news')">了解更多</el-button>
        <el-button class="pc-el-btn-jump" @tap="pcNavgationTo('5')">了解更多</el-button>

      </view>
      <!-- 合作企业 -->
      <view class="block enterprise" v-showMeta="`animate__fadeInDown`">
        <view class="title">合作企业</view>
        <view class="title-e">Cooperative Enterprise</view>
        <view class="content">
          <Company :companyArr="companyArr" />
        </view>
        <!-- <el-button class="m-el-btn-jump" @tap="navgationTo('teaching-team')">了解更多</el-button>
        <el-button class="pc-el-btn-jump" @tap="pcNavgationTo('6')">了解更多</el-button> -->

      </view>
      <!-- 优秀毕业生 -->
      <view class="outstanding-graduate block" v-showMeta="`animate__fadeInRight`">
        <view class="title">优秀校友</view>
        <view class="title-e">Outstanding Alumni</view>
        <view class="content">
          <OutstandingGraduate class="hidden-md-and-up" />
          <PcOutandingGraduate :isPC="true" class="hidden-sm-and-down" />
        </view>
        <el-button class="m-el-btn-jump" @tap="navgationTo('outstanding-graduate')">了解更多</el-button>
        <el-button class="pc-el-btn-jump" @tap="pcNavgationTo('7')">了解更多</el-button>
      </view>
    </view>
    <AppFooter class="mFooter" />
  </view>
</template>

<script setup>
import { ref } from 'vue'
import PubSub from "pubsub-js";
import AppHeader from "@/components/app-header/app-header.vue";
import AppPopup from "@/components/app-popup/app-popup.vue";
import AppFooter from "@/components/app-footer/app-footer.vue"

// 滑动卡片
import MovableSwiper from "./components/teaching-team/teaching-team.vue";
// 轮播图
import Swiper from "./components/swiper.vue";
// 新闻动态
import NewsTrends from "./components/news-trends/news-trends.vue";
// 专业课程
import SpecializedCourses from "./components/specialized-courses/specialized-courses.vue";
// 实验室
import Lab from "./components/lab/lab.vue"
// 证书
import News from "./components/news-cards/news-cards.vue"
// 合作企业
import Company from "./components/company/company.vue";
// 毕业生
import OutstandingGraduate from "./components/outstanding-graduate/outstanding-graduate.vue";
import PcOutandingGraduate from "@/pages/index/child/outstanding-graduate/stu-show.vue"
// 专业介绍 左图右文
import SpecialtyInstruction from "./components/specialty-instruction/specialty-instruction.vue";
// 跳转专业介绍---移动端
const navgationTo = (url) => {
  uni.navigateTo({
    url: `/pages/index/child/${url}/${url}`,
  });
};
// pc端跳转
const pcNavgationTo = (e) => {
  PubSub.publish('navgation-event', { e, index: true })
};
// 合作企业
import huawei from "@/static/company/huawei_logo.png"
import hjkj from "@/static/company/hjkj.png"
import H3C from "@/static/company/H3C.png"
import trx from "@/static/company/trx.jpg"
import xxfh from "@/static/company/xxhf.png"
import zjb from "@/static/company/zj-b.png"
const companyArr = [
  { name: 'huawei', path: huawei },
  { name: "xxfh", path: xxfh },
  { name: "h3c", path: H3C },
  { name: "hjkj", path: hjkj },
  { name: "trx", path: trx },
  { name: "zjb", path: zjb }]


</script>

<style scoped lang="scss">

button {
  border: none;
}

@include respondTo("mobile") {
  .mFooter {
    display: none;
  }

  .block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100rpx;

    &::after {
      content: "";
      width: 100vw;
      margin-top: 60rpx;
      background-color: var(--HUAQING);
    }

    .m-el-btn-jump {
      margin-top: 20rpx;
      display: block;
      color: #d00202;
      border-color: #d00202;
    }

    .pc-el-btn-jump {
      display: none;
    }

    .title {
      font-size: 44rpx;
      font-weight: bold;
      margin-bottom: 10rpx;
      color: #d00202;
    }

    .title-e {
      color: #999;
      font-size: 28rpx;
      margin-bottom: 30rpx;
    }

    .wlgc-btn {
      color: #333 !important;
      border: #333;
    }
  }

  .index-container {
    box-sizing: border-box;
    font-size: 32rpx;
    overflow: auto;
    height: 100vh;
    overflow: hidden;
    overflow-y: auto;
    background-color: #f1f1f1;

    .m-header {
      display: block;
    }

    .mFooter {
      display: flex;
    }

    .index-content {
      margin-top: 100rpx;

      .major {
        background: url('../../static/banner-scholl.jpg') no-repeat center;
        background-size: cover;
        color: #333;
        overflow: hidden;
        position: relative;

        &::before {
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
          background-color: #00000091;
          content: "";
        }

        .title {
          margin-top: 80rpx;
          position: static;
          z-index: 5;
        }

        .title-e {
          position: static;
          z-index: 5;
        }

        .content {
          position: static;
          z-index: 5;
          margin-top: 20rpx;
          box-sizing: border-box;
          padding: 0 20rpx;
          text-align: justify;
          color: #fff;
          line-height: 46rpx;
          margin-bottom: 20rpx;
          font-size: 28rpx;
          text-align: justify;
          display: -webkit-box;
          /* 带有-webkit-前缀的属性是针对 WebKit 内核浏览器的 */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          text-indent: 60rpx;

          .pc-show {
            display: none;
          }
        }

        .m-el-btn-jump {
          margin-bottom: 10rpx;
          position: static;
          z-index: 5;
        }

      }

      .news {
        margin-top: 40rpx;

        .newsForMobile {
          display: block;
        }

        .el-button {
          margin-top: 40rpx;
        }
      }

      .teaching-team {
        .content {
          box-sizing: border-box;
          width: 100vw;
        }
      }

      //新闻动态
      .news {

        .el-card {
          width: 500rpx;
        }
      }



      .lab {
        width: 94vw;
        margin-left: 3vw;

        .content {
          width: 100vw;
          margin-bottom: 20rpx;
        }
      }

      //优秀毕业生
      .outstanding-graduate {}
    }
  }
}

@include respondTo("desktop") {
  .block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40rpx auto;
    margin-top: 0;
    margin-bottom: 200rpx;

    .m-el-btn-jump {
      display: none;
    }

    .wlgc-btn {
      color: #333 !important;
      border: #333;
      position: relative;
      z-index: 5;

      &:hover {
        background-color: #fff !important;
      }
    }

    .pc-el-btn-jump {
      display: flex;
      color: #d00202;
      border-color: #d00202;
      transition: all .35s;
      margin: 0;
      margin-top: 20rpx;

      &:hover {
        background-color: #d00202;
        color: #f1f1f1;
      }
    }

    .title {
      font-size: 64rpx;
      font-weight: bold;
      margin-bottom: 10rpx;
      color: #d00202;
    }

    .title-e {
      color: #999;
      font-size: 48rpx;
      margin-bottom: 30rpx;
    }
  }

  .index-container {
    .mFooter {
      display: none !important;
    }

    .m-header {
      display: none;
    }

    .major {
      background: url('../../static/banner-scholl.jpg') no-repeat bottom right;
      background-size: cover;
      color: #333;
      overflow: hidden;
      position: relative;

      &::before {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: #00000091;
        content: "";
      }

      padding: 50rpx 0;
      max-width: 1920px;

      .title,
      .title-e {
        position: relative;
        z-index: 5;
      }

      .content {
        position: relative;
        z-index: 5;
        box-sizing: border-box;
        padding: 0 20rpx;
        width: 70%;
        text-align: justify;
        line-height: 56rpx;
        text-indent: 80rpx;
        margin-bottom: 20rpx;
        font-size: 38rpx;
        text-align: justify;
        display: -webkit-box;
        /* 带有-webkit-前缀的属性是针对 WebKit 内核浏览器的 */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        height: fit-content;
        color: #f5f5f5;

        .m-show {
          display: none;
        }

        p {
          margin-bottom: 20rpx;
        }
      }
    }

    .news {
      .newsForMobile {
        display: none;
      }

      margin-top: 40rpx;
    }

    .teaching-team {
      .content {
        box-sizing: border-box;
        width: 90vw;
        margin: 0 auto;
        overflow: hidden;
      }
    }


    .lab {
      width: 100vw;
      max-width: 1200px;

      .content {
        width: 100%;
        margin-bottom: 80rpx;
      }
    }

    .enterprise {}

    .outstanding-graduate {
      .content {
        width: 100vw;
        max-width: 1200px;
        margin: 0 auto;
      }
    }
  }
}

// 专业课程
.zykc {
  width: 100vw;

  .el-col {
    width: 100%;
  }
}</style>
