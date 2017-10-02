import Vue from 'vue'

import {LOGIN_URL, SIGNUP_URL, API_SESSION_URL} from './api-urls'

export default {
  login(creds) {
    return Vue.http.post(LOGIN_URL, creds)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },
  signup(creds) {
    return Vue.http.post(SIGNUP_URL, creds)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },
  logout() {
    return Vue.http.delete(API_SESSION_URL, {credentials: 'same-origin'})
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },
  checkAuth() {
    return Vue.http.get(API_SESSION_URL, {credentials: 'same-origin'})
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }
}
