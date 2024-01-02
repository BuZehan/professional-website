<template>
  <view class="container">
    <template class="m-header">
      <AppPopup />
      <AppHeader />
    </template>
    <view class="container-content">
      <backgroundImg />
      <view>
        <AppBreadcrumb  class="trans" :currentPageTxtArr="['专业介绍']" />
        <view class="zz"></view>
        <el-row class="instruction" justify="center">
          <el-col :xs="{ span: 20 }" :sm="{ span: 20 }" :md="{ span: 18 }">
            <view class="title">网络工程专业介绍</view>
            <p class="line"></p>
            <view class="content">
              <view class="c">
                本专业是河北省一流本科专业建设点，通过学习信息技术和通信技术的基础理论，使学生具备网络工程设计的基本理念和综合素养，掌握现代信息网络的系统规划设计、维护管理、安全技术和应用开发相关的理论、知识、技能和方法，熟练运用核心网络的组网规划、软件部署、数据配置、测试验收、维护优化等技能，具备网络工程领域内分析问题、解决问题以及创新思维等能力，培养能够承担信息网络系统设计、开发、部署、运行和维护等工作的应用型人才。
              </view>
              <view class="c">
                本专业以现代信息技术、网络通信技术为基础，面向电信级运营商，掌握核心信息通信设备的组网规划、软件部署、数据配置、测试验收、维护优化、数据通信以及云平台的交付运维等关键技术。通过学习华为数据通信技术和云计算技术，毕业时基本达到华为网络工程师中级资格，已有百余名学生通过HCIA、HCIP等华为认证，并在企业实习就业。
              </view>
              <view class="c">
                主要核心课程：路由交换技术及应用、高级路由交换、操作系统、网络服务器建设、虚拟化技术、云计算、网络与媒体信息安全、多媒体网络程序设计、多媒体数据库技术及应用、互联网及多媒体通信协议、网络应用创新设计、现代移动通信技术、光纤通信技术、多媒体应用综合实训、多媒体网络综合实训、媒体云综合实训等。
              </view>

            </view>
          </el-col>
        </el-row>
      </view>
    </view>
    <Footer class="footer" />
  </view>
</template>

<script setup>
import {onActivated} from 'vue'

onActivated(() => {
  PubSub.publish('scroll-top', { data: true });
})
</script>

<style scoped lang="scss">

.container {
  position: relative;
  .container-content {
    height: fit-content !important;
    .instruction{
      transform: translateY(-120rpx);
    }
    .trans {
      transform: translateY(-40rpx);
    }
    .daohang {
      .el-col {
        display: flex;
        align-items: center;

        .el-image {
          transform: scale(.7);
        }

        :deep(.el-breadcrumb) {
          .el-breadcrumb__inner {
            cursor: pointer !important;
          }
        }
      }
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30rpx 0;
    font-weight: bold;  
  }

  .line {
    height: 1px;
    width: 100%;
    background-color: #a1a1a14f;
    margin-top: 60rpx;
    margin-bottom: 30px;
  }

  .content {
    font-size: 28rpx;
    text-align: justify;
    display: -webkit-box;
    /* 带有-webkit-前缀的属性是针对 WebKit 内核浏览器的 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }
}

@include respondTo("mobile") {
  .container {
    .footer {
      display: flex;
    }

    .m-header {
      display: block;
      position: fixed;
      top: 0;
      z-index: 5000;
    }

    .container-content {
      margin-top: 100rpx;
      height: calc(100vh - 100rpx);

      .trans {
        transform: translateY(-100rpx);
      }

      .title {
        height: 80rpx;
        font-size: 70rpx;
      }

      .content {
        line-height: 50rpx;

        .c {
          text-indent: 60rpx;
          margin-bottom: 20px;
        }
      }
    }
  }
}

@include respondTo("desktop") {
  .container {
    .footer {
      display: none;
    }

    .zz {
      width: 100vw;
      height: 80px;
      background-color: #fff;
      opacity: 0.7;
      transform: translateY(-120px);
      position: absolute;
      left: 0;
    }
    .container-content {

      .trans {
        transform: translateY(-145px);
      }
    }

    .m-header {
      display: none;
    }

    .title {
      height: 80rpx;
      font-size: 84rpx;
      color: #333;
    }


    .content {
      line-height: 40px;
      font-size: 32rpx;
      color: #333;

      view {
        text-indent: 60rpx;
        margin-bottom: 20rpx;
      }
    }
  }
}</style>
