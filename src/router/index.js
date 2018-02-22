import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import PCrouter from './PC-router'
import mobileRouter from './mobile-router'

import AppMobile from '../App-mobile'
import AppPC from '../App-pc'
import App from '../App'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/App'
    },
    {
      path: '/App',
      name: 'App',
      component: App
    },
    {
      path: '/AppPC',
      name: 'AppPC',
      component: AppPC,
      children: [
        ...PCrouter.routes
      ]
    },
    {
      path: '/AppMobile',
      name: 'AppMobile',
      component: AppMobile,
      children: [
        ...mobileRouter.routes
      ]
    }
  ]
})

// 监听浏览器返回事件
window.addEventListener('popstate', function (e) {
  router.isBack = true
}, false)

router.beforeEach((to, from, next) => {
  // 修改title
  document.title = to.meta.TITLE || '这是一个默认的title'
  // 添加进度条
  NProgress.start()
  next()
})
router.afterEach(transition => {
  NProgress.done()
})
export default router
