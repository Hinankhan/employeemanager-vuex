import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';
import VueLocalStorage from 'vue-localstorage'
import moment from 'moment'
import store from './store/store'




import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router'

Vue.use(VeeValidate);
Vue.use(VueLocalStorage);
Vue.use(KeenUI);
Vue.use(BootstrapVue);



Vue.config.productionTip = false

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('YYYY-MM-D')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
