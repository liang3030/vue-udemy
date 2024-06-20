const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
    };
  },
  // it is similar to dependecies in react hooks.
  watch: {
    // function name should be same as the data property name.
    // the second argument is the previous value of the data property.
    name(value, prevValue) {
      console.log(value, prevValue);
      this.fullname = value === '' ? '' : value + ' ' + 'Doe';
    },
  },
  computed: {
    fullName() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Doe2';
    },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName() {
      this.name = '';
    },
  },
});

app.mount('#events');
