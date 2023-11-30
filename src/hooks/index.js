import { debounce } from "@/utils"
import { MainStore } from "@/store"
import PubSub from "pubsub-js"
const UseMian = MainStore()
export const windowResize = () => {
  window.addEventListener('resize', debounce((e) => {
    let w = window.innerWidth;
    if (w >= 992) {
      // PC
      const hash = window.location.hash;
      if (hash === '#/') {
        console.log('> 992 ');
      } else {
        // console.log(window.location);
        let hashValue = UseMian.hashMap.get(hash);
        // console.log(hashValue);
        // console.log(hashValue[0], hashValue[1]);
        UseMian.updateRouterIndex( `${hashValue[0]}`)
        window.location.href = '/';
        console.log('跳转首页');
      }
      // window.location.href = '/'
    }
    if (w < 992) {
      // mobile

    }
  }, 500))
}