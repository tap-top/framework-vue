/**
 * Create by 10064275 on 2018/2/13
 */
import homePage from '../mobile/pages/home-page'
import noFound from '../mobile/pages/no-found'
let my = import('../mobile/pages/my') // 调用时加载
export default {
  routes: [
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage,
      meta: {
        TITLE: '首页'
      }
    },
    {
      path: '/my',
      name: 'my',
      component: () => my,
      meta: {
        TITLE: '我的'
      }
    },
    {
      path: '*',
      name: 'noFound',
      component: noFound,
      meta: {
        TITLE: '404'
      }
    }
  ]
}
