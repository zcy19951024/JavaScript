<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage"></el-dropdown>
</template>
<script>
import ElDropdown from '../../../node_modules/element-ui/packages/dropdown/src/dropdown.vue'

export default {
  components: {ElDropdown},
  created () {},
  data () {
    return {}
  },
  props: {},
  mounted () {},
  computed: {
    language () {
      return this.$store.getters.language
    }
  },
  methods: {
    handleSetLanguage (lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      this.$message({
        message: 'switch language success',
        type: 'success'
      })
    }
  }
}
</script>
<style scoped>
</style>
