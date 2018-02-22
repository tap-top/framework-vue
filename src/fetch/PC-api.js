/**
 * Create by 10064275 on 2018/2/13
 */
import {fetch} from './api'
export default {
  /**
   * 通过post方式获取第一个api接口数据
   * @param params 带请求参数
   * @returns {*}
   */
  getOneApiByPC (params) {
    let Url = '/pc/OneApi'
    return fetch('post', Url, params)
  }
}
