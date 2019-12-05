<template>
  <div>
    <p>Hi from {{ name }}</p>
    <nuxt-link to="/">Home page</nuxt-link>
    <div></div>
  </div>
</template>

<script>
  export default {
    layout: 'dark',
    asyncData({req}) {
      // return {
      //   name: req ? 'server' : 'client'
      // }
      const nb = Math.max(1, Math.round(Math.random() * 10))
      return axios.get(`https://jsonplaceholder.typicode.com/photos/${nb}`).then(res => res.data)
    },
    head: {
      title: 'About page'
    }
  }
</script>
<style>
  .container {
    text-align: center;
    padding-top: 100px;
    font-family: sans-serif;
  }
</style>
