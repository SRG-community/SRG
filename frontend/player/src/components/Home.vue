<template>
  <div class="row" style="height: 445px;">
    <div v-if="name != null" class="col-lg-6 col-lg-offset-3">
      <h1>Hi, {{ name }}! Share your games and Earn!!!</h1>
      <button class="btn btn-warning"><a href="tg://msg?text=http://ruzzland.asuscomm.com ПОИГРАЙ КА">Share via Telegram!</a>
      </button>
      <button class="btn btn-warning"><a href="whatsapp://send?text=http://ruzzland.asuscomm.com ПОИГРАЙ КА">Share via Whatsapp!</a>
      </button>
    </div>
  </div>
</template>

<script>
  import auth from '../auth'

  export default {
    data() {
      return {
        quote: '',
        name: auth.user.name
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
    }
  }
</script>
