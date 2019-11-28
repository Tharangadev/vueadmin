import Vue from 'vue'
import App from './main.vue'
import router from './router'
import store from './store'

import bootstrap from 'bootstrap-vue'
import './fontAwesome'

Vue.config.productionTip = false
Vue.use(bootstrap)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
