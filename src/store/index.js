
import Vuex from 'vuex'
import Vue from 'vue'
import user from './modules/user'
Vue.use(Vuex)
const store =  new Vuex.Store({
  state:{
    // show_footer:false,
    // show_header:true,
    // isfixed:false
  },
  mutations:{
    // change_show_footer(state,val){
    //   state.show_footer = val
    // },
    // change_show_header(state,val){
    //   state.show_header = val
    // },
    // change_isfixed(state,val){
    //   state.isfixed = val
    // }
  },
  modules:{
    user
  }
})
export default store

