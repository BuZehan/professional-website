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
          <h1 style="color: #fff;font-weight:normal;margin-bottom:30px;">关于天融信</h1>
          <p class="desc">中国领先的网络安全、大数据与云服务提供商 </p>
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
                  <p>
                    浩鲸科技在通信领域已覆盖全球近150家主流电信运营商，服务近18亿终端用户。其中，包括中国三大电信运营商（中国移动、中国电信、中国联通），欧洲的法国电信（Orange）、沃达丰（Vodafone）、荷兰皇家电信（KPN）、西班牙电信（Telefonica）、卢森堡POST，美洲电信（America
                    Movil），东南亚的泰国TRUE，马来西亚电信（Telekom
                    Malaysia），印尼Smartfren、Telkomsigma，菲律宾DITO，中东的阿联酋电信（Etisalat）、Zain，非洲的MTN等主流电信运营商。</p>
                  <el-button @tap="jumpPage" style="float: right;">了解详情</el-button>
                </el-col>
                <el-col v-showMeta="`animate__fadeInRight`" class="image-wrapper" :xs="24" :sm="12">
                  <el-image :src="txtRight" fit="cover" />
                </el-col>
              </el-row>
              <!-- 文字 -->
              <el-row class="row2" justify="space-between" :gutter="20">
                <el-col class="instruction" :xs="24" :sm="24">
                  <p>多年来，浩鲸科技先后获得 “国家规划布局内重点软件企业”、“云计算领军企业”、“新经济之王中国最具影响力企业”、“最强人工智能公司Top 30”、“TM Forum（电信管理论坛）Excellence
                    Award年度卓越大奖”、“Frost & Sullivan全球客户价值领导奖”、“Informa最佳数字转型推荐奖”等荣誉，同时作为TM Forum
                    ODA-CA开放数字架构的初创成员单位之一，助力电信行业建立开放、敏捷、符合云原生和零运维的全新数字化架构和标准，推动行业变革。此外，公司拥有国家计算机信息系统集成一级资质、全球研发CMMI
                    5级认证等资质，并获得国家高新技术企业认定。</p>
                  <p>
                    为了更好的为全球客户提供数字化转型服务，浩鲸科技具备全球化的咨询、产品研发及交付能力。在德国、荷兰、比利时、卢森堡、印度、新加坡、泰国等国家，及国内南京、北京、上海、广州、长沙、杭州、福州、郑州、成都等地，共设立了50多个研发中心和分支机构。
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
// 面包屑
import AppBreadcrumb from "@/components/app-breadcrumb/app-breadcrumb.vue";
import AppHeader from "@/components/app-header/app-header.vue";
import AppPopup from "@/components/app-popup/app-popup.vue";
// 页脚
import Footer from "@/components/app-footer/app-footer.vue"
// 背景图
import backgroundImg from "../background-img/background-img.vue";
// banner
import trx_banner1 from './image/trx/trx_banner.jpg';
import txtRight from './image/hjkj/txtRight.jpg';
// pc端---跳转
const pcNavgationTo = (e) => {
  PubSub.publish('navgation-event', { e })
};
// 跳转---移动端
const navgationTo = (url) => {
  uni.navigateTo({
    url: `/pages/${url}/${url}`,
  });
};
// 跳转华为云计算官网
const jumpPage = () => {
  window.open("https://www.topsec.com.cn/")
};
</script>
  
<style scoped lang="scss">
@import "../../../../style.scss";

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
        background-image: url('./image/trx/trx_banner.png');
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
  