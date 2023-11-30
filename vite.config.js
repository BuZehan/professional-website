import { defineConfig, loadEnv } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { publish } from "pubsub-js";
// https://vitejs.dev/config/
/**
 * mode 当前环境模式 command 在 Vite 的 API 中，在开发环境下
 * command 的值为 serve（在 CLI 中， vite dev 和 vite serve 是 vite 的别名），而在生产环境下为 build
 * ssrBuild 服务器共享处理 SSR 和非 SSR 请求的配置,仍是实验性的
 */
export default defineConfig(({ mode, command, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      uni(),
    ],
    // publicDir:'public',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/style.scss";`
        }
      }
    },
    // vite.config.ts
    server: {
      //同plugins同级
      port: 8080, //本地端口号
      host: "192.168.171.232",
      proxy: {
        //配置代理服务器
        "/api": {
          target: "http://192.168.211.232:3000/", //目标url
          changeOrigin: true, //允许跨域
          rewrite: (path) => path.replace(/^\/api/, "/api/v1"), //重写路径,替换/api
        },
      },
    },
    // publicDir:"public"
  };
});
