import Alert from './src/alert'
// 安装的过程就是注册全局组件  by ningdong
Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert)
}
export default Alert;
