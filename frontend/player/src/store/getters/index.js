export default {
  currentUser: state => state.user,
  getAuthError: state => state.error.auth,
  getSignError: state => state.error.sign
}
