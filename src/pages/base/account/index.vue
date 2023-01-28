<template>
  <view>
    <view class="searchBox">
      <u-search v-model="searchAccountText" placeholder="请输入" clearabled :show-action="false" input-align="center"
        @blur="_getAccountList"></u-search>
    </view>
    <view class="cardbox">
      <view class="card" v-for="i in accountList" :key="i.id">
        <view><text class="card-lable">账号：</text><text class="card-content">{{ i.username }}</text></view>
        <view><text class="card-lable">昵称：</text><text class="card-content">{{ i.nickname }}</text></view>
        <view><text class="card-lable">最后登陆时间：</text><text class="card-content">2023-01-28 10:25</text></view>
        <view><text class="card-lable">状态：</text>
          <text v-if="i.status == 1" class="card-content" style="color: #19be6b;"
            >正常</text>
          <text v-else class="card-content" style="color: #f9ae3d;">锁定</text>
        </view>
        <view class="operate"><u-button type="error" shape="circle" text="注销" size="small" />
          <u-button type="warning" text="锁定" v-if="i.status == 1" shape="circle" size="small" @click="handleChangeStatus(i)"/>
          <u-button v-else type="success" text="恢复" shape="circle" size="small" @click="handleChangeStatus(i)"/>
        </view>
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

    .card-lable {
      color: #100;
      font-size: 28rpx;
    }

    .card-content {
      font-size: 26rpx;
      color: #111;
      padding-left: 10rpx;
      display: inline-block;
      margin-bottom: 10rpx;
    }

    .operate {
      margin-top: 20rpx;
      display: flex;
      justify-content: flex-end;

      ::v-deep .u-button {
        margin: 0 !important;
        width: 138rpx !important;
        margin-left: 20rpx !important;
      }
    }
  }
}
</style>

<script>
import { getAccountList, changeStatus } from './service'
export default {
  data() {
    return {
      searchAccountText: "",
      accountList: []
    };
  },
  onLoad() {
    this._getAccountList()
  },
  onPullDownRefresh() {
    this._getAccountList().then(() => {
      uni.stopPullDownRefresh()
    })
  },
  methods: {
    async _getAccountList() {
      const { searchAccountText } = this
      const req = searchAccountText ? { searchAccountText } : {}
      const { result } = await getAccountList(req)
      this.accountList = result
    },
    async handleChangeStatus({id,status}) {
      console.log(id);
      console.log('handleChangeStatus');
      await changeStatus({ userId:id, status })
      this._getAccountList()
    }
  },
};
</script>
