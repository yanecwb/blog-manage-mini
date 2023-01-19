<template>
  <view>
    <view class="bg-login">
      <image
        class="logo"
        src="/static/login/logo.png"
        draggable="false"
      ></image>
      <text class="logo-text">Flechazo</text>
    </view>
    <view class="cardcss">
      <u-form labelPosition="left" :model="formData">
        <u-form-item prop="formData.account" borderBottom>
          <u-input
            v-model="formData.account"
            border="none"
            clearable
            prefixIcon="github-circle-fill"
            placeholder="账号"
            prefixIconStyle="font-size:50rpx"
            placeholderStyle="padding-left:10rpx;color:#ccc"
            type="number"
          />
        </u-form-item>
        <u-form-item prop="formData.pwd" borderBottom>
          <u-input
            v-model="formData.pwd"
            border="none"
            clearable
            prefixIcon="lock"
            placeholder="密码"
            prefixIconStyle="font-size:50rpx"
            placeholderStyle="padding-left:10rpx;color:#ccc"
            type="password"
          />
        </u-form-item>
        <u-form-item borderBottom>
          <u-input
            v-model="formData.verificationCode"
            border="none"
            clearable
            prefixIcon="fingerprint"
            placeholder="验证码"
            prefixIconStyle="font-size:50rpx"
            placeholderStyle="padding-left:10rpx;color:#ccc"
          />
          <template #right>
            <canvas
              canvas-id="canvas"
              @click="change"
              style="width: 90px; height: 30px"
            ></canvas>
          </template>
        </u-form-item>
      </u-form>
      <u-toast ref="uToast" />
      <view class="login-btn">
        <u-button
          text="登录"
          type="primary"
          :loading="isLoading"
          loadingText="正在登录"
          shape="circle"
          @click="handleSubmit"
        />
        <text class="login-describe"
          >Copyright © 2022 wueasy All Rights Reserved.</text
        >
      </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
.bg-login {
  width: 100vw;
  height: 400rpx;
  background-image: url(/static/login/bg_login.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    width: 140rpx;
    height: 140rpx;
    padding-bottom: 36rpx;
  }

  .logo-text {
    color: #fff;
    font-size: 30rpx;
  }
}

.cardcss {
  padding: 90rpx;
  padding-top: 50rpx;
  .login-btn {
    margin-top: 100rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .login-describe {
      color: #a7a7a7;
      font-size: 20rpx;
      text-align: center;
      margin-top: 40rpx;
    }
  }
}
::v-deep .u-form-item__body {
  padding: 36rpx 0 !important;
}
</style>

<script>
import drawPic from "./verificationCode";
export default {
  data() {
    return {
      formData: {
        account: "",
        pwd: "",
        verificationCode: "",
        cacheVerCode: "",
      },
      isLoading: false,
    };
  },
  methods: {
    change() {
      drawPic.call(null, this.formData);
    },
    async handleSubmit() {
      const messageFn = (message) => {
        this.$refs.uToast.show({
          message,
          position: "top",
          duration: 1000,
        });
      };
      const { account, pwd, verificationCode, cacheVerCode } = this.formData;
      if(!account){
      	messageFn('请输入账号')
      	return
      }
      if(!pwd){
      	messageFn('请输入密码')
      	return
      }
      if(!verificationCode || verificationCode.toUpperCase()  !== cacheVerCode){
      	messageFn('验证码不正确')
      	this.change()
      	return
      }
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        uni.switchTab({
          url: "/pages/my/index",
        });
      }, 2000);
    },
  },
  onLoad() {
    drawPic.call(null, this.formData);
  },
  onShow(){
	uni.hideHomeButton()
  }
};
</script>
