const app = Vue.createApp({
  data() {
    return {
      inputValue1: '',
      inputValue2: '',
      confirmedInputValue2: '',
    };
  },
  methods: {
    alertMe() {
      alert('Alert!');
    },
    setInputValue1(event) {
      this.inputValue1 = event.target.value;
    },
    setInputValue2(event) {
      this.inputValue2 = event.target.value;
    },
    confirmInputValue2() {
      this.confirmedInputValue2 = this.inputValue2;
    },
  },
});
app.mount('#assignment');
