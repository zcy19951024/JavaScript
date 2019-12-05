<template>
 <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">
   <div class="scroll-wrapper" ref="scrollWrapper" :style="{left: left + 'px'}"></div>
 </div>

</template>

<script>
const padding = 15
export default {
  name: 'scrollPane',
  data () {
    return {
      left: 0
    }
  },
  methods: {
    handleScroll (e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 3
      const $container = this.$refs.scrollContainer
      const $containerWidth = $container.offsetWidth
      const $wrapper = this.$refs.scrollWrapper
      const $wrapperWidth = $wrapper.offsetWidth
      if (eventDelta > 0) {
        this.left = Math.min(0, this.left + eventDelta)
      } else {
        if ($containerWidth - padding < $wrapperWidth) {
          if (this.left < -($wrapperWidth - $containerWidth + padding)) {
          } else {
            this.left = Math.max(this.left + eventDelta, $containerWidth - $wrapperWidth -padding)
          }
        } else {
          this.left = 0
        }
      }
    },
    moveToTarget ($target) {
      const $container = this.$refs.scrollContainer
      const $containerWidth = $container.offsetWidth
      const $targetLeft = $target.offsetLeft
      const $targetWidth = $target.offsetWidth

      if ($target < -this.left) {
        this.left = -$targetLeft + padding
      } else if ($targetLeft + padding > -this.left
        && $targetLeft + $targetWidth < -this.left + $containerWidth - padding) {
        this.left = -($targetLeft - ($containerWidth - $targetWidth) + padding)
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 // TODO
</style>
