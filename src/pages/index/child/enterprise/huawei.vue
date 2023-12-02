<template>
  <view class="container">
    <template class="m-header">
      <AppPopup />
      <AppHeader />
    </template>
    <view class="container-content">
      <backgroundImg :img="[hw_img1, hw_img3, hw_img4]" />
      <view class="trans">
        <AppBreadcrumb class="breadcrumb" :currentPageTxtArr="['合作企业', '华为']" />
        <el-row justify="center">

          <el-col :xs="{ span: 20 }" :sm="{ span: 20 }" :md="{ span: 18 }">
            <view class="title">华为</view>
            <p class="line"></p>
            <view class="content">
              <!-- 左图右文 -->
              <el-row class="row1" justify="space-between" :gutter="20">
                <el-col v-showMeta="`animate__fadeInLeft`" class="instruction" :xs="24" :sm="11">
                  <h2>华为云是由华为技术有限公司推出的一项面向企业客户的云计算服务</h2>
                  <p> 作为全球领先的信息和通信技术（ICT）解决方案提供商，华为致力于为客户提供全方位的云计算服务，包括计算、存储、数据库、人工智能等多种云端解决方案。</p>
                  <p>
                    华为云提供了丰富的云计算产品和服务，包括弹性计算、对象存储、关系型数据库、大数据平台、人工智能服务、区块链服务等。用户可以根据自己的需求选择合适的云计算服务，并通过华为云构建灵活、高效的云端架构，实现数字化转型和业务创新。
                  </p>
                  <el-button @tap="jumpPage" style="float: right;">官网</el-button>
                  <!-- <p>华为云致力于构建安全可靠的云计算基础设施，采用多层次的安全防护机制，保障用户的数据安全和隐私保护。同时，华为云还提供了全面的技术支持和咨询服务，帮助客户更好地利用云计算技术推动业务发展。</p>
                  <p>华为云通过其丰富的云计算产品和服务，以及对安全、可靠性的高度重视，为企业客户提供了强大的云端解决方案，助力他们实现业务创新和发展。</p> -->
                </el-col>
                <el-col v-showMeta="`animate__fadeInRight`" class="image-wrapper" :xs="24" :sm="12">
                  <el-image :src="hw_img5" fit="cover" />
                </el-col>
              </el-row>
              <!-- 文字 -->
              <!-- <el-row class="row2" justify="space-between" :gutter="20">
                <el-col class="instruction" :xs="24" :sm="24">
                  <p>华为云致力于构建安全可靠的云计算基础设施，采用多层次的安全防护机制，保障用户的数据安全和隐私保护。同时，华为云还提供了全面的技术支持和咨询服务，帮助客户更好地利用云计算技术推动业务发展。</p>
                  <p>华为云通过其丰富的云计算产品和服务，以及对安全、可靠性的高度重视，为企业客户提供了强大的云端解决方案，助力他们实现业务创新和发展。</p>
                </el-col>
              </el-row> -->
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
// banner
import hw_img1 from './image/huawei/huawei_banner.jpg';
// import hw_img2 from './image/huawei/huawei_banner2.jpg';
import hw_img3 from './image/huawei/huawei_banner3.jpg';
import hw_img4 from './image/huawei/huawei_banner4.jpg';
import hw_img5 from './image/huawei/huawei_banner5.jpg';
import textImg from './image/huawei/huawei.jpg';

onActivated(() => {
  PubSub.publish('scroll-top', { data: true });
})
// 跳转华为云计算官网
const jumpPage = () => {
  window.open("https://www.huawei.com/cn/")
};
</script>
  
<style scoped lang="scss">

.container {
  position: relative;

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
    font-weight: bold;
    position: relative;
    /*
    &::after{
      content: "";
      background: url('../../../../static/company/huawei_logo.png') no-repeat left center / 100%;
      width: 200px;
      height: 80px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  */
  }

  .line {
    height: 1px;
    width: 100%;
    background-color: #a1a1a14f;
    margin-top: 20px;
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

    .breadcrumb {
      background-color: rgba(48, 49, 51, 0.636);
      padding: 0 !important;
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
        transform: translateY(-60rpx);
      }

      .title {
        height: 80rpx;
        font-size: 50rpx;
        color: #303133;
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

    .breadcrumb {
      background-color: rgba(48, 49, 51, 0.636);
      padding: 0 !important;
    }

    .container-content {
      .trans {
        transform: translateY(-32px);
      }
    }

    .m-header {
      display: none;
    }

    .title {
      height: 80rpx;
      font-size: 60rpx;
      color: #333;
    }


    .content {
      line-height: 40px;
      font-size: 32rpx;
      font-weight: bold;
      color: #333;

      .row1,
      .row2 {
        margin: 40px auto;

        .instruction {
          box-sizing: border-box;
          text-align: justify;
          padding: 25px 0;

          h2 {
            margin-bottom: 40rpx;
            color: #333;
            font-size: 42rpx;
          }

          p {
            font-weight: normal;
            line-height: 64rpx;
            margin-bottom: 20rpx;
          }
        }
      }

      .row2 {
        margin: 0;
      }

      .image-wrapper {
        overflow-y: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        /*
        &::after {
          content: '';
          position: absolute;
          top: 50px;
          right: 65%;
          width: 100px;
          height: 100px;
          border: 4px solid rgb(234, 234, 234);
        }
**/

        .el-image {
          width: 100%;
        }
      }

      view {
        text-indent: 60rpx;
        margin-bottom: 20rpx;
      }
    }
  }
}</style>
  