const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  watch: {
    // watch the result value in the computed property.
    result() {
      const that = this;
			setTimeout(function () {		
        that.value = 0;
      }, 5000);
    },
  },
  methods: {
    add(num) {
      console.log('plus');
      this.value = this.value + num;
    },
  },
  computed: {
    result() {
      if (this.value < 37) {
        return 'Not there yet';
      } else if (this.value === 37) {
        return this.value;
      } else {
        return 'Too much!';
      }
    },
  },
});
app.mount('#assignment');
