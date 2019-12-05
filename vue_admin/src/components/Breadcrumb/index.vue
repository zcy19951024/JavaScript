<template>
  <div>
    index
  </div>
</template>
<script>
import { generateTitle } from '@/utils/i18n'

export default {
  components: {},
  created () {
    this.getBreadcrumb()
  },
  data () {
    return {
      levelList: null
    }
  },
  watch: {
    // 可以检测全局的$route变量 by ning
    $route () {
      this.getBreadcrumb()
    }
  },
  props: {},
  mounted () {},
  computed: {},
  methods: {
    generateTitle,
    getBreadcrumb () {
      // filter可以这样用, $route.matched包含当前路由的所有嵌套路径片段的路由记录 by ning
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name !== 'dashboard') {
        matched = [{path: '/dashboard', meta: {title: 'dashboard'}}].concat(matched)
      }
      this.levelList = matched
    }
  }
}
</script>
<style scoped>
</style>
