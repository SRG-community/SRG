import {SET, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_OUT_FAIL, SIGNUP_FAIL} from './mutation-types'

export default {
  [SET](state, {type, items}) {
    state[type] = items
  },
  [LOGIN_SUCCESS](state, {email, balance}) {
    state.user.email = email;
    state.user.balance = balance
  },
  [LOGOUT_SUCCESS](state) {
    state.user.email = null;
    state.user.balance = 0
  },
  [LOGIN_OUT_FAIL](state, error) {
    state.error.auth = error
  },
  [SIGNUP_FAIL](state, error) {
    state.error.sign = error
  }
}
