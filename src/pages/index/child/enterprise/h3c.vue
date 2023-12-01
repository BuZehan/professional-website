<template>
  <view class="container">
    <template class="m-header">
      <AppPopup />
      <AppHeader />
    </template>
    <view class="container-content">
      <backgroundImg :img="[h3c_banner1]" />
      <view class="trans">
        <AppBreadcrumb class="breadcrumb" :currentPageTxtArr="['合作企业', '新华三 ']" />
        <el-row justify="center">

          <el-col :xs="{ span: 20 }" :sm="{ span: 20 }" :md="{ span: 18 }">
            <view class="title">新华三</view>
            <p class="line"></p>
            <view class="content">
              <!-- 左图右文 -->
              <el-row class="row1" justify="space-between" :gutter="20">
                <el-col class="instruction" v-showMeta="`animate__fadeInLeft`" :xs="24" :sm="11">
                  <h2>新华三集团 </h2>
                  <p>新华三集团作为数字化解决方案领导者，致力于成为客户业务创新、数字化转型值得信赖的合作伙伴。作为紫光集团旗下的核心企业，新华三通过深度布局“云-网-算-存-端”全产业链，不断提升数字化和智能化赋能水平。新华三拥有计算、存储、网络、5G、安全、终端等全方位的数字化基础设施整体能力，提供云计算、大数据、人工智能、工业互联网、信息安全、智能联接、边缘计算等在内的一站式数字化解决方案，以及端到端的技术服务。同时，新华三也是HPE®服务器、存储和技术服务的中国独家提供商。</p>
                  <p>新华三集团深耕行业数十年，始终以客户需求为导向，提供场景化解决方案，支持运营商、政府、金融、医疗、教育、交通、制造、电力、能源、互联网、建筑等百行百业数字化转型实践，产品和解决方案广泛应用于百余个国家和地区。</p>
                  <el-button @tap="jumpPage" style="float: right;">官网</el-button>
                  <!-- <p>华为云致力于构建安全可靠的云计算基础设施，采用多层次的安全防护机制，保障用户的数据安全和隐私保护。同时，华为云还提供了全面的技术支持和咨询服务，帮助客户更好地利用云计算技术推动业务发展。</p>
                  <p>华为云通过其丰富的云计算产品和服务，以及对安全、可靠性的高度重视，为企业客户提供了强大的云端解决方案，助力他们实现业务创新和发展。</p> -->
                </el-col>
                <el-col class="image-wrapper" v-showMeta="`animate__fadeInRight`"  :xs="24"  :sm="12">
                  <el-image :src="textImg" fit="fill" />
                </el-col>
              </el-row>
              <!-- 文字 -->
              <el-row class="row2" v-showMeta="`animate__fadeInUp`"  :gutter="20">
                <el-col class="image-wrapper" style="justify-content:flex-start;" :xs="24" :sm="8">
                  <el-image  :src="txtRight" fit="cover" />
                </el-col>
                <el-col class="instruction" :xs="24" :sm="16">
                  <p>新华三集团坚持以技术创新为发展引擎，目前研发人员占比超过50%，专利申请总量超过14,000件，其中90%以上为发明专利。面对数字经济发展的广阔机遇，新华三持续深化“云智原生”战略，升级“数字大脑”，赋能百行百业数字化转型与变革，持续帮助客户在发展过程中实现：更智慧的业务决策（Smart）、更及时的业务响应（Timely）、更敏捷的业务部署（Agile）、更可靠的业务保障（Reliable）、更安全的业务环境（Safe）。</p>
                  <p>“融绘数字未来，共享美好生活”是新华三集团的企业愿景。未来，新华三将以数字化解决方案为画笔、以融合之力为色彩，与广大客户和合作伙伴一道，精耕务实 为时代赋智慧！ </p>
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
import h3c_banner1 from './image/h3c/h3c.jpg';
import textImg from './image/h3c/txtImg.jpg';
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
    window.open("https://www.h3c.com/cn/About_H3C/Company_Information/Company_Introduce/")
};
import txtRight from './image/h3c/txt_right.jpg'
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

      .row1,.row2 {
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
      .row2{
        margin: 0;
      }
      .image-wrapper {
        overflow-y: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-height: 500px;
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
          transform: scale(0.8);
        }
      }

      view {
        text-indent: 60rpx;
        margin-bottom: 20rpx;
      }
    }
  }
}</style>
  