<template>
  <section class="app-main" style="min-height: 100%;">
    <transition name="fade" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>
<script>
export default {
  components: {},
  created () {},
  data () {
    return {}
  },
  props: {},
  mounted: {
    cachedViews () {
      return this.$store.state.tagsView.cachedViews
    }
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
</style>
