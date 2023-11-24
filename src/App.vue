<script>
import pageAnimation from "@/components/library/page-animation-pro/index.vue";

export default {
  mixins: [pageAnimation],
  onLaunch: function () {
    console.log("App Launch");
  },
};
</script>
<style>
/*每个页面公共css */
@media (min-width: 500px) and (max-width: 960px) {
 html {
  font-size: 16px !important;
 }
}
</style>
