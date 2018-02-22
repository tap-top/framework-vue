import Vue from 'vue'
import Vuex from 'vuex'

import com from './modules/com'
import mobileStates from './modules/mobile-states'
import PCStates from './modules/PC-states'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mobileStates,
    PCStates,
    com
  }
})
