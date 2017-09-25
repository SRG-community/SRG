import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import MyGames from '@/components/MyGames.vue'
import Signup from '@/components/Signup.vue'
import Login from '@/components/Login.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'SRG',
      component: Home
    },
    {
      path: '/mygames',
      name: 'MyGames',
      component: MyGames
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '*',
      redirect: '/home'
    }
  ],
  mode: 'history',
  saveScrollPosition: true
})
