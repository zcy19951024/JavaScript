<template>
  <div class="app-wrapper">
    <a-left-side class="sidebar-container"></a-left-side>
    <div class="right-content">
      <a-header></a-header>
      <nuxt/>
      <a-footer></a-footer>
    </div>
  </div>
</template>
<script>
  // import Visits from '~/components/Visits'
  export default {
    components: {
      // Visits,
      'a-left-side': require('../components/common/after/left-sidebar').default,
      'a-header': require('../components/common/after/header').default,
      'a-footer': require('../components/common/after/footer').default
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .sidebar-container {
    transition: width 0.28s;
    height: 100%;
    overflow: hidden;
    background-color: #304156;
  }
  .right-content {
    margin-left: 10px;
  }
</style>

