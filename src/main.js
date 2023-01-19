// import 'windicss'

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import store from "./store";

import uView from "uview-ui";
Vue.use(uView);

const app = new Vue({
  ...App,
  store
})
app.$mount()