import Vue from 'vue'
import App from '@/components/App.vue'
import router from '@/router'
import store from '@/store'
import Resource from 'vue-resource'
import auth from '@/services/auth'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-awesome-4.5.0.min.cache.css'
import '@/assets/css/common.css'

Vue.config.productionTip = false;

Vue.use(Resource);

auth.checkAuth();

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
