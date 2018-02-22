import * as types from '../mobile-types'
import api from '../../fetch/api'

/**
 * App通用配置
 */
const state = {
  isLoading: false,
  swiperList: [],
  titleName: 'vue组件'
}

const actions = {
  updateLoadingStatus ({ commit }, status) {
    commit(types.COM_LOADING_STATUS, status)
  },
  updateTitleName ({ commit }, status) {
    commit(types.COM_TITLE_NAME, status)
  },
  getSwiperData ({ commit }, status) {
    api.apiSwiperData()
      .then(res => {
        commit(types.COM_SWIPER_LIST, res)
      })
  }
}

const getters = {
  isLoading: state => state.isLoading,
  swiperList: state => state.swiperList,
  titleName: state => state.titleName
}

const mutations = {
  [types.COM_LOADING_STATUS] (state, status) {
    state.isLoading = status
  },
  [types.COM_SWIPER_LIST] (state, status) {
    state.swiperList = status
  },
  [types.COM_TITLE_NAME] (state, status) {
    state.titleName = status
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
