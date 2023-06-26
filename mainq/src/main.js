import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router'
// import './micro/index'
import store from './vuex/store'

import { prefetchApps } from 'qiankun';
prefetchApps([
  { name: 'appvue', entry: '//localhost:8888/' }
]);

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$store = store

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
