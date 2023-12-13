// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器。
// 若果要挂载原型 app.config.globalProperties
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展

// 指令
import defaultImg from '@/static/shiliu.png'
//导入图片加载失败的默认图片
export default {
    install(app) {
        defineDirective(app)
    }
}
//定义自定义指令
const defineDirective = (app) => {
    app.directive('lazy', {
        mounted(el, binding) {
            const observer = new IntersectionObserver(([{ isIntersecting }]) => {
                if (isIntersecting) {
                    observer.unobserve(el)
                    if (!binding.value) {
                        el.src = defaultImg //error 图片加载失败默认图片
                        console.log('加载默认图片')
                    }
                    if (binding.value) {
                        let img = document.createElement('img')
                        img.src = binding.value
                        // showImageInfo(img)
                        // console.log("图片加载完毕")
                        el.children[0].setAttribute('style', `background-image: url(${binding.value}); background-position: center center; background-size: cover;`)
                        el.appendChild(img)
                    }
                    //把指令的值设置给src 属性 binding.value 就是属性的值

                }
            }, { threshold: 0.01 })

            observer.observe(el)
        },
    });
    app.directive('showMeta', {
        mounted(el, binding) {
            const observer = new IntersectionObserver((entries) => {
                let animateName = binding.value
                const entry = entries[0];
                if (entry.isIntersecting) {
                    observer.unobserve(el)
                    // console.log('加载指定元素',binding.value);
                    const durationTime = animateName.split('-')[1]
                    if (durationTime) {
                        el.style.setProperty('--animate-duration', `${+durationTime}s`);
                    } else {
                        el.style.setProperty('--animate-duration', '1.5s');
                    }
                    el.classList.add('animated', 'animate__animated', `${animateName.split('-')[0]}`)
                }
                if (!entry.isIntersecting && entry.intersectionRatio === 0) {
                    // 元素已经离开页面
                    // console.log('元素已经离开页面');
                    // el.classList.add('animated','animate__animated',`animate__fadeOutUp`)
                }
            }, { threshold: 0.01 })

            observer.observe(el)
        },
    })

    app.directive('pdf', {
        mounted(el, binding) {
            const observer = new IntersectionObserver(([{ isIntersecting }]) => {
                if (isIntersecting) {
                    observer.unobserve(el)
                    console.log(binding.value);

                    if (!binding.value) {
                        el.src = defaultImg //error 图片加载失败默认图片
                        console.log('加载默认图片')
                    }
                    if (binding.value) {
                        let img = document.createElement('img')
                        img.classList.add('pdfImg')
                        img.style.width = '100%'
                        img.style.margin = '0 auto'
                        img.style.maxHeight = '400px'
                        // img.style.transform = 'scale(0.7)'
                            try {
                                pdfjsLib.getDocument(binding.value).promise.then(pdf => {
                                    // 加载第一页
                                    pdf.getPage(1).then(page => {
                                        const scale = 1.5;
                                        const viewport = page.getViewport({ scale });
                                        // 创建一个 Canvas 元素来展示 PDF 页面
                                        const canvas = document.createElement('canvas');
                                        const context = canvas.getContext('2d');
                                        canvas.height = viewport.height;
                                        canvas.width = viewport.width;
                                        // 将 PDF 页面渲染到 Canvas 上
                                        const renderContext = {
                                            canvasContext: context,
                                            viewport: viewport
                                        };
                                        page.render(renderContext).promise.then(() => {
                                            img.src = canvas.toDataURL()
                                            // showImageInfo(img)
                                            console.log("图片加载完毕")
                                            // el.children[0].setAttribute('style', `background-image: url(${binding.value}); background-position: center center; background-size: cover;`)
                                            el.appendChild(img)
                                            // console.log(canvas.toDataURL());
                                        });
                                    });
                                });
                            } catch (error) {
                                console.log(error);
                            }
                    }
                    //把指令的值设置给src 属性 binding.value 就是属性的值

                }
            }, { threshold: 0.01 })

            observer.observe(el)
        },

    })
}
