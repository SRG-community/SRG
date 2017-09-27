import router from '@/router'
import authService from '@/services/auth'
import {LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_OUT_FAIL, SIGNUP_FAIL} from '@/store/mutations/mutation-types'

export const login = function ({commit}, creds, redirect) {
  return authService.login(creds)
    .then((user) => {
      commit(LOGIN_SUCCESS, {
        email: user.email,
        balance: user.balance
      });
      if (redirect) {
        router.push(redirect)
      }
    })
    .catch((error) => commit(LOGIN_OUT_FAIL, error))
};

export const signup = function ({commit}, creds, redirect) {
  return authService.signup(creds)
    .then((user) => {
      commit(LOGIN_SUCCESS, {
        email: user.email,
        balance: user.balance
      });
      if (redirect) {
        router.push(redirect)
      }
    })
    .catch((error) => commit(SIGNUP_FAIL, error))
};

export const logout = function ({commit}, context) {
  return authService.logout(context)
    .then(() => {
      commit(LOGOUT_SUCCESS);
      router.push('SRG')
    })
    .catch((error) => commit(LOGIN_OUT_FAIL, error))
};

export const checkAuth = function ({commit}) {
  return authService.checkAuth()
    .then((response) => response.json())
    .then((user) =>
      commit(LOGIN_SUCCESS, {
        email: user.email,
        balance: user.balance
      }))
    .catch((error) => commit(LOGIN_OUT_FAIL, error))
};
