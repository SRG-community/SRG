<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Log In</h2>
    <p>Sign up.</p>
    <div class="alert alert-danger" v-if="getSignError">
      <p>{{ getSignError }}</p>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your username"
        v-model="credentials.username"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model="credentials.password"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Repeat your password"
        v-model="password2"
      >
    </div>
    <button class="btn btn-primary" @click="submit">Access</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        credentials: {
          username: '',
          password: ''
        },
        password2: ''
      }
    },
    computed: mapGetters([
      'getSignError'
    ]),
    methods: {
      submit() {
        let credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        };
        // We need to pass the component's this context
        // to properly make use of http in the auth service
        this.$store.dispatch('signup', this, credentials, 'mygames')
      }
    }
  }
</script>
