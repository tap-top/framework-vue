import axios from 'axios'
import vue from 'vue'
import { ToastPlugin } from 'vux'
// import qs from 'qs'

import * as _ from '../util/tool'
import mobileAPI from './mobile-api'
import PCAPI from './PC-api'

vue.use(ToastPlugin)
// axios 配置
axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 使用JSON格式传递数据
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = 'http://localhost:3000/'

let _timer = null
let MIX_TIME = 500
let flag = true // 添加标记 防止出现多个定时器
// POST传参序列化
axios.interceptors.request.use((config) => {
  if (flag) {
    _timer = setTimeout(() => {
      // 显示
      vue.$vux.loading.show({
        text: 'Loading'
      })
    }, MIX_TIME)
    flag = false
  }
  // console.log('config', config)
  // if (config.method === 'post') {
  //  config.data = qs.stringify(config.data)
  // }
  return config
}, (error) => {
  _.toast('错误的传参', 'fail')
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  // 隐藏
  clearTimeout(_timer)
  flag = true

  vue.$vux.loading.hide()
  // console.log('返回内容', res)
  if (!res.data.success) {
    // _.toast(res.data.msg);
    if (res.data.code !== '0') {
      _.toast(res.data.msg)
    } else {
      return Promise.reject(res)
    }
  }
  return res
}, (error) => {
  _.toast('网络异常', 'fail')
  return Promise.reject(error)
})

export function fetch (m, url, params) {
  // console.log('传递参数信息==', m, url, params)
  if (m && m === 'get') {
    return new Promise((resolve, reject) => {
      axios.get(url, {params: params})
        .then(response => {
          // console.log('fetch里的response', response)
          resolve(response.data.data)
        }, err => {
          reject(err)
        })
        .catch((error) => {
          reject(error)
        })
    })
  } else {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(response => {
          resolve(response.data.data)
        }, err => {
          reject(err)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default {
  ...mobileAPI, // 手机端的API
  ...PCAPI, // pc端的API
  /**
   * 获取轮播图片数据
   */
  apiSwiperData () {
    return fetch('get', '/mobile/swiper', {'type': 'mobile'})
  }
}
