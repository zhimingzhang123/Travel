// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper' // 快速实现轮播图
import './assets/styles/reset.css' // 导入reset.css
import './assets/styles/border.css' // 解决手机1px边框的问题
import './assets/styles/iconfont.css' // 引入icon
import 'swiper/dist/css/swiper.css' // 轮播图css

Vue.config.productionTip = false
fastClick.attach(document.body)  // 解决移动端300ms延时问题
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
