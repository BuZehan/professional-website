<template>
    <view class="lab-wrapper">
        <view>
            <el-row justify="start">
                <el-col :xs="24" :sm="{ span: 24 }">
                    <view class="three" ref="target">
                        <view class="btn-wrapper">
                            <el-button type="primary" size="small" v-for="item, i in sceneList"
                                @click="changeScene(i, item.type)">{{ item.name
                                }}</el-button>
                        </view>
                    </view>
                    <view class="tip"></view>
                </el-col>
            </el-row>

        </view>
    </view>
</template>
   
  
<script setup>
import { nextTick, onMounted, ref } from 'vue';
import * as THREE from 'three'
import gsap from 'gsap'
//导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'

const sceneList = [{ name: "B207", url: "/HDR/office.jpg", type: 'jpg' }, { name: "测试-夜晚", url: "/HDR/night.jpg", type: 'jpg' }, { name: "测试-白天", url: "/HDR/sky.jpg", type: 'jpg' }]
const currentTexture = ref(sceneList[0].url)

// 1、 创建场景    
const scene = new THREE.Scene();

// 2、 创建相机  （透视相机）
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 4000)
//设置相机位置
camera.position.set(0, 0, 10)
scene.add(camera)

// 球体
const sphereGeometry = new THREE.SphereGeometry(2000, 64, 64)
let material = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load(currentTexture.value),
    side: THREE.DoubleSide,
})
//纹理清晰
material.minFilter = THREE.NearestFilter;
material.magFilter = THREE.NearestFilter;
scene.map = new THREE.TextureLoader().load(currentTexture.value)
// 应用spherical mapping
material.map.wrapS = THREE.RepeatWrapping;
material.map.wrapT = THREE.RepeatWrapping;
// material.map.mapping = THREE.SphericalReflectionMapping;
material.opacity = 1
const sphere = new THREE.Mesh(sphereGeometry, material)
scene.add(sphere)

// 切换贴图
const changeScene = (i, type) => {
    console.log('贴图切换');
    currentTexture.value = sceneList[i].url
    material.map = new THREE.TextureLoader().load(currentTexture.value)
    if (sceneList[i].type === 'jpg') {
        rotate()
        sceneList[i].type = 'none'
    }
}
const light = new THREE.AmbientLight(0xfffdfdfd, 1.5)
scene.add(light)
const renderer = new THREE.WebGLRenderer()
const target = ref(null)
const rotate = () => {
    sphere.rotation.y = 0
    gsap.to(sphere.rotation, { y: Math.PI / 4, duration: 2, ease: "linear" })
}
// 组件挂载
onMounted(() => {
    nextTick(() => {
        renderer.setSize(target.value.$el.offsetWidth, target.value.$el.offsetHeight)
        target.value.$el.appendChild(renderer.domElement)
        rotate()
        // 加载控制器
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.enablePan = false; // 禁止平移
        controls.maxDistance = 700
        controls.minDistance = 0.1
        function render() {
            controls.update()
            renderer.render(scene, camera);
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


})



console.log('scene :', scene);
</script>
   
<style scoped lang='scss'>
.lab-wrapper {
    width: 100%;

    .three {
        width: 100%;
        height: 50vh;
        overflow: hidden;
        position: relative;

        .btn-wrapper {
            position: absolute;
            width: 100vw;
            height: 100vh;
            z-index: 5000;
            pointer-events: none;
            top: 0;

            .el-button {
                position: static;
                pointer-events: all;
                margin: 10px;
                opacity: .7;
            }
        }
    }

    .tip {
        color: #999;
        text-align: center;
        font-size: 28rpx;
    }

    .btn-wrapper {
        display: flex;

        .el-button {
            cursor: pointer;
            margin: 50rpx auto;
        }
    }

}

@include respondTo('mobile') {
    .three {
        width: 100vw;
        height: 50vh;
        overflow: hidden;
    }

}

@include respondTo('desktop') {
    .lab-wrapper {
        width: 100%;
        .three {
            width: 100%;
            height:70vh;
            overflow: hidden;
        }

        .el-col {}



    }
}</style>