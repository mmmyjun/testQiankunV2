import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: window.__POWERED_BY_QIANKUN__ ? '/appvue2/' : '/',
  // base: window.__POWERED_BY_QIANKUN__ ? '/tochild/' : '/',
  base: window.__POWERED_BY_QIANKUN__ ? window.location.pathname : '/',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
