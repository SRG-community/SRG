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
  import {carousel} from 'vue-strap'
  import {slider} from 'vue-strap'

  export default {
    data() {
      return {
        quote: ''
      }
    },
    computed: {
      name() {
        return this.$store.getters.getUser.email
      }
    },
    methods: {
      getQuote() {
        this.$http
          .get('/api/random-quote', (data) => {
            this.quote = data;
          })
          .error((err) => console.log(err))
      }
    },
    components: {
      carousel,
      slider
    }
  }
</script>
