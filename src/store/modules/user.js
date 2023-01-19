const userInfo ={
    namespaced: true,
    state:{
      userInfo:uni.getStorageSync('userInfo') || {}
    },
    actions:{},
    mutations:{
      SAVE_USERINFO(state,val){
        state.userInfo = val
        uni.setStorageSync('userInfo',val)
      }
    },
    getters:{},
  }
  userInfo.state.userInfo.id ? "" : uni.redirectTo({url:'/pages/login/index'})
  export const userStore = ()=>{
    return userInfo.state.userInfo
  }
  export default userInfo