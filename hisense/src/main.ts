import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
// import $ from 'jquery';
import './assets/haixin.css';
import './assets/haixincommon.css';
import './registerServiceWorker';
import 'lib-flexible';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
