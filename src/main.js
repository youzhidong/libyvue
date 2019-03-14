import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// 导入组件库
import libyVue from './../packages/index'
// 导入代码高亮
import Highlight from './directive/highlight.js'

Vue.use(iView)
Vue.use(libyVue)
Vue.use(Highlight)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
