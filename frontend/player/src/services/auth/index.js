import Vue from 'vue'

import {LOGIN_URL, SIGNUP_URL, API_SESSION_URL} from './api-urls'

export default {
  login(context, creds) {
    return context.$http.post(LOGIN_URL, creds)
  },
  signup(context, creds) {
    return context.$http.post(SIGNUP_URL, creds)
  },
  logout(context) {
    return context.$http.delete(API_SESSION_URL, {credentials: 'same-origin'})
  },
  checkAuth() {
    return Vue.http.get(API_SESSION_URL, {credentials: 'same-origin'})
  }
}
