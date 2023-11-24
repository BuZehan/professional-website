<template>
    <view class="teacher-list-wrapper">
        <el-row justify="space-between">
            <el-col :xs="24" :sm="12" :md="11" v-for="teacher, i in showData" :key="i">
                <ShowTeacher v-showMeta="(i+2) % 2 === 0 ? `animate__fadeInUp` : `animate__fadeInUp`" @clickDetail="clickDetail(teacher)"  @clickDetailM="clickDetail(teacher)" :name="teacher.name" :img="teacher.img"
                    :title="teacher.title" :desc="teacher.desc" :index="i" />
            </el-col>
        </el-row>
        <!-- 分页 -->
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :background="true"
            layout="prev, pager, next" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </view>
</template>
   
   
<script setup>
import { ref ,computed} from 'vue'
import PubSub from 'pubsub-js'
import { onBeforeUnmount } from 'vue'
import { TeacherInfoStore } from '@/store/modules/teacherInfo.js'
const UseTeacherInfoStore = TeacherInfoStore()
// 教师展示
import ShowTeacher from "./show-teacher.vue";
// 教师数据
const total = computed(() => {
    return UseTeacherInfoStore.teacherList.length;
});
const showData = computed(() => {
    return UseTeacherInfoStore.teacherList.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value);
});

// 查看教师详情
const clickDetail = (data) => {
    UseTeacherInfoStore.updateTeacherInfo(data)
    PubSub.publish('teacher-event', { v: 1 });
}
onBeforeUnmount(() => {
    PubSub.unsubscribe('teacher-event')
})


// 分页
const currentPage = ref(1)
const pageSize = ref(6)
const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}
</script>
   
   
<style scoped lang='scss'>
.teacher-list-wrapper {
    :deep(.el-pagination) {
        display: flex;
        justify-content: center;
        margin-top: 40rpx;

        .btn-next,
        .btn-prev {
            border: none;
            height: 32px;
            cursor: pointer;
            width: 32px;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgb(200, 20, 20);
            color: #eee;
        }

        .number{
            background-color: rgb(200, 20, 20);
            color: #eee;
            &:hover {
                color: #fff;
            }
        }
        .is-active{
            background-color: #fff !important;
            color: rgb(200,20,20) !important;
            border: 1rpx solid rgb(200,20,20);
        }

        .btn-prev {
            border: none;
        }
    }
}</style>