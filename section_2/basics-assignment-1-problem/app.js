const app = Vue.createApp({
  data() {
    return {
      user: {
        name: 'John Doe',
        age: 20,
      },
      randomNumber: Math.random(),
      imageUrl:
        'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    };
  },
  methods: {
    generateRandomNumber() {
      const res = Math.random();
      return res;
    },
  },
});
app.mount('#assignment');
