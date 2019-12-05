/** 为dom设置属性
 * @param el
 * @param opt
 * */
import {VUE_META_ATTRIBUTE} from './../common/constants'
export default function _setAttr (el, opt) {
  el.setAttribute(VUE_META_ATTRIBUTE, true)
  for (let key in opt) {
    // 判断属性是对象本身的而不是继承自原型链 by ning
    if (opt.hasOwnProperty(key)) {
      el.setAttribute(key, opt[key])
    }
  }
}
