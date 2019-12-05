/**
 * 移除节点
 * @param parent
 * @param childs
 * */
import {VUE_META_ATTRIBUTE} from './../common/constants'
export default function _removeNode(parent) {
  let childs = parent.querySelectorAll(`[${VUE_META_ATTRIBUTE}]`)
  for (let i = childs.length - 1; i > -1; i--) {
    // 获取元素自定义属性 by ning
    if (childs[i].getAttribute(VUE_META_ATTRIBUTE) === 'true') {
      // 删除元素的第一个子元素 by ning
      parent.removeChild(childs[i])
    }
  }
}
