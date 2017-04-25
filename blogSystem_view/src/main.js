import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'

import './assets/lib/reset.css'

Vue.use(vueRouter);

import Router from './routers/index.js'

new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
})
