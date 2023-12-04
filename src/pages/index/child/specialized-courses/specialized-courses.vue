<template>
  <view class="container">
    <template class="m-header">
      <AppPopup />
      <AppHeader />
    </template>
    <view class="container-content">
      <backgroundImg />
      <view>
        <AppBreadcrumb class="trans" :currentPageTxtArr="['课程介绍']" />
        <view class="zz"></view>
        <el-row justify="center" class="instruction">
          <el-col :xs="{ span: 20 }" :sm="{ span: 20 }" :md="{ span: 18 }">
            <view class="title">课程介绍</view>
            <p class="line"></p>
            <view class="content">
              <view class="desc">
                <p> “1+3战略”:一个基础，三个方向：以数通为基础，大力发展云计算、移动互联网5G、ICT融合创新三个方向。</p>
                <p>“网络工程”专业2020年获得“河北传媒学院校级一流本科专业建设立项”。</p>
                <p>
                  培养目标：通过学习信息技术和通信技术的基础理论和知识，使学生具备网络工程设计的基本理念和综合素养，掌握现代信息网络的系统规划设计、维护管理、安全技术和应用开发相关的理论、知识、技能和方法，熟练运用核心网络的组网规划、软件部署、数据配置、测试验收、维护优化等技能，具备网络工程领域内分析问题、解决问题以及创新思维等能力，培养能够承担信息网络系统设计、开发、部署、运行和维护等工作的应用型人才。
                </p>
                <p>
                  核心课程：计算机网络技术、TCP/IP技术及应用、路由交换技术及应用、通信原理、信息论与编码原理、路由交换实训、现代移动通信技术、现代交换技术、网络工程规划、操作系统、网络服务器建设、网络管理、网络应用创新设计、天线与电波传播、网络与信息安全、光纤通信技术。
                </p>

              </view>
              <div class="image">
                <el-image :lazy="true" :hide-on-click-modal="true" :src="srcList[0]" :zoom-rate="1" :max-scale="1"
                  :min-scale="1" :initial-index="4" fit="cover" :preview-src-list="srcList" />
              </div>
              <view class="tip">点击图片查看大图</view>
              <a class="download hidden-sm-and-down" href="../../../../static/k.pdf" target="_blank">详细课程.pdf</a>
              <view class="download" @tap="download">下载课程附件</view>
            </view>
          </el-col>
        </el-row>
      </view>
    </view>
    <Footer class="footer" />
  </view>
</template>
  
<script setup>
import { onActivated } from 'vue'
onActivated(() => {
  PubSub.publish('scroll-top', { data: true });
})

import zykc_img from "@/static/zykc.jpg"
const srcList = [zykc_img]
const download = () => {
  uni.downloadFile({
    url: '../../../../static/k.pdf',
    success: (res) => {
      // 将 URL 赋给一个链接的 href 属性，用户点击链接时可以下载或查看文件
      var link = document.createElement('a');
      link.href = res.tempFilePath;
      link.download = '22版人培--网络工程--最终版2023.4.20.pdf'; // 可选，指定下载时的文件名
      document.body.appendChild(link);
      link.click();
    }
  })
}
</script>
  
<style scoped lang="scss">
.container {
  position: relative;

  .instruction {
    transform: translateY(-120rpx);
  }

  .container-content {
    height: fit-content !important;

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
    p {
      margin-bottom: 40rpx;
    }

  }

  .tip {
    font-size: 28rpx;
    color: #999;
    text-align: center;
    text-indent: 0 !important;

  }

  .download {
    text-decoration: none;
    /* 去除下划线 */
    color: inherit;
    /* 继承父元素的文字颜色 */
    cursor: pointer;
    /* 修改鼠标指针样式为手型 */
    font-size: 16px;
    display: block;
    padding: 0 10px;
    margin: 10px auto;
    text-indent: 0px !important;
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
        }
      }
    }
  }
}

@include respondTo("desktop") {
  .container {
    .zz {
      width: 100vw;
      height: 80px;
      background-color: #fff;
      opacity: 0.7;
      transform: translateY(-120px);
      position: absolute;
      left: 0;
    }

    .footer {
      display: none;
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
      font-size: 90rpx;
      color: #333;
    }


    .content {
      line-height: 34px;
      font-size: 34rpx;
      color: #333;

      p {
        margin-bottom: 10px;
      }

      view {
        text-indent: 72rpx;
      }
    }
  }
}
</style>
  