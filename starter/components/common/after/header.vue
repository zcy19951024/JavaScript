<template>
  <header>
    <div class="menu-icon-div" :class="{active: sideBarCollapse}" @click="collapseMenu">
      <i class="icon iconfont icon-sanheng"></i></div>
    <el-breadcrumb class="bread-div" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index" :to="{ path: item.path }">{{item.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </header>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {menuConfig} from './../../../pages/option'
  export default {
    components: {},
    data() {
      return {
        menuTitles: {},
        breadcrumb: []
      }
    },
    mounted () {
      this.menuTitles = menuConfig
      this.getBreadcrumb()
    },
    props: {},
    computed: {
      sideBarCollapse: function () {
        return this.$store.getters.sideBarCollapse
      }
    },
    watch: {
      $route () {
        this.getBreadcrumb()
      }
    },
    methods: {
      collapseMenu () {
        return this.$store.dispatch('collapseSideBar')
      },
      getBreadcrumb () {
        this.breadcrumb = []
        let paths = this.$router.currentRoute.path.split('/')
        for (let i = 3; i < paths.length; i++) {
          const title = this.menuTitles[paths[i]]
          const path = paths.slice(0, 3).concat(paths[i]).join('/')
          this.breadcrumb.push({title, path})
        }
        console.log(this.breadcrumb)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "./../../../css/variables.scss";
  header {
    height: 50px;
    line-height: 50px;
    border-radius: 0px;
    .icon {
      cursor:pointer
    }
    .menu-icon-div {
      height: 50px;
      line-height: 50px;
      width: 22px;
      display: inline-block;
      transform: rotate(0deg);
      transition: .38s;
    }
    .active {
      transform: rotate(90deg) !important;
      transition: .38s;
      transform-origin: 50% 50%;
    }
    .bread-div {
      display: inline-block;
      margin-left: 20px;
    }
  }
</style>
