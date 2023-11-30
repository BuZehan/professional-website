<template>
    <view class="teacher-info">
        <el-row >
            <el-col class="teacher-img" :xs="{span:24}" :sm="24" :md="6">
                <el-image fit="cover" :src="teacherInfo.img" />
            </el-col>
            <el-col class="text-wrapper"  :xs="{offset:1,span:22}"  :md="18">
                <el-row>
                    <el-col :xs="24" class="name">
                        {{ teacherInfo.name }}
                        <text class="title">
                        {{ teacherInfo.title }}
                        </text>
                    </el-col>
                    <el-col :xs="24" class="desc">
                        <view class="desc-item" v-if="teacherInfo.desc?.eduExp.length > 0"><strong>教育经历</strong>
                            <view v-for="item, i in teacherInfo.desc.eduExp" :key="i">{{ item }}</view>
                        </view>
                        <view class="desc-item" v-if="teacherInfo.desc.honor && teacherInfo.desc?.honor.length > 0">
                            <strong>所获荣誉</strong>
                            <view v-for="item, i in teacherInfo.desc.honor" :key="i">{{ item }}</view>
                        </view>
                        <view class="desc-item" v-if="teacherInfo.desc.area"><strong>研究领域</strong>
                            <view>{{ teacherInfo.desc.area }}</view>
                        </view>
                        <view class="desc-item" v-if="teacherInfo.desc.Exp"><strong>工作经历</strong>
                            <view v-for="exp, i in teacherInfo.desc.Exp" :key="i"> {{ exp }}</view>
                        </view>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>

        <el-button @tap="back"  class="hidden-sm-and-down">返回</el-button>
        <el-button @tap="backM" class="hidden-md-and-up">返回</el-button>

    </view>
</template>
   
   
<script setup>
import { onBeforeUnmount, onActivated, computed } from 'vue'
import PubSub from 'pubsub-js'
import { TeacherInfoStore } from '@/store/modules/teacherInfo.js'
const UseTeacherInfoStore = TeacherInfoStore()
// 教师信息
const teacherInfo = computed(() => {
    return UseTeacherInfoStore.teacherInfo
})
// 返回
const back = (v) => {
    PubSub.publish('teacher-event', { v: 0 })
}
const backM = () => {
    PubSub.publish('teacher-event', { v: 0 })
    uni.navigateBack()
}
onBeforeUnmount(() => {
    PubSub.unsubscribe('teacher-event')
    PubSub.unsubscribe('page-scroll')
})
// 页面滚动
onActivated(() => {
    PubSub.publish('page-scroll', { scroll: true })
})

</script>
   
   
<style scoped lang='scss'>
.teacher-info {
    font-weight: 300;

    .el-image {
        width: 300rpx;
        height: 400rpx;
    }

    .el-row {
        .name {
            font-weight: bold;
            font-size: 46rpx;
            color: var(--ZAOHONG);
            margin-bottom: 40rpx;
        }

        .title {
            font-size: 32rpx;
            color: #666;
            font-weight: bold;
        }

        .desc {
            font-size: 30rpx;
            color: #666;
            line-height: 54rpx;

            .desc-item {
                margin-bottom: 40rpx;

                view {
                    margin: 10rpx;
                    text-indent: 64rpx;

                }
            }

            strong {
                color: #333;
                font-size: 36rpx;
                font-weight: bold;
                border-left: 6rpx solid var(--ZAOHONG);
                box-sizing: border-box;
                padding-left: 30rpx;
            }
        }

        .text-wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }
    }

    .el-button {
        cursor: pointer;
        border-radius: 0;
        border: 1rpx solid #ee3f4d;
        float: right;
        &:hover {
            background-color: #ee3f4d;
            color: #fff;
        }
    }
}

@include respondTo('mobile') {
    .teacher-info{
        .el-row{
            .teacher-img{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 60rpx;
            }
        }
    }
}
</style>