<template>
  <view>
    <u-collapse accordion>
      <u-collapse-item title="前端相关">
        <u-swipe-action>
          <u-swipe-action-item :options="options1"
            v-for="item in articleList.filter(i => i.article_classify == 'frontend')">
            <view class="collapse-item-card">
              <view>
                <view>
                  <text>标题：</text><text style="color: #666;font-size:24rpx">{{ item.article_title }}</text>
                </view>
                <view>
                  <text>时间：</text>
                  <text style="color: #666;font-size:24rpx">{{ item.publish_time }}</text>
                </view>
              </view>
              <image :src="item.coverUrl" style="width: 80rpx;height:80rpx"></image>
            </view>
          </u-swipe-action-item>
        </u-swipe-action>

      </u-collapse-item>
      <u-collapse-item title="后端相关">
        <view class="collapse-item-card" v-for="item in articleList.filter(i => i.article_classify == 'backend')">
          <view>
            <view>
              <text>标题：</text><text style="color: #666;font-size:24rpx">{{ item.article_title }}</text>
            </view>
            <view>
              <text>时间：</text>
              <text style="color: #666;font-size:24rpx">{{ item.publish_time }}</text>
            </view>
          </view>
          <image :src="item.coverUrl" style="width: 80rpx;height:80rpx"></image>
        </view>
      </u-collapse-item>
      <u-collapse-item title="web3相关">
        <view class="collapse-item-card" v-for="item in articleList.filter(i => i.article_classify == 'android')">
          <view>
            <view>
              <text>标题：</text><text style="color: #666;font-size:24rpx">{{ item.article_title }}</text>
            </view>
            <view>
              <text>时间：</text>
              <text style="color: #666;font-size:24rpx">{{ item.publish_time }}</text>
            </view>
          </view>
          <image :src="item.coverUrl" style="width: 80rpx;height:80rpx"></image>
        </view>
      </u-collapse-item>
      <u-collapse-item title="我的生活">
        <view class="collapse-item-card" v-for="item in articleList.filter(i => i.article_classify == 'news')">
          <view>
            <view>
              <text>标题：</text><text style="color: #666;font-size:24rpx">{{ item.article_title }}</text>
            </view>
            <view>
              <text>时间：</text>
              <text style="color: #666;font-size:24rpx">{{ item.publish_time }}</text>
            </view>
          </view>
          <image :src="item.coverUrl" style="width: 80rpx;height:80rpx"></image>
        </view>
      </u-collapse-item>
    </u-collapse>
  </view>
</template>
<style scoped lang="scss">
.collapse-item-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16rpx 12rpx;
  background-color: white;
  margin: 0 -12rpx;
  border-bottom: 1rpx #f9f9f9 solid;
}
</style>

<script>
import { getArticleList } from './service'
import { format_publishTime } from '@/utils'
export default {
  data() {
    return {
      articleList: [],
      options1: [{
        text: '删除',
        style: {
          backgroundColor: '#880909',
        }
      }
      ]
    };
  },
  onLoad() {
    this._getArticleList()
  },
  methods: {
    async _getArticleList() {
      const { result } = await getArticleList()
      this.articleList = result.map(i => { return { ...i, publish_time: format_publishTime(i.publish_time) } })
      console.log(result.filter(i => i.article_classify == 'frontend'))
    }
  }
};
</script>
