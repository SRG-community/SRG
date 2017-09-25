import Vue from 'vue'
import Vuex from 'vuex'
import {SET, LOGOUT_SUCCESS, LOGOUT_FAIL} from './mutation-types'
import authService from '@/services/auth'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data: [],
    user: {
      email: null,
      balance: 0
    },
    error: null
  },
  getters: {
    getUser: state => {
      return state.user
    }
  },
  mutations: {
    [SET](state, {type, items}) {
      state[type] = items
    },
    [LOGOUT_SUCCESS](state, response) {
      state.user.email = null
    },
    [LOGOUT_FAIL](state, error) {
      state.error = error
    }
  },
  actions: {
    logout: (store, context) => {
      return authService.logout(context)
        .then((response) => store.dispatch(LOGOUT_SUCCESS, response))
        .catch((error) => store.dispatch(LOGOUT_FAIL, error))
    }
  }
});

export default store
