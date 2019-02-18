import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons/index'
import { post, get, patch, put } from './util/http'
import './mock/index'

Vue.config.productionTip = false

Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$patch = patch
Vue.prototype.$put = put

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.filter('getYMD', function (input) {
  return input.split(' ')[0]
})
