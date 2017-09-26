import Vue from 'vue'

import {LOGIN_URL, SIGNUP_URL, API_SESSION_URL} from './api-urls'
import {LOGIN_SUCCESS} from '@/store/mutations/mutation-types'

export default {
  login(context, creds) {
    context.$http.post(LOGIN_URL, creds)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },
  signup(context, creds) {
    context.$http.post(SIGNUP_URL, creds)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },
  logout(context) {
    context.$http.delete(API_SESSION_URL, {credentials: 'same-origin'})
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },
  checkAuth() {
    Vue.http.get(API_SESSION_URL, {credentials: 'same-origin'})
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }
}
