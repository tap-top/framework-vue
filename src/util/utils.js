import moment from 'moment'
/**
 * @desc 判断是否微信浏览器 注意 === 与 ==的问题
 * @return {boolean}
 */
function isWechat () {
  let ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('micromessenger') > 0) {
    return true
  } else {
    return false
  }
}

/**
 * @desc 获取URL中的name参数值
 * @return {string}
 */
function getQueryString (name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = ''
  if (window.location.search) {
    r = window.location.search.substr(1).match(reg)
  } else {
    if (window.location.hash.indexOf('?') > 0) {
      let t = window.location.hash.match(/\?[\W\w]*/)
      console.log(t)
      r = t[0].substr(1).match(reg)
    }
  }
  if (r != null) {
    return decodeURI(r[2])
  } else {
    return null
  }
}

/**
 * @desc 存在localStorage中
 * @param name string
 * @param key
 */
function setLS (name, key) {
  localStorage.setItem(name, key)
}

/**
 * @desc 取localStorage中值
 * @param name
 * @return key
 */
function getLS (name) {
  return localStorage.getItem(name)
}

/**
 * @desc 移除localStorage中某个值
 * @param name
 */
function removeLS (name) {
  localStorage.removeItem(name)
}

/**
 * @desc 清空localStorage所有数据
 */
function clearLS () {
  localStorage.clear()
}

/**
 * Date Format
 */
const dateFormat = (str, format) => {
  str = str || new Date()
  return moment(str).format(format)
}

export default {dateFormat, isWechat, getQueryString, setLS, getLS, removeLS, clearLS}
