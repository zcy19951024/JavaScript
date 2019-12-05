<template>
    <div>
        index
    </div>
</template>
<script>
export default {
  name: 'errorLog',
  components: {},
  created () {},
  data () {
    return {}
  },
  props: {},
  mounted () {},
  computed: {
    errorLogs () {
      return this.$store.getters.errorLogs
    }
  },
  methods: {}
}
</script>
<style scoped>
</style>
