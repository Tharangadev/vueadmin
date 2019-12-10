import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ApiService from './common/api.services.js'

import bootstrap from 'bootstrap-vue'
import './fontAwesome'

Vue.config.productionTip = false
Vue.use(bootstrap)

ApiService.init()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
