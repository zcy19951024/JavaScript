// 开发阶段加载 .default属性怎么解释呢 by ningdong
module.export = file => require('@/views/' + file + '.vue').default
