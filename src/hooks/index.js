import { debounce } from "@/utils"
import { MainStore } from "@/store"
import PubSub from "pubsub-js"
import { ref, onMounted, onUnmounted,computed } from 'vue'


const UseMian = MainStore()
export const IsPC = computed(() => {
  // console.log(window.location);
  // let hash = window.location.hash
  // let url1 = hash.substring(1, hash.length)
  // let url2 = url1.split('?')[0]
  // console.log(url2);
  return UseMian?.IsPC
})
export const windowResize = () => {
  window.addEventListener('hashchange',(e) => {
    if(IsPC.value) {
      window.location.hash = '#/'
    }
  })
  window.addEventListener('resize', debounce((e) => {
    console.log(IsPC.value);
    UseMian.SetIsPC()
    if (IsPC.value) {
      // PC
      const hash = window.location.hash;
      if (hash === '#/') {
        // console.log('> 992 ');
        console.log(window.location.hash);
      } else {
        window.location.replace('/');
      }
    }
    if (!IsPC) {
      // mobile

    }
  }, 500))
}
 
export function useMouse(target) {
  const x = ref(0)
  const y = ref(0)
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))
  return { x, y }
}

