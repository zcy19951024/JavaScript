/**
 * mateInfo操作函数
 * */
import _setAttr from './setAttribute'
import _removeNode from './removeNode'

export default function operate () {
  let _ndHead = document.getElementsByTagName('head')[0]
  return {
    // 设置metaInfo信息
    setMetaInfo (metaOpts) {
      for (let key in metaOpts) {
        if (key === 'title') {
          document.title = metaOpts.title
        }
        if (metaOpts.hasOwnProperty(key)) {
          metaOpts[key].forEach((opt) => {
            let ndKey = document.createElement(key)
            _setAttr(ndKey, opt)
            _ndHead.appendChild(ndKey)
          })
        }
      }
    },
    // 删除metaInfo添加的meta信息
    removeMetaInfo () {
      _removeNode(_ndHead)
    }
  }
}
