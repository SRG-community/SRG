import Vue from 'vue'
import router from '@/router'

import {LOGIN_URL, SIGNUP_URL} from './api-urls'

export default {

  user: {
    email: null,
    balance: 0
  },

  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds).then((user) => {

      this.user.email = user.email;
      this.user.balance = user.balance;
      if (redirect) {
        router.go(redirect)
      }
    }, (err) => {
      context.error = err
    })
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds).then((user) => {
      this.user.email = user.email;
      this.user.balance = user.balance;
      if (redirect) {
        router.go(redirect)
      }
    }, (err) => {
      context.error = err
    })
  },

  logout(context) {
    context.$http.delete("/api/session", {credentials: 'same-origin'})
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  checkAuth() {
    Vue.http.get('/api/session', {credentials: 'same-origin'})
      .then(response => response.json())
      .then(user => {
        this.user.email = user.email;
        this.user.balance = user.balance
      });
  }
}
