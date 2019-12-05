<template>
  <el-menu :show-timeout="200" mode="vertical" background-color="#304156" text-color="#bfcbd9"
           active-text-color="#409EFF" :collapse="sideBarCollapse" :class="{'side-menu-collapse': !sideBarCollapse}">
    <el-menu-item v-for="(menu, index) in menus" class="menu-item" :index="index.toString()" :key="index" @click="menuClick(menu)">
      <i class="el-icon-document"></i>
      <span slot="title">{{menu.title}}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
  import {menuConfig} from '../../../pages/option'
  import {mapGetters} from 'vuex'
  export default {
    components: {},
    created() {
    },
    data() {
      return {
        menuConfig: menuConfig,
        menus: []
      }
    },
    props: {},
    mounted() {
      this.initMenu()
    },
    computed: {
      ...mapGetters(['sideBarCollapse'])
    },
    methods: {
      initMenu() {
        this.menus = this.$router.options.routes.filter(item => /after-module/.test(item.name))
        this.menus = this.menus.map(item => {
          let name = item.name.split('-')[item.name.split('-').length - 1]
          return {
            ...item,
            title: this.menuConfig[name]
          }
        })
      },
      menuClick (data) {
        this.$router.push({name: data.name})
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "./../../../css/variables";
  .side-menu-collapse {
    width: $sidebarWidth;
  }
  .menu-item {
    border: none;
    width: 100%;
  }
</style>
