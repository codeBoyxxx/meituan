import Vue from 'vue'
import router from './router.js'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  router,
  store
}).$mount('#app')
