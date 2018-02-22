/**
 * Create by 10064275 on 2018/2/13
 */
import {fetch} from './api'
export default {
  /**
   * 通过get方式获取第一个api接口数据
   * 不带请求参数
   * @returns {*}
   */
  getOneApiByMobile () {
    let Url = '/mobile/OneApi'
    return fetch('get', Url)
  }
}
