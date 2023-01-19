<template>
  <view>
    <view class="bg-login">
      <image class="logo" src="/static/logo.png" draggable="false"></image>
      <text class="logo-text">Flechazo</text>
    </view>
    <view class="cardcss">
      <u-form labelPosition="left" :model="formData">
        <u-form-item prop="formData.account" borderBottom>
          <u-input
            v-model="formData.username"
            border="none"
            clearable
            prefixIcon="github-circle-fill"
            placeholder="账号"
            prefixIconStyle="font-size:50rpx"
            placeholderStyle="padding-left:10rpx;color:#ccc"
            type="text"
          />
        </u-form-item>
        <u-form-item prop="formData.pwd" borderBottom>
          <u-input
            v-model="formData.password"
            border="none"
            clearable
            prefixIcon="lock"
            placeholder="密码"
            prefixIconStyle="font-size:50rpx"
            placeholderStyle="padding-left:10rpx;color:#ccc"
            :type="isPassword"
          />
          <template #right>
            <u-icon
              v-if="isPassword == 'password'"
              name="eye-off"
              @click="isPassword = 'text'"
              size="22"
            />
            <u-icon
              v-else
              name="eye-fill"
              @click="isPassword = 'password'"
              size="22"
            />
          </template>
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
          >Copyright © 2022 Flechazo All Rights Reserved.</text
        >
      </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
.bg-login {
  width: 100vw;
  height: 400rpx;
  background-image: url("https://adminh5.demo.wueasy.com/static/images/login/bg_login.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    width: 160rpx;
    height: 160rpx;
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
import { login } from "./service";
export default {
  data() {
    return {
      formData: {
        username: "123@qq.com",
        password: "456",
        verificationCode: "",
        cacheVerCode: "",
      },
      isLoading: false,
      isPassword: "password",
    };
  },
  methods: {
    change() {
      drawPic.call(null, this.formData);
    },
    async handleSubmit() {
      console.log('handleSubmit');
      const messageFn = (message, url) => {
        this.$refs.uToast.show({
          message,
          position: "top",
          duration: 1000,
          icon: url ? true : false,
          type: url ? "success" : "default",
          complete: () => {
            url ? uni.switchTab({ url: "/pages/my/index" }) : "";
          },
        });
      };
      const { username, password, verificationCode, cacheVerCode } =
        this.formData;
      if (!username) {
        messageFn("请输入账号", null);
        return;
      }
      if (!password) {
        messageFn("请输入密码", null);
        return;
      }
        if (
          !verificationCode ||
          verificationCode.toUpperCase() !== cacheVerCode
        ) {
          messageFn("验证码不正确", null);
          this.change();
          return;
        }
      this.isLoading = true;
      const { userInfo } = await login(this.formData);
      this.$store.commit("user/SAVE_USERINFO", userInfo);
      this.isLoading = false;
      messageFn("登录成功", "/pages/index/index");
    },
  },
  onLoad() {
    uni.chooseLocation({
      success:() => { }
    })
    drawPic.call(null, this.formData);
  },
  onShow() {
    uni.hideHomeButton();
  },
};
</script>
