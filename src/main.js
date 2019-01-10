import Vue from 'vue'
import App from './App.vue'
import router from './script/router.js'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import qs from 'qs'

Vue.config.productionTip = false
Vue.use(VueAxios,axios)
Vue.prototype.qs = qs
Vue.use(VueCookies)

// Vue.axios.defuaults.baseURL="http://yindada.gz01.bdysite.com/api"


new Vue({
  router,
  render: h => h(App),
}).$mount('#app') 
