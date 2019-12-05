<template>
    <div class="menu-wrapper">
        <template v-for="item in routes" v-if="!item.hidden&&item.children">
          <router-link v-if="item.children.length===1 && !item.children[0].children&&!item.alwaysShow"
                       :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
            <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
              <svg-icon v-if="item.meta&&item.children[0].meta.title"></svg-icon>
            </el-menu-item>
          </router-link>
        </template>
    </div>
</template>
<script>

export default {
  created () {},
  data () {
    return {}
  },
  props: {},
  mounted () {},
  computed: {},
  methods: {}
}
</script>
<style scoped>
</style>
