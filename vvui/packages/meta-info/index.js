// TODO
import updateMetaInfo from './src/metaOperate/updateMetaInfo'
import {VUE_META_KEY_NAME} from './src/common/constants'
let VueMetaInfo = () => {}

VueMetaInfo.install = function (Vue) {
  Vue.mixin({
    beforeCreate () {
      // 如果组件里设置了VueMeta信息
      if (this.$options[VUE_META_KEY_NAME] !== undefined) {
        let type = typeof (this.$options[VUE_META_KEY_NAME])
        // 区分是否存在vueMeta信息
        this._hasMetaInfo = true
        // 判断组件内是否存在computed对象
        if (typeof (this.$options.computed === undefined)) {
          this.$options.computed = {}
        }
        // 为组件添加computed对象并反悔vueMeta信息
        this.$options.computed.$metaInfo = type === 'function' ? this.$options[VUE_META_KEY_NAME] :
          () => this.$options[VUE_META_KEY_NAME]
      }
    },
    beforeMount () {
      // 在组件挂载到dom之前更新meta信息
      if (this._hasMetaInfo) {
        updateMetaInfo(this.$metaInfo)
      }
    },
    mounted () {
      // dom挂载之后，继续监听meta信息，如果发生变化，继续更新
      if (this._hasMetaInfo) {
        this.$watch('$metaInfo', () => {
          updateMetaInfo(this.$metaInfo)
        })
      }
    },
    activated () {
      if (this.$metaInfo) {
        // keep-alive组件激活的时候调用
        updateMetaInfo(this.$metaInfo)
      }
    },
    deactivated () {
      // keep-alive组件停用时调用
      updateMetaInfo(this.$metaInfo)
    }
  })
}

export default VueMetaInfo
