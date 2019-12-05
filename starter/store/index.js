
import Vue from 'vue'
import Vuex from 'vuex'
import layout from './modules/layout'
import pageViews from './modules/pageViews'
import getters from './getters'
Vue.use(Vuex)
const store = () => new Vuex.Store({
  modules: {
    layout,
    pageViews
  },
  getters
})
export default store
