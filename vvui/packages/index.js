import WRow from './row/index'
import WCol from './col/index'
import WAlert from './alert/index'
import MetaInfo from './meta-info/index'
import WLoadingBar from './loading-bar/index'
import Skeleton from './skeleton/index'

const components = [
  WRow,
  WCol,
  WAlert,
  Skeleton
]

const install = (Vue) => {
  if (install.installed) {
    return
  }
  components.map(component => { Vue.component(component.name, component) })
  MetaInfo.install(Vue)
  Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.vue)
}

export default {
  install,
  WRow,
  WCol,
  WAlert,
  Skeleton
}
