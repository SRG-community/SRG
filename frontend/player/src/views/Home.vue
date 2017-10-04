<template>
  <div>
    <h2>Let's Play & Earn!</h2>
    <carousel>
      <slider>
        <div class="col-sm-2 col-sm-offset-4">
          <img src="/static/game_dn.png" class="radius">
        </div>
        <div class="carousel-caption">
        </div>
      </slider>
      <slider>
        <div class="col-sm-2 col-sm-offset-4">
          <img src="/static/game_swy.png" class="radius">
        </div>
      </slider>
      <slider>
        <div class="col-sm-2 col-sm-offset-4">
          <img src="/static/game_cq.png" class="radius">
        </div>
      </slider>
    </carousel>
  </div>
</template>

<script>
  import router from '@/router'
  import {mapGetters} from 'vuex'
  import {carousel, slider} from 'vue-strap'

  export default {
    data() {
      return {
        quote: ''
      }
    },
    computed: {
      ...mapGetters([
        'currentUser'
      ]),
      isAuthenticated() {
        return this.currentUser.email !== null;
      }
    },
    methods: {
      getQuote() {
        this.$http
          .get('/api/random-quote', (data) => {
            this.quote = data;
          })
          .error((err) => console.log(err))
      },
      authRoute() {
        if (this.isAuthenticated)
          router.push({
              name: 'MyGames'
            }
          )
      }
    },
    components: {
      carousel,
      slider
    },
    created() {
      this.authRoute()
    },
    mounted() {
      this.authRoute()
    },
    updated() {
      this.authRoute()
    }
  }
</script>
