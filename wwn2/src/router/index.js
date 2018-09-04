import Vue from 'vue'
import Router from 'vue-router'
// import asyncComponent from '@/router/asyncComponent.js'

import register from '@/view/Register'
import overview from '@/view/Overview'
import success from '@/view/Success'
import error from '@/view/Error'
import $ from 'jquery'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'register',
    beforeEnter: (to, from, next) => {
      // 进去注册页面之前需要校验注册页面是否能访问.这里需要同步做请求，所以引用jqueyr
      next()
      $.ajax({
        type: 'post',
        url: 'api/HRManagement/getStatus',
        data: '',
        async: false,
        success: function (res) {
          if (res.code === '200') {
            next({
              name: 'register',
              path: '/'
            })
          } else {
            next({
              name: 'error',
              path: '/error',
              params: {
                msg: res.message
              }
            })
          }
        }
      })
    },
    component: register
  },
  {
    path: '/overview',
    name: 'overview',
    component: overview
  }, {
    path: '/success',
    name: 'success',
    component: success
  }, {
    path: '/error',
    name: 'error',
    component: error
  }
  ]
})
