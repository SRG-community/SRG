import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './components/App.vue'
import auth from './auth'
import router from './router'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome-4.5.0.min.cache.css'
import './assets/css/common.css'

Vue.use(VueResource);

Vue.config.productionTip = false;

auth.checkAuth();

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
