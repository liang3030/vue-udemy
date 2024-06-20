const app = Vue.createApp({
  data() {
    return {
      user: '',
      paragraphIsVisible: true,
    };
  },
  method: {
    toggleVisible() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
});
app.mount('#assignment');
