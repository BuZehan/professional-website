<template>
  <view class="container">
    <template class="m-header">
      <AppPopup />
      <AppHeader />
    </template>
    <view class="container-content">
      <backgroundImg :img="[hjkj_img1]" />
      <view class="trans">
        <AppBreadcrumb class="breadcrumb" :currentPageTxtArr="['合作企业', '浩鲸云计算科技股份有限公司']" />
        <el-row justify="center">

          <el-col :xs="{ span: 20 }" :sm="{ span: 20 }" :md="{ span: 18 }">
            <view class="title">浩鲸云计算科技股份有限公司</view>
            <p class="line"></p>
            <view class="content">
              <!-- 左图右文 -->
              <el-row class="row1" justify="space-between" :gutter="20">
                <el-col v-showMeta="`animate__fadeInLeft`" class="instruction" :xs="24" :sm="11">
                  <h2>浩鲸云计算科技股份有限公司（简称“浩鲸科技”）是全球领先的数字化技术和服务的提供商</h2>
                  <p>致力于帮助全球客户实现向数字经济的跨越。公司成立于2003年，迄今已为全球80多个国家和地区的电信运营商、公共服务部门及其他行业客户提供优质的数字化转型解决方案和全栈产品技术服务。</p>
                  <p>
                    浩鲸科技在通信领域已覆盖全球近150家主流电信运营商，服务近18亿终端用户。其中，包括中国三大电信运营商（中国移动、中国电信、中国联通），欧洲的法国电信（Orange）、沃达丰（Vodafone）、荷兰皇家电信（KPN）、西班牙电信（Telefonica）、卢森堡POST，美洲电信（America
                    Movil），东南亚的泰国TRUE，马来西亚电信（Telekom
                    Malaysia），印尼Smartfren、Telkomsigma，菲律宾DITO，中东的阿联酋电信（Etisalat）、Zain，非洲的MTN等主流电信运营商。</p>
                  <el-button @tap="jumpPage" style="float: right;">官网</el-button>
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
// banner
import hjkj_img1 from './image/hjkj/hjkj_banner.jpg';
import txtRight from './image/hjkj/txtRight.jpg';
// 跳转华为云计算官网
const jumpPage = () => {
  window.open("https://www.iwhalecloud.com/")
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
  