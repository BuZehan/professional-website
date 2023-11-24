import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import _directive from '@/components/library/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
// Pinia
import * as Pinia from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = Pinia.createPinia()
pinia.use(piniaPluginPersistedstate)

import 'animate.css';

// 创建一个应用
export function createApp() {
  // 使用createSSRApp创建一个SSR应用，并传入App组件作为参数
  const app = createSSRApp(App);
  // 使用pinia库
  app.use(pinia);
  // 使用ElementPlus库
  app.use(ElementPlus);
  // 使用_directive自定义指令
  app.use(_directive);
  // 返回包含app和Pinia的对象
  return {
    app,
    Pinia
  };
}
