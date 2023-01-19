<template>
  <view>
    <view class="searchBox">
      <u-search
        v-model="searchAccountText"
        placeholder="请输入"
        clearabled
        :show-action="false"
        input-align="center"
        @blur="_getSiteListApi"
      ></u-search>
      <u-button type="primary" shape="circle" size="small">新增账号</u-button>
    </view>
    <view class="cardbox">
      <view class="card">
        <view>123</view>
        <view class="operate"
          ><u-button type="error" :plain="true" text="注销" /><u-button
            type="warning"
            :plain="true"
            text="锁定"
        /></view>
      </view>
      <view class="card">
        <view>123</view>
      </view>
      <view class="card">
        <view>123</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.searchBox {
  width: 100vw;
  padding: 12rpx 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
::v-deep .u-button {
  width: 200rpx !important;
  margin-left: 18rpx !important;
}
.cardbox {
  padding: 20rpx;
  .card {
    border-radius: 20rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
    background-color: #fff;
    .operate{
        margin: 0 auto;
      }
  }
 
}
</style>

<script>
export default {
  data() {
    return {
      searchAccountText: "",
    };
  },
  methods: {
    _getSiteListApi() {
      console.log("_getSiteListApi");
    },
  },
};
</script>
