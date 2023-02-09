<template>
  <view>
    <u-button type="primary" @click="handleClick(4)">添加资源</u-button>
    <u-swipe-action>
      <view v-for="(i, index) in titleList" style="padding-bottom: 30rpx">
        <view style="color: #333; padding: 8rpx 25rpx; font-size: 30rpx">{{
          i
        }}</view>
        <u-swipe-action-item :options="options2" @click="handleClick" v-for="item in urlList[index]" :name="item">
          <view class="swipe-action u-border-top u-border-bottom">
            <view class="swipe-action__content">
              <view class="swipe-action__content__text" @click="toWebView(item.url)">{{ item.url }}</view>
              <!-- <image :src="item.url" style="width: 70rpx; height: 70rpx; border-radius: 10rpx;" @click="handlePreviewImage(item.url)"></image> -->
            </view>
          </view>
        </u-swipe-action-item>
      </view>
    </u-swipe-action>
    <u-picker :show="showPicker" :columns="[titleList]" @confirm="(Text)=>{pickerText = Text.value[0];showPicker=false;showChangeModal = true}"></u-picker>
    <u-modal :show="showChangeModal" :title="modalTitle" @confirm="handleConfirm" :asyncClose="true" showCancelButton @cancel="showChangeModal=false">
      <view class="slot-content">
        <view v-if="modalTitle == '添加资源'" style="padding-bottom: 20rpx;">类型：{{pickerText}}</view>
        <u--input placeholder="请输入链接地址" border="surround" v-model="changeText"></u--input>
        <image :src="changeText" style="padding-top: 30rpx"></image>
      </view>
    </u-modal>
  </view>
</template>

<script>
import { getResourcesList, delResources, updateResources, addResources } from "./service";
export default {
  data() {
    return {
      titleList: ["导航图标", "首页banner", "模块banner",'友链bg'],
      urlList: [],
      options2: [
        {
          text: "复制",
          style: {
            backgroundColor: "#3c9cff",
          },
        },
        {
          text: "修改",
          style: {
            backgroundColor: "#a66605",
          },
        },
        {
          text: "删除",
          style: {
            backgroundColor: "#f56c6c",
          },
        },
      ],
      showChangeModal: false,
      changeText: "",
      modalTitle:'',
      showPicker:false,
      pickerText:''
    };
  },
  methods: {
    handleClick(params) {
      console.log(params);
      if (params.index == 0) {
        uni.setClipboardData({
          data: params.name.url,
          success: () => {
            uni.showToast({
              title: "复制成功",
            });
          },
        });
      } else if (params.index == 2) {
        delResources({ id: params.name.id }).then(({ msg }) => {
          uni.showToast({
            title: msg,
            success: () => {
              this._getResourcesList();
            },
          });
        });
      } else {
        if(params == 4){
          this.showPicker = true
          this.modalTitle = '添加资源'
          return
        }
        this.showChangeModal = true
        this.changeText = params.name.url
        this.modalTitle = '修改资源链接'
        this.update_resourcesId = params.name.id
      }
    },
    handlePreviewImage(urls) {
      uni.previewImage({
        current: 0, //预览图片的下标
        urls: [urls],
      });
    },
    async _getResourcesList() {
      this.urlList = []
      const { result } = await getResourcesList();
      this.urlList.push(result.filter((i) => i.position == "headNav"));
      this.urlList.push(result.filter((i) => i.position == "homeBanner"));
      this.urlList.push(result.filter((i) => i.position == "moduleBanner"));
      this.urlList.push(result.filter((i) => i.position == "friendLink"));
      console.log(this.urlList);
    },
    async handleConfirm() {
      this.modalTitle == '添加资源' ? 
      await addResources({position:this.pickerText,url:this.changeText}) :
      await updateResources({id:this.update_resourcesId,url:this.changeText})
      this.showChangeModal = false;
      this._getResourcesList()
    },
    toWebView(url){
      uni.navigateTo({
						url: '/pages/webView/index?url='+url
					});
    }
  },
  onLoad() {
    this._getResourcesList();
  },
};
</script>

<style lang="scss" scoped>
.u-page {
  padding: 0;
}

.u-demo-block__title {
  padding: 10px 0 2px 15px;
}

.swipe-action {
  &__content {
    padding: 6rpx 20rpx;

    &__text {
      font-size: 15px;
      color: $u-main-color;
      padding: 0 20rpx;
    }
  }

  .swipe-action__content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .swipe-action__content__text {
     
      color: #52b0fd;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
