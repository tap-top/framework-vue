/**
 * Create by 10064275 on 2018/2/13
 */
let homePageIntroduce = require('../mobile/pages/HP/home-page-introduce')
export default {
  routes: [
    {
      path: '/hospitalDetail/departmentList',
      name: 'homePageIntroduce',
      component: () => homePageIntroduce
    }
  ]
}
