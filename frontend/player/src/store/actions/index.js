import router from '@/router'
import authService from '@/services/auth'
import {LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_OUT_FAIL} from '@/store/mutations/mutation-types'

export default {
  login: ({dispatch}, creds, redirect) => {
    return authService.login()
      .then((user) => {
        dispatch(LOGIN_SUCCESS, {
          email: user.email,
          balance: user.balance
        });
        if (redirect) {
          router.push(redirect)
        }
      })
      .catch((error) => dispatch(LOGIN_OUT_FAIL, error))
  },
  signup: ({dispatch}, creds, redirect) => {
    return authService.signup()
      .then((user) => {
        dispatch(LOGIN_SUCCESS, {
          email: user.email,
          balance: user.balance
        });
        if (redirect) {
          router.push(redirect)
        }
      })
      .catch((error) => dispatch(LOGIN_OUT_FAIL, error))
  },
  logout: ({dispatch}, context) => {
    return authService.logout(context)
      .then((response) => dispatch(LOGOUT_SUCCESS))
      .catch((error) => dispatch(LOGIN_OUT_FAIL, error))
  },
  checkAuth: ({dispatch}) => {
    return authService.checkAuth()
      .then((response) => response.json())
      .then((user) =>
        dispatch(LOGIN_SUCCESS, {
          email: user.email,
          balance: user.balance
        }))
      .catch((error) => dispatch(LOGIN_OUT_FAIL, error))
  }
}
