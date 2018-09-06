import Vue from 'vue'
import Router from 'vue-router'
import asyncComponent from '@/router/asyncComponent.js'

console.log(asyncComponent)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: asyncComponent.register
    }
  ]
})
