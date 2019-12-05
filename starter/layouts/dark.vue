<template>
  <div class="dark">
    <nuxt/>
  </div>
</template>

<script>
  export default {
    name: "dark"
  }
</script>

<style scoped>
  body {
    overflow: hidden;
  }
  .dark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: black;
    color: white;
    padding: 10px;
  }
  .dark a {
    color: white;
  }
</style>
