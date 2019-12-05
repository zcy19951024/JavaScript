// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// css样式保持一致
import 'normalize.css/normalize.css'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang'
import './icons'
import './errorLog'
import './permission'
import './mock'
import * as filters from './filters'

Vue.use(Element, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

// 注册过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
