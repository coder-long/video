import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';




// Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/md.png'),
  error: require('./assets/logo.png'),
  attempt: 1
})




Vue.use(ElementUI);

axios.defaults.baseURL = 'http://127.0.0.1:8848'
axios.interceptors.request.use(config => {
  console.log(config);
  // config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')