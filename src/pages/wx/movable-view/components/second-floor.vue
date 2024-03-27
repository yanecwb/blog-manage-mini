<template>
  <view
    class="out"
    :style="{
      transform: 'scale(' + scale + ')',
    }"
  >
    <view class="icon_box">
      <image
        v-for="i in 8"
        :key="i"
        src="https://images.alphacoders.com/520/thumb-350-520987.jpg"
        class="ico"
      ></image>
    </view>
  </view>
</template>
<script>
export default {
  name: "secondFloor",
  data: () => ({}),
  props: ["scale"],
};
</script>
<style lang="scss" scoped>
.out{
  padding: 80rpx 30rpx;
  min-height: calc(100vh - 152rpx);
  transition: 1.3s ease-in-out;
  .icon_box{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .ico{
      width: 110rpx;
      height: 110rpx;
      border-radius: 100%;
      margin: 0 20rpx;
      margin-bottom: 40rpx;
    }
  }

}
</style>
