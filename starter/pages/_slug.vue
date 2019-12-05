<template>
  <div>
    <h1>{{$route.params.slug || 'Home'}}</h1>
    <pre>{{userAgent}}</pre>
    <ul>
      <li><nuxt to="/">Home</nuxt></li>
      <li v-for="(slug, index) in slugs" :key="index">
        <nuxt-link :to="{name: 'slug', params: {slug}}"></nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    asyncData ({store, route, userAgent}) {
      return {
        userAgent,
        slugs: ['foo', 'bar', 'baz']
      }
    }
  }
</script>

<style scoped>

</style>
