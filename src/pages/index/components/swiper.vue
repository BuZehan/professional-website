<template>
  <view class="swiper-container">
    <view class="m-swiper">
      <swiper class="swiper" circular indicator-dots :autoplay="true" :interval="6000" :duration="600">
        <swiper-item v-for="img in MSwiperArr" :key="img">
          <view class="swiper-item">
            <image v-if="img.name == 'img'" class="swiper-img" :src="img.url" />
            <video style="width: 100%;height:100%" v-else :src="img.url" loop autoplay="true" controls="false" />
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view class="pc-swiper">
      <ul ref="ul">
        <li v-for="item, i in PCSwiperArr" :key="i" :class="{ active: currentImg === i }">
          <view class="bg1"></view>
          <view class="bg"></view>
          <view class="text-content">
            <h3>2023/11/31</h3>
            <p class="desc">{{ item.text }}</p>
            <view class="btn" @tap="handleSelect(item.routeUrl)">查看详情</view>
            <view class="arrow">
              <p @tap="prev"></p>
              <span>{{i + 1}}/{{PCSwiperArr.length}}</span>
              <p @tap="next"></p>
            </view> 
          </view>
          <el-image fit="cover" :src="item.imgUrl" />
        </li>
      </ul>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from "vue";
import banner1 from '@/static/banner-fm.png'
const PCSwiperArr = [
  {
    text: "校企合作谱新篇：2023年华为ICT人才联盟双选会在我校成功举办,2023年11月4日，在秋高气爽的丰收季节，华为公司疫情之后省内的首次ICT人才联盟双选会在我校兴安校区体育场成功举办！",
    imgUrl: banner1,
    routeUrl:'8'
  },
    {
    text: '校企合作谱新篇：2023年华为ICT人才联盟双选会在我校成功举办,2023年11月4日，在秋高气爽的丰收季节，华为公司疫情之后省内的首次ICT人才联盟双选会在我校兴安校区体育场成功举办！',
    imgUrl: 'https://test.hebic.cn/uploadfile/2023/1106/20231106083424630.jpg',
    routeUrl:'8'
  },
  {
    text: " 为了给企业和学生搭建高质量供需对接平台，全力促进2024届毕业生早就业、高质量就业，我校的重点合作企业华为公司携多家金牌代理伙伴，如神州数码、科林电气、启辰科技、天成辰泰、敏行电子、顶思电子、迈思网络、科翔电子、领帆商贸、佳络科技、北京电旗通讯、南京华苏、晟商信息、卓驰科技、杰讯科技等，在三年疫情结束后，组织首次ICT人才联盟双选会，与我校2024届毕业生秋季校园双选会于11月4日上午9：00在兴安校区体育场同期举办。",
    imgUrl: 'https://test.hebic.cn/uploadfile/2023/1106/20231106083223981.jpg',
    routeUrl:'8'
  }
];

// 移动端
// 实验室
import mbanner1 from "@/static/mbanner/1.jpg";
const MSwiperArr = [{ name: "img", url: mbanner1 }, { name: "img", url: 'https://test.hebic.cn/uploadfile/2023/1106/20231106083424630.jpg' }];

// 轮播
const currentImg = ref(0)
let timer = setInterval(() => {
  next()
}, 8000);

const next = () => {
  clearInterval(timer)
  timer = setInterval(() => {
    next()
  }, 8000);
  currentImg.value++
  if (currentImg.value - 1 >= PCSwiperArr.length - 1) currentImg.value = 0;
}
const prev = () => {
  clearInterval(timer)
  timer = setInterval(() => {
    next()
  }, 8000);
  currentImg.value--
  if (currentImg.value < 0) currentImg.value = PCSwiperArr.length - 1;
}
const ul = ref(null)
// 路由跳转
const handleSelect = (name) => {
    PubSub.publish('navgation-event', { e: name })
}

</script>

<style scoped lang="scss">
@include respondTo("mobile") {
  .swiper-container {
    .pc-swiper {
      display: none;
    }

    .m-swiper {
      .swiper {
        height: 50vmin;
        min-height: 460rpx;
      }

      .swiper-item {
        display: block;
        height: 100%;

        .swiper-img {
          width: 100vw;
          height: 100%;
        }
      }
    }
  }
}

@include respondTo("desktop") {
  .swiper-container {
    .m-swiper {
      display: none;
    }

    .pc-swiper {
      height: 560px;
      overflow: hidden;
      width: 100vw;
      max-width: 1920px;
      margin: 0 auto;

      ul {
        list-style: none;
        padding: 0;
        position: relative;
        overflow: hidden;
        height: 100%;
        li {
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: all 1s;
          overflow: hidden;
          position: absolute;
          .bg,.bg1 {
            transform-origin: left center;
            transform: rotate(-24deg) translateX(-14%);
            height: 150%;
            width: 35%;
            position: absolute;
            z-index: 5;
            //花青色
            background-color: var(--MAIN);
            position: absolute;
            left: 0px;
            top: 1px;
            opacity: 1;
            background: rgba(11, 136, 252, 0.6);
            //border: 20px solid rgba(255, 255, 255, 0.46);
            backdrop-filter: blur(20px);
           // filter: drop-shadow(20px 0 #2595ffa6);
            
          }
          .bg1{
            transform: rotate(-24deg) translateX(-10%);
            background-color: #ffffff31;
            backdrop-filter: blur(10px);

          }
          .text-content {
            height: 100%;
            width: 24%;
            position: absolute;
            box-sizing: border-box;
            padding: 100rpx 50rpx 0 50rpx;
            z-index: 10;
            top: 0;

            h3 {
              font-size: 24px;
              font-weight: normal;
              line-height: 24px;
              letter-spacing: 0em;

              font-feature-settings: "kern" on;
              color: #FFFFFF;
            }

            .desc {
              color: #fff;
              line-height: 48rpx;
              font-size: 30rpx;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 10;
              /* 省略号显示的行数 */
              overflow: hidden;
              text-overflow: ellipsis;
              margin-top: 30px;
            }

            .btn {
              width: 100px;
              height: 24px;
              border-radius: 2px;
              opacity: 1;
              /* 自动布局 */
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 5px 10px;
              gap: 10px;
              font-size: 14px;
              font-weight: normal;
              line-height: 24px;
              letter-spacing: 0em;
              background: #FFFFFF;
              color: #0B88FC;
              margin-top: 50px;
              cursor: pointer;
            }


            .arrow {
              width: 180px;
              height: 100rpx;
              position: absolute;
              bottom: 80rpx;
              left: 20px;
              font-size: 24px;
              font-weight: normal;
              line-height: 24px;
              letter-spacing: 0em;
              display: flex;
              align-items: center;
              justify-content: space-between;
              color: #fff;

              p {
                &:nth-of-type(1) {
                  background: url('../../../static/pcbanner/banner-l.png') no-repeat center center;
                  transform: scale(0.8);
                }

                &:nth-of-type(2) {
                  background: url('../../../static/pcbanner/banner-r.png') no-repeat center center;
                  transform: scale(0.8);
                }

                margin: 16rpx;
                width: 80rpx;
                height: 80rpx;
                border-radius: 50%;
                background-color: #3333337e;
                display: flex;
                align-items: flex-start;
                justify-content: center;
                cursor: pointer;
              }
            }
          }

          .el-image {
            height: 100%;
            width: 100%;
          }
        }

        .active {
          opacity: 1;
        }
      }
    }
  }
}
</style>
