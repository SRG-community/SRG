<template>
  <div class="row">
    <div class="col-lg-6 col-lg-offset-3">
      <div class="panel modal-content panel-primary" style="margin-bottom: 150px; margin-top: 50px;">
        <div class="panel-heading"><h3 class="panel-title">Log In</h3></div>
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-10 col-lg-offset-1 form-horizontal">
              <fieldset>
                <legend>Log in to your account</legend>
                <div class="form-group"><label class="control-label col-lg-2"
                                               for="loginUserName">Name</label>
                  <div class="col-lg-10">
                    <div class="input-group"><span class="input-group-addon"><i
                      class="fa fa-user"></i> </span><input class="form-control"
                                                            placeholder="User account name"
                                                            id="loginUserName"
                                                            v-model="credentials.username"/>
                    </div>
                  </div>
                </div>
                <div class="form-group"><label class="control-label col-lg-2" for="loginPassword">Password</label>
                  <div class="col-lg-10">
                    <div class="input-group"><span class="input-group-addon"><i
                      class="fa fa-lock"></i> </span><input class="form-control"
                                                            type="password"
                                                            autocomplete="off"
                                                            placeholder="Password"
                                                            id="loginPassword"
                                                            v-model="credentials.password">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-lg-offset-2 col-lg-5">
                    <form action="/signin/google?ppp=zzz" method="post">
                      <button class="btn pull-left btn-primary fa fa-google">
                        Sign In with Google
                      </button>
                    </form>
                  </div>
                  <div class="col-lg-5">
                    <button type="button" class="btn pull-right btn-primary" @click="submit">
                      Sign In
                    </button>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        credentials: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit() {
        let credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        };
        // We need to pass the component's this context
        // to properly make use of http in the auth service
        this.$store.dispatch('login', this, credentials, 'MyGames')
      }
    }
  }
</script>
