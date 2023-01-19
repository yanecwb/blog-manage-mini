<template>
  <view class="page">
    <view class="box">
      <view class="index-top">
        <view class="indexTop-logo">
          <image class="logo" src="/static/logo.png"></image>
          <text style="color: #333">Flechazo博客管理系统</text>
        </view>
        <view class="indexTop-text"
          >一个通用管理系统，提供通用的基础功能、权限控制、动态页面等。</view
        >
      </view>
    </view>

    <view>
      <h2>基础功能</h2>
      <view class="home-menu">
        <view
          class="menu-box"
          v-for="(item, index) in menuList[0]"
          :key="index"
          @click="handleToMenu(item.url)"
        >
          <u-icon :name="item.iconUrl" color="#5677fc" size="30" />
          <text class="menu-text">{{ item.text }}</text>
        </view>
      </view>
    </view>
    <view style="margin-top: 38rpx">
      <h2>日志查询</h2>
      <view class="home-menu" style="justify-content: start">
        <view
          class="menu-box"
          v-for="(item, index) in menuList[1]"
          :key="index"
        >
          <u-icon :name="item.iconUrl" color="#5677fc" size="30" />
          <text class="menu-text">{{ item.text }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        [
          {
            iconUrl: "https://i.328888.xyz/2023/01/19/HxHQk.png",
            url: "/pages/base/account/index",
            text: "账号管理",
          },
          {
            iconUrl: "https://i.328888.xyz/2023/01/19/Hxk3q.png",
            url: "/pages/base/article/index",
            text: "文章管理",
          },
          {
            iconUrl: "https://i.328888.xyz/2023/01/19/Hx26x.png",
            url: "/pages/base/leave-message/index",
            text: "留言管理",
          },
          {
            iconUrl: "https://i.328888.xyz/2023/01/19/Hxwba.png",
            url: "/pages/base/resources/index",
            text: "资源管理",
          },
        ],
        [
          {
            iconUrl: "https://i.328888.xyz/2023/01/19/HgrZc.png",
            text: "登录日志",
          },
          {
            iconUrl: "https://i.328888.xyz/2023/01/19/HgrZc.png",
            text: "操作日志",
          },
        ],
      ],
    };
  },
  onLoad() {},
  methods: {
    handleToMenu(url) {
      uni.navigateTo({ url });
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  height: 100vh;
  padding: 40rpx 20rpx;
  .box {
    margin: -40rpx -20rpx;
    background-color: #fff;
  }
}
.home-menu {
  display: flex;
  justify-content: space-between;
  .menu-box {
    width: 187.5rpx;
    height: 187.5rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .menu-text {
      color: #333;
      margin-top: 10rpx;
      font-size: 24rpx;
    }
  }
}
.index-top {
  margin-bottom: 30rpx;
  padding: 0 110rpx;
  .indexTop-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 120rpx;
      height: 120rpx;
      padding-right: 50rpx;
    }
  }
  .indexTop-text {
    color: #333;
    font-size: 26rpx;
    margin: 0 -36rpx;
    margin-top: 26rpx;
    text-align: center;
  }
}
</style>
