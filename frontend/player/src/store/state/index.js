export default {
  user: {
    email: null,
    balance: 0,
    games: [
      {
        id: 0,
        name: 'Rock-n-Roll Racing',
        balance: 10,
        img: '/static/game_dn.png',
        link: 'https://srgp.herokuapp.com'
      },
      {
        id: 1,
        name: 'Carmagedon',
        balance: 5,
        img: '/static/game_swy.png',
        link: 'https://srgp.herokuapp.com'
      },
      {
        id: 3,
        name: 'Ignition',
        balance: 25,
        img: '/static/game_cq.png',
        link: 'https://srgp.herokuapp.com'
      }
    ]
  },
  error: {
    auth: null,
    sign: null
  }
};
