// import Vue from 'vue'
// import App from './App.vue'
// Vue.config.productionTip = false
// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import './public-path'; // 引入
import Vue from 'vue';
import router from './router'

import App from './App.vue';


Vue.config.productionTip = false;
let instance = null;
function render(props = {}) {
  console.log('render...')
  const { container, parentStore } = props;
  Vue.prototype.$store = parentStore

  // https://www.jianshu.com/p/b2a77373c09e
  // 在 render 中创建 VueRouter，可以保证在卸载微应用时，移除 location 事件监听，防止事件污染
  // router = new Router({
  //   // 运行在主应用中时，添加路由命名空间 /chaiQiankunTest/ffff
  //   base: window.__POWERED_BY_QIANKUN__ ? 'chaiQiankunTest/ffff' : '/',
  //   mode: 'history',
  //   routes
  // });

  Vue.observable(parentStore) // 这句很关键,而且必须放置在示例化签，这样子应用computed的数据也可以响应了!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  instance = new Vue({
    router,
    store: parentStore,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');


}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  Vue.prototype.molName = props.molName

  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('state: 变更后的状态; prev 变更前的状态',state, prev);
  });
  // props.setGlobalState({loginName: "小叮当"});
  // 设置通讯
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange;
  Vue.prototype.$setGlobalState = props.setGlobalState;

  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
  // Vue.prototype.molName = props.molName

}