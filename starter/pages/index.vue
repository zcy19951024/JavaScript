<template>
  <div>
    <!--<h1>Welcome!</h1>-->
    <!--<nuxt-link to="/about">About page</nuxt-link>-->
    <!--<h1>Cached components</h1>-->
    <!--<p>look at source code and see how the timestamp is not reloaded before 10s after refreshing the page</p>-->
    <!--<p>Timestamp: {{ date }}</p>-->
    <!--<div class="container">-->
      <!--<h2>Users</h2>-->
      <!--<ul class="users">-->
        <!--<li v-for="user in users" :key="user.id">-->
          <!--<nuxt-link :to="'/users/' + user.id">{{user.name}}</nuxt-link>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
    <div class="container">
      <p>Home - <nuxt-link to="/about">About</nuxt-link></p>
    </div>
    <button class="button--green"></button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    layout: 'default',
    head: {
      title: 'Home page'
    },
    mounted () {
    },
    async asyncData () {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
      return {users: data}
    },
    serverCacheKey () {
      return Math.floor(Date.now() / 10000)
    },
    data () {
      return {
        date: Date.now()
      }
    }
  }
</script>
<style scoped="scoped">
  .container {
    text-align: center;
    margin-top: 100px;
    font-family: sans-serif;
  }
  .users {
    list-style-type: none;
  }
  .users li a {
    display: inline-block;
    width: 200px;
    border: 1px #ddd solid;
    padding: 10px;
    text-align: left;
    color: #222;
    text-decoration: none;
  }
  users li a:hover{
    color: orange;
  }
</style>
