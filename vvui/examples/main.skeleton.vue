<template>
  <div class="main-skeleton">
    <w-skeleton height="80px"></w-skeleton>
    <div>
      <div class="skeletion-container">
        <div class="skeleton">
          <w-skeleton height="300px"></w-skeleton>
        </div>
        <w-skeleton height="45px"></w-skeleton>
      </div>
      <div class="skeleton-bottom">
        <w-skeleton height="45px"></w-skeleton>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  created () {
  },
  data () {
    return {
      msg: 'hello vue'
    }
  },
  props: {},
  mounted () {
  },
  computed: {},
  methods: {}
}
</script>
<style scoped lang="less">
  .skeleton-container {
    width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
  }
  .skeletion-botton {
    width: 960px;
    margin: 0 auto;
    text-align: center;
  }
  .skeletion {
    margin: 0 auto;
    width: 300px;
    margin-bottom: 56px;
  }
</style>
