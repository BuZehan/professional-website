<template>
  <view class="container">
    <template class="m-header">
      <AppPopup />
      <AppHeader />
    </template>
    <view class="container-content">
      <view class="banner">
        <view class="app-banner-page"></view>
        <view class="text-content">
          <h1 class="txt">
            关于天融信
          </h1>
          <p class="desc">中国领先的网络安全、大数据与云服务提供商</p>
        </view>
      </view>

      <view class="trans">
        <AppBreadcrumb class="breadcrumb" :currentPageTxtArr="['合作企业', '天融信']" />
        <el-row justify="center">
          <el-col :xs="{ span: 20 }" :sm="{ span: 20 }" :md="{ span: 18 }">
            <view class="title">天融信科技集团</view>
            <p class="line"></p>
            <view class="content">
              <!-- 左图右文 -->
              <el-row class="row1" justify="space-between" :gutter="20">
                <el-col v-showMeta="`animate__fadeInLeft`" class="instruction" :xs="24" :sm="11">
                  <h2>公司介绍</h2>
                  <p>
                    天融信科技集团（证券代码：002212）创始于1995年，是上市公司中成立最早的网络安全企业，亲历中国网络安全产业的发展历程，如今已从中国第一台自主研发防火墙的缔造者成长为中国领先的网络安全、大数据与云服务提供商。多年来，集团为政府、金融、运营商、能源、卫生、教育、交通、制造等各行业客户提供网络安全产品与服务。未来，天融信将始终以捍卫国家网络空间安全为己任，创新超越，致力于成为民族安全产业的领导者、领先安全技术的创造者和数字时代安全的赋能者。
                  </p>

                  <el-button @tap="jumpPage" style="float: right">官网</el-button>
                </el-col>
                <el-col v-showMeta="`animate__fadeInRight`" class="image-wrapper" :xs="24" :sm="12">
                  <el-image :src="txtRight" fit="cover" />
                </el-col>
              </el-row>
              <!-- 文字 -->
              <el-row class="row2" justify="space-between" :gutter="20">
                <el-col class="instruction" :xs="24" :sm="24">
                  <p>
                    天融信拥有完备的安全服务体系、权威的安全服务资质和专业化安全服务团队，超过1000名网络安全服务人员分布在北京、上海、广州、西安、成都等90多个分支机构，7×24小时竭诚为每一位客户提供高品质的在线及现场服务。
                  </p>
                  <p>
                    自主创新是天融信的内在基因，从1996年推出填补国内空白的首台自主知识产权防火墙到国内首台ASIC千兆小包线速防火墙“猎豹”、下一代防火墙，从全球首发新一代可信并行计算安全平台到云时代超百G安全网关
                    “擎天”、融入AI的下一代防火墙，天融信始终引领网络安全技术发展，至今已连续23年位居中国网络安全防火墙市场第一，在安全硬件、整体网络安全市场处于领导者地位。多年以来，天融信不断创新超越，在国内率先推出“TOPSEC”联动协议、“可信网络架构”（TNA1.0）、“可信网络世界”（TNW）
                    及以网络安全为核心、大数据为基础、云服务为交付模式的“下一代可信网络安全架构” （NGTNA）
                    ，构建了感知态势、联动防护的全局安全防御体系，同时也正式奏响了向云服务进军的号角。同时，作为最早参与信创事业的网络安全企业之一，天融信凭借自身强大的自主研发能力，与国产软硬件进行深度技术融合，打造出网络安全国产化最佳应用实践-天融信昆仑系列产品，全面助力信创产业发展。
                  </p>
                </el-col>
              </el-row>
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
import trx_banner1 from "./image/trx/trx_banner.jpg";
import txtRight from "./image/hjkj/txtRight.jpg";
// 跳转华为云计算官网
const jumpPage = () => {
  window.open("https://www.topsec.com.cn/");
};
onActivated(() => {
  PubSub.publish('scroll-top', { data: true });
})
</script>

<style scoped lang="scss">
.container {
  position: relative;

  .container-content {
    height: fit-content !important;

    .banner {
      height: 350px;
      width: 100vw;
      overflow: hidden;
      position: relative;

      .app-banner-page {
        background-image: url("./image/trx/trx_banner.png");
        background-position: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }

      .text-content {
        height: 100%;
        width: 25%;
        position: absolute;
        box-sizing: border-box;
        padding: 180rpx 50rpx 0 100rpx;
        z-index: 10;
        top: 0;

        .txt {
          color: #fff;
          font-weight: normal;
          margin-bottom: 30rpx;
        }

        .desc {
          color: #fff;
          line-height: 48rpx;
          font-size: 30rpx;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 13;
          /* 省略号显示的行数 */
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    .trans {
      transform: translateY(-40rpx);
    }

    .daohang {
      .el-col {
        display: flex;
        align-items: center;

        .el-image {
          transform: scale(0.7);
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
      position: relative;
      z-index: 5;
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

      .banner {
        height: 340rpx;
      }

      .trans {
        transform: translateY(-60rpx);
      }

      .text-content {
        width: 100% !important;
        padding: 0 !important;
        height: fit-content !important;
        margin-top: 165rpx !important;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        flex-direction: column;
        background-color: #3333333d;

        .txt {
          color: #fff;
          font-weight: normal;
          margin-bottom: 30rpx;
          font-size: 30rpx;
        }
      }

      .title {
        height: 80rpx;
        font-size: 50rpx;
        color: #303133;
      }

      .content {
        line-height: 50rpx;

        .instruction {
          h2 {
            margin-bottom: 40rpx;
          }
          p{
            margin-bottom: 50rpx;
          }
        }

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
          max-height: 500px;
        }
      }

      view {
        text-indent: 60rpx;
        margin-bottom: 20rpx;
      }
    }
  }
}</style>
