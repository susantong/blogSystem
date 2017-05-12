<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import index from './components/index.vue'
export default {
  name: 'app',
  components: {
    index: index
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  #app {
    min-width: 1200px;
  }
</style>
