// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import adminApi from './util.js'
import axios from 'axios'
import MintUI from 'mint-ui'
import './assets/css/Reset.css'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
// 全局方法
Vue.prototype.adminApi = adminApi
// 全局事件中央事件
const Bus = new Vue()

Vue.config.productionTip = false

// 请求发送前前拦截
axios.interceptors.request.use(function (config) {
  // let token = localStorage.getItem('AccessToken') || ''
  // let userid = localStorage.getItem('myid') || ''
  // config.headers['AccessToken'] = token
  // config.headers['UserId'] = userid
  return config
},
function () {

})

// 请求响应前拦截
axios.interceptors.response.use(response => {
  // if (response.data === '0009') {
  //   router.push({ path: '/admin/login' })
  // }
  return response
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // let token = localStorage.getItem('myid')
  // if (token) {
  //   next()
  // } else {
  //   if (to.path === '/admin/login') {
  //     next()
  //   } else {
  //     next({
  //       name: 'login',
  //       path: '/admin/login'
  //     })
  //   }
  // }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    Bus
  }
})
