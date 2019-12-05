<template>
  <div id="app">
    <main-skeleton v-if="!init"></main-skeleton>
    <div v-else>
      <mainHeader></mainHeader>
      <div v-if="!isIndex" class="container">
        <side-nav class="nav"></side-nav>
        <router-view class="view"></router-view>
      </div>
      <router-view v-else class="page"></router-view>
      <main-footer v-if="!isIndex"></main-footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    mainHeader: () => import('./components/header.vue'),
    sideNav: () => import('./components/side-nav.vue'),
    mainFooter: () => import('./components/footer.vue'),
    mainSkeleton: () => import('./main.skeleton.vue')
  },
  data () {
    return {
      init: false,
      isIndex: true
    }
  },
  watch: {
    $route () {
      this.isIndex = this.$route.name === 'index'
    }
  },
  mounted () {
    // 模拟请求数据
    setTimeout(() => {
      this.init = true
    }, 250)
  }
}
</script>

<style lang="less" type="text/less">
  @import "./assets/less/index";
  .container{
    margin: 48px auto;
    width: 90%;
    background-color: #FFF;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    .nav{
      float: left;
      width: 210px;
    }
    .view{
      float: left;
      width: calc(~"100% - 215px");
      padding: 32px 48px 48px;
      box-sizing: border-box;
    }
  }

  .container:after{
    content: "";
    clear: both;
    display: block;
  }
</style>
