<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <A />
    <B />
  </div>
</template>

<script>
import A from './components/a.vue'
import B from './components/b.vue'
export default {
  name: 'app',
  components: {
    A,
    B
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
