<template>
  <view class="container">
    <template class="m-header">
      <AppPopup />
      <AppHeader />
    </template>
    <view class="container-content">
      <backgroundImg :img="[zjkj_img1]" />
      <view class="trans">
        <AppBreadcrumb class="breadcrumb" :currentPageTxtArr="['合作企业', '中憬科技集团有限公司']" />
        <el-row justify="center">

          <el-col :xs="{ span: 20 }" :sm="{ span: 20 }" :md="{ span: 18 }">
            <view class="title">中憬科技集团有限公司</view>
            <p class="line"></p>
            <view class="content">
              <!-- 左图右文 -->
              <el-row class="row1" justify="space-between" :gutter="20">
                <el-col v-showMeta="`animate__fadeInLeft`" class="instruction" :xs="24" :sm="11">
                  <h2>公司简介</h2>
                  <p>中憬科技集团有限公司始建于1953年，2001年由河北省邮电工程局更名为河北省通信建设有限公司，2021年更名为中憬科技集团有限公司，是一家历史悠久、信誉卓著的信息通信领域一体化服务提供商。 </p>
                  <p>公司注册资本壹亿元，年营业收入超20亿元，下设26个分公司和7个全资子公司，业务涉及全国30多个省市。具有多项资质：通信工程施工总承包壹级，电子与智能化工程专业承包壹级，市政、建筑、机电、电力工程施工总承包及钢结构工程专业承包，施工劳务，工程咨询甲级，工程测量甲级，电子通信广电行业（有线通信、无线通信）设计甲级，建筑智能化系统设计，通信工程监理甲级，房屋建筑工程监理，信息系统工程监理，信息通信网络系统集成企业服务能力甲级，信息技术服务标准（ITSS），能力成熟度模型集成（CMMI），安防工程壹级，河北省安全技术防范系统设计、安装、维修备案证壹级，通信网络代维（基站、铁塔、线路、装维、综合代维）甲级，承装（修、试）电力设施许可证，社会责任证书（SA8000），信息技术服务管理体系、信息安全管理体系，劳务派遣经营许可证，增值电信业务经营许可证，IS09001国际质量、环境、职业健康、信息安全等管理体系认证，信息通信行业企业AAA信用等级和施工、运维服务两个领域AAA社会信用评价等级认证。 </p>
                  <el-button @tap="jumpPage" style="float: right;">了解详情</el-button>
                  <!-- <p>华为云致力于构建安全可靠的云计算基础设施，采用多层次的安全防护机制，保障用户的数据安全和隐私保护。同时，华为云还提供了全面的技术支持和咨询服务，帮助客户更好地利用云计算技术推动业务发展。</p>
                  <p>华为云通过其丰富的云计算产品和服务，以及对安全、可靠性的高度重视，为企业客户提供了强大的云端解决方案，助力他们实现业务创新和发展。</p> -->
                </el-col>
                <el-col v-showMeta="`animate__fadeInRight`" class="image-wrapper" :xs="24" :sm="12">
                  <el-image :src="txtRight" fit="cover" />
                </el-col>
              </el-row>
              <!-- 文字 -->
              <!-- <el-row class="row2" justify="space-between" :gutter="20">
                <el-col class="instruction" :xs="24" :sm="24">
                  <p>公司是河北省认定的“高新技术企业”，业务范围覆盖通信运营商、设备商、政企客户及军警、教育、电力、建筑装饰、市政、旅游、交通、医疗等行业，可承担各种规模的基础网、业务网、支撑网的通信信息网络建设工程总体方案策划、设计、设备配置与选择、工程施工、工程后期的运行保障、维护、装维、网络及设备优化、信息系统集成、安防工程等业务，以及软件开发、招标代理、信息技术培训、工程监理等。 </p>
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
// banner
import zjkj_img1 from './image/zjkj/zjkj_banner1.jpg';
import txtRight from './image/zjkj/txtRight.jpg';
// 跳转华为云计算官网
const jumpPage = () => {
  window.open("http://www.zjtg.com.cn/")
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
  