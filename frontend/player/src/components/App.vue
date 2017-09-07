<template>
  <div>
    <navbar placement="top" type="default">
      <a slot="brand" href="/" title="SRG" class="navbar-brand logo" style="width: 145px;"></a>
      <form slot="right" v-if="user.email != null" class="navbar-form navbar-right">
        <button type="button" class="btn btn-primary" router-link="'login'" @click="logout()">Logout</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li slot="right">
          <router-link v-if="user.email == null" to="/login">Login</router-link>
        </li>
        <li slot="right">
          <router-link v-if="user.email == null" to="/signup">Sign Up</router-link>
        </li>
        <li slot="right">
          <router-link v-if="user.email != null" to="/mygames">My Games</router-link>
        </li>
      </ul>
    </navbar>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <div class="container">
        <p class="text-muted">SRG © 2017</p>
      </div>
    </footer>
  </div>
</template>

<script>
  import auth from '../auth'
  import {navbar} from 'vue-strap'
  import {dropdown} from 'vue-strap'

  export default {
    data() {
      return {
        user: auth.user
      }
    },
    methods: {
      logout() {
        auth.logout(this)
      }
    },
    components: {
      navbar,
      dropdown
    }
  }
</script>
