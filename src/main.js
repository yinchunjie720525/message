import Vue from 'vue'
import App from './App.vue'
import router from './script/router.js'

import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'

Vue.config.productionTip = false
Vue.use(VueAxios,axios)
Vue.prototype.qs = qs


new Vue({
  router,
  render: h => h(App),
}).$mount('#app') 
