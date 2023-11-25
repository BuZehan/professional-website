<template>
    <view class="app-footer">
        <el-row>
            <el-col class="left" :xs="24" :sm="24" :md="9">
                <el-image src="../../static/logo-sm.png" />
            </el-col>
            <el-col class="center" :xs="24" :sm="24" :md="9">
                <p v-for="item in data" :key="item.key">{{ item.key }} -- {{ item.value }}</p>
            </el-col>
            <el-col class="right" :xs="24" :sm="24" :md="6">
                <!-- <div /> -->
            </el-col>
        </el-row>
    </view>
</template>
   
   
<script setup>
const data = [
    {
        key: "[地址]",
        value: "河北省石家庄市栾城区兴安大街109号"
    },
    {
        key: '[邮编]',
        value: "051430"
    },
    {
        key: "办公电话：",
        value: "0311-68020793、68020872"
    }
]
</script>
   
   
<style scoped lang='scss'>
@import '@/style.scss';
@include respondTo('mobile') {
    .app-footer {
        width: 100vw;
        background-color: var(--HUAQING);
        display: flex;
        height: 300px;
        overflow: hidden;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 40rpx 20rpx;
        margin-top: 50px;
        .el-row {
            width: 100%;
            .el-col{
                margin-bottom: 100rpx;
            }
            .left {
                display: flex;
                align-items: center;
                justify-content: center;
            }
    
            .center {
                display: flex;
                align-items: flex-start;
                justify-content: center;
                flex-direction: column;
    
                p {
                    color: #eee;
                    margin-bottom: 20px;
                }
            }
    
            .right {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
}

@include respondTo('desktop') {
    .app-footer {
        width: 100vw;
        background-color: var(--ZAOHONG);
        display: flex;
        height: 200px;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 40rpx 20rpx;
        margin-top: 50px;
        .el-row {
            width: 100%;
    
            .left {
                display: flex;
                align-items: center;
                justify-content: center;
            }
    
            .center {
                display: flex;
                align-items: flex-start;
                justify-content: center;
                flex-direction: column;
    
                p {
                    color: #eee;
                    margin-bottom: 20px;
                }
            }
    
            .right {
                display: flex;
                align-items: center;
                justify-content: center;
    
              
            }
        }
    }
}

</style>