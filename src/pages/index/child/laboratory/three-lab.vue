<template>
    <view class="lab-wrapper">
        <view class="tip">双击进入全屏,(滚动缩放视野)</view>
        <view>
            <el-row justify="start">
                <el-col :xs="24" :sm="{ span: 24 }">
                    <view v-show="IsLoading" class="loading">Loading...</view>
                    <view class="three" ref="target">
                        <view class="btn-wrapper">
                            <!-- <el-button type="primary" size="small" v-for="item, i in sceneList"
                                @click="changeScene(i, item.type)">{{ item.name
                                }}</el-button> -->
                        </view>
                    </view>
                    <view class="tip"></view>
                </el-col>
            </el-row>
        </view>
    </view>
</template>
   
  
<script setup>
import { nextTick, onMounted, onActivated, ref } from 'vue';
import * as THREE from 'three'
import gsap from 'gsap'
import PubSub from "pubsub-js";
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
//导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import img1 from "@/static/HDR/office.jpg"
import img2 from "@/static/HDR/B312.jpg"
import img3 from "@/static/HDR/X426.jpg"
const sceneList = [{ name: "X426", url: img3, type: 'jpg' }, { name: "B207", url: img1, type: 'jpg' }, { name: "B312", url: img2, type: 'jpg' }]
const currentTexture = ref(sceneList[0].url)
let IsLoading = ref(true)

// 1、 创建场景    
const scene = new THREE.Scene();
// 2、 创建相机  （透视相机）
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 6000)
//设置相机位置
camera.position.set(10, 10, 20)
scene.add(camera)

// 加载材质
let texture = new THREE.TextureLoader().load(currentTexture.value);
// 球体
const sphereGeometry = new THREE.SphereGeometry(200, 64, 64)
let material = new THREE.MeshStandardMaterial({
    map: texture,
    side: THREE.DoubleSide,
})
//纹理清晰
material.minFilter = THREE.NearestFilter;
material.magFilter = THREE.NearestFilter;
// scene.map = new THREE.TextureLoader().load(currentTexture.value)
// 应用spherical mapping
material.map.wrapS = THREE.RepeatWrapping;
material.map.wrapT = THREE.RepeatWrapping;
// material.map.mapping = THREE.SphericalReflectionMapping;
material.opacity = 1
const sphere = new THREE.Mesh(sphereGeometry, material)
scene.add(sphere)

// 切换贴图
// const changeScene = (i, type) => {
//     console.log('贴图切换');
//     currentTexture.value = sceneList[i].url
//     material.map = new THREE.TextureLoader().load(currentTexture.value)
//     if (sceneList[i].type === 'jpg') {
//         rotate()
//         sceneList[i].type = 'none'
//     }
// }
// 创建一个 LoadingManager 对象
// const light = new THREE.AmbientLight(0xffffff, 1.8)
// scene.add(light)
// 创建半球光源
const hemiLight = new THREE.HemisphereLight(0xffffff,0xffffff, 1.8);
scene.add(hemiLight);
const renderer = new THREE.WebGLRenderer()
const target = ref(null)
const rotate = () => {
    sphere.rotation.y = 0
    gsap.to(sphere.rotation, { y: Math.PI / 4, duration: 2, ease: "linear" })
}
// 组件挂载
onMounted(() => {
    nextTick(() => {
        var manager = new THREE.LoadingManager();
        // 进度回调函数
        manager.onProgress = function (item, loaded, total) {
            // console.log('Loading texture ' + currentTexture.value + ': ' + loaded + '/' + total);
            if (loaded / total === 1) {
                IsLoading.value = false
                // console.log(IsLoading.value);
            }
        };

        // 加载材质
        var loader = new THREE.TextureLoader(manager);
        PubSub.subscribe('changeScene', (msg, data) => {
            // console.log('贴图切换');
            IsLoading.value = true
            currentTexture.value = sceneList[data.i].url
            material.map = loader.load(currentTexture.value)
            if (sceneList[data.i].type === 'jpg') {
                rotate()
                sceneList[data.i].type = 'none'
            }
        })
        renderer.setSize(target.value.$el.offsetWidth, target.value.$el.offsetHeight)
        target.value.$el.appendChild(renderer.domElement)
        rotate()
        // 第一人称
        // const fpControls = new FirstPersonControls(camera, renderer.domElement);
        // fpControls.movementSpeed = 200;
        // fpControls.lookSpeed = 0.1

        // 加载控制器
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.enablePan = false; // 禁止平移
        controls.maxDistance = 110
        controls.minDistance = 0.1
        // var clock = new THREE.Clock();
        function render() {
            controls.update()
            renderer.render(scene, camera);
            // fpControls.update(clock.getDelta());
            //渲染下一帧后 就会调用render函数  请求动画帧 事件参数 控制动画
            requestAnimationFrame(render);
        }
        render();
        //  监听页面变化  更新渲染画面
        window.addEventListener('resize', () => {
            // 更新摄像头
            camera.aspect = target.value.$el.offsetWidth / target.value.$el.offsetHeight
            // 更新摄像机的投影矩阵
            camera.updateProjectionMatrix()
            // 更新渲染器
            renderer.setSize(target.value.$el.offsetWidth, target.value.$el.offsetHeight)
            // 设置渲染器的像素比
            renderer.setPixelRatio(window.devicePixelRatio)
        })

        //监听双击事件
        window.addEventListener('dblclick', () => {
            // 双击控制全屏 退出全屏
            try {
                const fullScreenElement = document.fullscreenElement
                if (!fullScreenElement) {
                    renderer.domElement.requestFullscreen() //让画布对象全屏
                } else {
                    document.exitFullscreen() //退出全屏  document
                }
            } catch (error) {

            }
        })
    })

    // 监听键盘按下和释放事件
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);

    // 定义键盘状态对象
    const keyboard = {};

    // 键盘按下事件处理函数
    function onKeyDown(event) {
        keyboard[event.keyCode] = true;
    }

    // 键盘释放事件处理函数
    function onKeyUp(event) {
        keyboard[event.keyCode] = false;
    }

    // 渲染循环函数
    function animate() {
        //   requestAnimationFrame(animate);
        // 检查键盘状态来更新相机位置
        if (keyboard[37]) { // 左箭头键
            camera.position.x += 0.1;
        }
        if (keyboard[38]) { // 上箭头键
            camera.position.y -= 0.1;
        }
        if (keyboard[39]) { // 右箭头键
            camera.position.x -= 0.1;
        }
        if (keyboard[40]) { // 下箭头键
            camera.position.y += 0.1;
        }

        // 渲染场景
        renderer.render(scene, camera);
    }

    // 调用渲染循环函数开始渲染
    animate();

})

// 组件激活
onActivated(() => {
    PubSub.publish('three-ok', { state: 1 })
})

</script>
   
<style scoped lang='scss'>
.lab-wrapper {
    width: 100%;
    position: relative;
    height: 100%;
    overflow: hidden;
    margin: 0 !important;

    .tip {
        text-align: center;
        font-size: 28rpx;
        color: #999;
        text-indent: 0 !important;
    }

    // .btn-wrapper {
    //     display: flex;
    //     .el-button {
    //         cursor: pointer;
    //         margin: 50rpx auto;
    //     }
    // }

}

@include respondTo('mobile') {
    .three {
        width: 100vw;
        height: 50vh;
        overflow: hidden;
    }

    .loading {
        width: 100%;
        height: 50vh;
        position: absolute;
        z-index: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: #409eff;
    }
}

@include respondTo('desktop') {
    .lab-wrapper {
        width: 100%;

        .loading {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 500;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            background-color: #409eff;
        }

        .three {
            width: 100%;
            overflow: hidden;
            height: 70vh;
        }

        .el-col {}



    }
}
</style>