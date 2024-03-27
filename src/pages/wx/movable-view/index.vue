<template>
  <view>
    <view style="position: relative;" class="page-container">
      <view> <SsecondFloor :scale="secondFloorScale" /> </view>
      <movable-area class="area-style">
        <movable-view
          :disabled="disabled"
          :y="y"
          :inertia="true"
          :damping="16"
          @change="changeMove"
          @touchend="touchend"
          @touchstart="touchstart"
          @click="reset"
          class="content-style br"
          direction="vertical"
        >
          第一层
        </movable-view>
      </movable-area>
    </view>
  </view>
</template>

<script>
import SsecondFloor from "./components/second-floor.vue";
export default {
  components: { SsecondFloor },
  data() {
    return {
      y: 0, // 一楼（可滑动块）距离顶部的距离
      minY: 0, // 一楼（可滑动块）距离顶部的最小距离
      maxY: 0, // 一楼（可滑动块）距离顶部的最大距离
      endY: 0, // 滑动结束是y的值
      startY: 0, // 滑动开始时y的值（要么等于minY,要么等于maxY）
      threshold: 150, // 滑动阀值（指 滑动超过此值一段距离，才会打开或者关闭，否则弹回原来的状态）
      disabled: false, // 是否禁止滑动
      secondFloorScale: 0.1, //第二层的缩放
      isVibrate: false,
    };
  },
  methods: {
    // 滑动过程中，把每次滑动的当前值，赋值给endY
    changeMove(e) {
      this.endY = e.detail.y;
    },
    // 滑动结束
    touchend() {
      const { startY, endY, maxY, threshold } = this;
      // 判断向下滑动
      if (endY > startY) {
        if (endY - startY >= threshold) {
          // 触发下滑，页面打开二楼
          this.y = maxY;
          // 触发下滑成功，设置震动反馈
          wx.vibrateShort({ type: "heavy" });
          this.secondFloorScale = 1;
        } else {
          // 未触发下滑，页面回弹到一楼
          this.y = endY;
          clearTimeout(this.timer);
          this.timer = setTimeout(this.reset, 1);
        }
      }
      // 判断上划
      if (startY > endY) {
        // 触发上滑，页面回到一楼
        this.reset();
      }
    },
    // 滑动开始
    touchstart() {
      this.startY = this.y;
    },
    reset() {
      this.y = this.minY;
      this.secondFloorScale = 0.1;
    },
  },
  onLoad() {
    // 获取屏幕高度
    wx.getSystemInfo().then((res) => {
      this.maxY = res.screenHeight - 150;
    });
    // 设置最大顶部距离（-150，目的是让一楼漏出头，方便上划，或者点击）
  },
};
</script>
<style lang="scss" scoped>
.page-container{
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient( #414159 0%,  #292639 100%);
  text-align: center;
}
.area-style {
  height: 200vh;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.content-style {
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  text-align: center;
}
</style>
