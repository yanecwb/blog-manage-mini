<template>
  <view class="page">
    <view class="bg-my">
		<view class="sign-out" @click="handleSingOut"><u-icon  name="skip-back-left" size="20" color="#ccc"  label="退出" labelColor="#ccc" labelSize="14"/></view>
      <image
        class="logo"
        src="https://adminh5.demo.wueasy.com/static/images/my/mine_def_touxiang_3x.png"
        draggable="false"
      ></image>
      <text class="my-text">My Name</text>
    </view>
	<view class="cardcss">
		<u-form>
			<u-form-item prop="formData.account" v-for="item,index in MenuList" :borderBottom="index !== MenuList.length-1" @click="handleToMenu(index)" >
				<u-input
				  border="none"
				  prefixIconStyle="font-size:50rpx"
				  placeholderStyle="padding-left:10rpx;color:#ccc"
				  suffix-icon="arrow-right"
				  suffix-icon-style="fontSize: 24rpx"
				  readonly
				  :value="item.value"
				  color="#333"
				  fontSize="26rpx"
				  type="number"
				>
				<template #prefix>
					<u-icon :name="item.iconUrl" size="22"/>
				</template>
			</u-input>
			  </u-form-item>
		</u-form>
	</view>
	<view class="login-describe"
          >Copyright © 2022 wueasy All Rights Reserved.</view
        >
	<u-toast ref="uToast" />
  </view>
</template>
<style lang="scss" scoped>
.page{
	height: 100vh;
	background-color: #fafafa;
}

.bg-my {
  width: 100vw;
  height: 430rpx;
  background-image: url("https://adminh5.demo.wueasy.com/static/images/my/mine_bg_3x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  .sign-out {
	position: absolute;
	padding: 3rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 26rpx;
	top: 0rpx;
	left: 0;
  }
  .logo {
    width: 140rpx;
    height: 140rpx;
    padding-bottom: 36rpx;
  }

  .my-text {
    color: #fff;
    font-size: 30rpx;
  }
}
.cardcss {
	padding: 0 40rpx;
	padding-top: 18rpx;
	background-color: #fff;
}

::v-deep .u-form-item__body {
	padding: 30rpx 0 !important;
  }
  .login-describe {
	color: #a7a7a7;
	font-size: 20rpx;
	text-align: center;
	width: 100vw;
	margin-top: 26rpx;
  }

</style>

<script>
export default {
  data() {
    return {
      avatarUrl: "",
      nickname: "",
	  MenuList:[
		{
			iconUrl:'https://i.328888.xyz/2023/01/19/HgHBC.png',
			value:'修改密码'
		},
		{
			iconUrl:'https://i.328888.xyz/2023/01/19/HgrZc.png',
			value:'登录记录'
		},
		{
			iconUrl:'https://i.328888.xyz/2023/01/19/Hg3OA.png',
			value:'反馈意见'
		}
	  ]
    };
  },
  onLoad() {},
  methods: {
    onChooseAvatar(e) {
      const { avatarUrl } = e.detail;
      this.avatarUrl = avatarUrl;
    },
    onChangeNickname(e) {
      const { value } = e.detail;
      this.nickname = value;
      uni.setStorageSync("nickName", value);
    },
	handleToMenu(index){
		console.log(index);
		this.$refs.uToast.show({
          message:'功能开发中',
          duration: 1000,
        });
	},
	handleSingOut(){
		uni.reLaunch({
			url:'/pages/login/index'
		})
	}
  },
};
</script>
