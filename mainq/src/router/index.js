import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TestToChild from '@/components/TestToChild'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/tochild'
    },
    {
      path: '/tochild',
      name: 'tochild',
      component: TestToChild,
      meta: {title: '子的应用'}
    }
  ]
})