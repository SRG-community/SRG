import Vue from 'vue'

import {LOGIN_URL, SIGNUP_URL, API_SESSION_URL} from './api-urls'

export default {
  login(creds) {
    return Vue.http.post(LOGIN_URL, creds)
  },
  signup(creds) {
    return Vue.http.post(SIGNUP_URL, creds)
  },
  logout() {
    return Vue.http.delete(API_SESSION_URL, {credentials: 'same-origin'})
  },
  checkAuth() {
    return Vue.http.get(API_SESSION_URL, {credentials: 'same-origin'})
  }
}
