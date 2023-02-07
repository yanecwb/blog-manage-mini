<script>
import { getUpdate } from "@/utils";

export default {
  onLaunch: function () {
    getUpdate();
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
@import "app.scss";
</style>
