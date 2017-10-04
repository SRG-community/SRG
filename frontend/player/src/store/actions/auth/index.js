import router from '@/router'
import authService from '@/services/auth'
import {LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_OUT_FAIL, SIGNUP_FAIL} from '@/store/mutations/mutation-types'

export const login = function ({commit}, creds, redirect) {
  authService.login(creds)
    .then((user) => {
      commit(LOGIN_SUCCESS, {
        email: user.email,
        balance: user.balance
      });
      if (redirect) {
        router.push({name: redirect})
      }
    })
    .catch((error) => commit(LOGIN_OUT_FAIL, error))
};

export const signup = function ({commit}, creds, redirect) {
  authService.signup(creds)
    .then((user) => {
      commit(LOGIN_SUCCESS, {
        email: user.email,
        balance: user.balance
      });
      if (redirect) {
        router.push({name: redirect})
      }
    })
    .catch((error) => commit(SIGNUP_FAIL, error))
};

export const logout = function ({commit}) {
  authService.logout()
    .then(() => {
      commit(LOGOUT_SUCCESS);
      router.push({name: 'SRG'})
    })
    .catch((error) => commit(LOGIN_OUT_FAIL, error))
};

export const checkAuth = function ({commit}) {
  authService.checkAuth()
    .then((response) => response.json())
    .then((user) => {
        commit(LOGIN_SUCCESS, {
          email: user.email,
          balance: user.balance
        });
        router.push({name: 'MyGames'})
      }
    )
    .catch((error) => {
      commit(LOGIN_OUT_FAIL, error);
      router.push({name: 'SRG'})
    })
};
