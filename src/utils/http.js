// ajax.js

// 引入 uni-ajax 模块
import ajax from 'uni-ajax'

// 创建请求实例
const http = ajax.create({
  // 初始配置
  baseURL: 'http://flechazoblog.site/node_api'
})

// 添加请求拦截器
http.interceptors.request.use(
  config => {
    uni.showLoading({
      title: '努力加载中',
      mask: true
    })
    // uni.showNavigationBarLoading()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  response => {
    uni.hideLoading()
    // uni.hideNavigationBarLoading()
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

// 导出 create 创建后的实例
export default http
