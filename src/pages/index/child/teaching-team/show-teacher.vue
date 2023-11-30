<template>
    <view class="teacher-wrapper">
        <el-image fit="cover" :src="img" />
        <view class="right-wrapper">
            <view class="teacher-name">{{ name }}</view>
            <view class="teacher-title">{{ title }}</view>
            <view class="teacher-desc" >{{ desc.Exp[0] }}</view>
            <el-button @tap="clickDetail" class="hidden-sm-and-down">详情</el-button>
            <el-button @tap="mClickDetail(index)" class="hidden-md-and-up">详情</el-button>
        </view> 
    </view>
</template>
   
   
<script setup>
const $props = defineProps({
    index:{
        type: Number,
        default: 0
    },
    img: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: "姓名"
    },
    title: {
        type: String,
        default: "标题"
    },
    desc: {
        type: Object,
        default: () => {}
    }
})

const $emits = defineEmits(['clickDetail','clickDetailM'])
const clickDetail = () => {
    $emits('clickDetail')
}

const mClickDetail = () => {
    $emits('clickDetailM')
    uni.navigateTo({
        url: `/pages/index/child/teaching-team/teacher-info-m?id=${$props.index}`,
    })
}
</script>
   
   
<style scoped lang='scss'>

.teacher-wrapper {
    width: 100%;
    margin: 40rpx auto;
    height: 420rpx;
    box-sizing: border-box;
    padding: 10rpx;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        background: url('../../../../static/sl.jpg') no-repeat center / cover;
        background-image: linear-gradient(to left,rgba(255,255,255,1),rgba(255,255,255,0)),url('../../../../static/sl.jpg');
        width: 100%;
        height: 100%;
        opacity: 0.3;
        right: 0;
        z-index: -1;
    }

    .el-image {
        width: 300rpx;
        height: 400rpx;
    }

    .right-wrapper {
        flex: 1;
        box-sizing: border-box;
        padding: 0rpx 10rpx;
        text-align: start;
        font-weight: normal;
        margin-left: 40rpx;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        height: 100%;
        .teacher-name {
            font-size: 48rpx;
            font-weight: bold;
            margin-bottom: 10rpx;
        }

        .teacher-title {}

        .teacher-desc {
            text-align: justify;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            /* 省略号显示的行数 */
            overflow: hidden;
            line-height: 46rpx;
            text-overflow: ellipsis;
        }

        .el-button {
            cursor: pointer;
            border-radius: 0;
            border: 1rpx solid #ee3f4d;
            margin: 0;
            opacity: 0.8;
            &:hover {
                background-color: rgb(200, 20, 20);
                color: #fff;
            }
        }
    }
}</style>