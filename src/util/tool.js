import store from '../vuex/store'

/**
 *   Toast公共方法
 */
export function toast (str, icon) {
  store.dispatch('updateLoadingStatus', false)
}

/**
 * dialog公共方法
 */
export function alert (str) {
}
