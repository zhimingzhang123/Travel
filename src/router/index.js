import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home/HelloWorld'
import City from '@/components/city/City'
import Detail from '@/components/detail/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      props: true,
      name: 'Detail',
      component: Detail
    }
  ],
  // 每次路由进行切换的时候，都回到页面最开始的位置
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
