<template>
  <div class="cska" style="padding-right: 0px; padding-left: 0px;">
    <navbar placement="top" type="default">
      <a slot="brand" href="/" title="SRG" class="navbar-brand logo" style="width: 145px;"></a>
      <form slot="right" v-if="user.email != null" role="form" class="navbar-form navbar-right">
        <button type="button" class="btn btn-primary" router-link="'login'" @click="logout()">Logout</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li slot="right">
          <router-link to="/home">Home1</router-link>
        </li>
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
    <!--<navbar placement="top" type="default">-->
      <!--&lt;!&ndash; Brand as slot &ndash;&gt;-->
      <!--<a slot="brand" href="/" title="Home" class="navbar-brand">VueStrap</a>-->
      <!--&lt;!&ndash; You can use dropdown component &ndash;&gt;-->
      <!--<dropdown text="Dropdown">-->
        <!--<li><a href="link">Option</a></li>-->
      <!--</dropdown>-->
      <!--&lt;!&ndash; Or normal bootstrap style &ndash;&gt;-->
      <!--<li class="dropdown">-->
        <!--<a href="#" class="dropdown-toggle">Dropdown</a>-->
        <!--<ul class="dropdown-menu">-->
          <!--<li><a href="link">Option</a></li>-->
        <!--</ul>-->
      <!--</li>-->
      <!--&lt;!&ndash; For right positioning use slot &ndash;&gt;-->
      <!--<li slot="right">-->
        <!--<a href="https://github.com/yuche/vue-strap" target="_blank">Fork...</a>-->
      <!--</li>-->
    <!--</navbar>-->
    <div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12"><span>SRG © 2017</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import auth from '../auth'
  import { navbar } from 'vue-strap'
  import { dropdown } from 'vue-strap'

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
