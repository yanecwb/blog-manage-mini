<template>
  <view class="page">
	<view class="index-top">
		<view class="indexTop-logo">
			<image
			class="logo"
			src="/static/login/logo.png"
		  ></image>
		  <text>Flechazo博客管理系统</text>
		</view>
		<view class="indexTop-text">一个通用管理系统，提供通用的基础功能、权限控制、动态页面等。</view>
	</view>
    <view>
      <h2>基础功能</h2>
      <view class="home-menu">
        <view class="menu-box" v-for="item in menuList[0]">
          <u-icon :name="item.iconUrl" color="#5677fc" size="30" />
          <text class="menu-text">{{ item.text }}</text>
        </view>
      </view>
    </view>
    <view style="margin-top: 38rpx">
      <h2>日志查询</h2>
      <view class="home-menu" style="justify-content: start">
        <view class="menu-box" v-for="item in menuList[1]">
          <u-icon :name="item.iconUrl" color="#5677fc" size="30" />
          <text class="menu-text">{{ item.text }}</text>
        </view>
      </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
.page {
	padding: 40rpx 20rpx;
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
.index-top{
	margin-bottom: 30rpx;
	padding: 0 110rpx;
	.indexTop-logo{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.logo {
			width: 100rpx;
			height: 100rpx;
			padding-right: 50rpx;
		  }
	}
	.indexTop-text{
		color: #333;
		font-size: 26rpx;
		margin: 0 -36rpx;
		margin-top: 26rpx;
		text-align: center;
	}
}


</style>

<script>
export default {
  data() {
    return {
      menuList: [
        [
          {
            iconUrl: "https://i.328888.xyz/2023/01/19/HxHQk.png",
            text: "账号管理",
          },
          {
            iconUrl: "https://i.328888.xyz/2023/01/19/Hxk3q.png",
            text: "文章管理",
          },
          {
            iconUrl: "https://i.328888.xyz/2023/01/19/Hx26x.png",
            text: "留言管理",
          },
          {
            iconUrl: "https://i.328888.xyz/2023/01/19/Hxwba.png",
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
  methods: {},
};
</script>
