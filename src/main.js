import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import './plugins/element.js'
import router from './router'
import './main.less'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
