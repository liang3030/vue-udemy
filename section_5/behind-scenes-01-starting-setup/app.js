const app = Vue.createApp({
  data() {
    // TODO: in Javascript, this is a built-in feature called proxy. Check what is it.
    return {
      currentUserInput: '',
      message: 'Vue is great!',
      messageRef: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
    setTextWithRef() {
      // $refs is a special property in Vue.js that gives you access to all the references you set on your elements.
      this.messageRef = this.$refs.userText.value;
      // console.dir is a method provided by the browser's console object in JavaScript that is used to display an interactive list of the properties of a specified JavaScript object.
      console.dir(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
    console.log(this.message, 'this.message');
  },
  created() {
    console.log('created()');
    console.log(this.message, 'this.message');
  },
  beforeMount() {
    console.log('beforeMount()');
    console.log(this.message, 'this.message');
  },
  mounted() {
    console.log('mounted()');
    console.log(this.message, 'this.message');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
    console.log(this.message, 'this.message');
  },
  updated() {
    console.log('updated()');
    console.log(this.message, 'this.message');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  },
});

app.mount('#app');

setTimeout(() => {
  app.unmount();
}, 3000);

// template

// TODO: sumarize what is template in Vue.js
const app2 = Vue.createApp({
  template: `
    <p>{{ message }}</p>
  `,
  data() {
    return {
      message: 'Hello!',
    };
  },
  methods: {
    changeMessage() {
      this.message = 'Hello! Changed!';
    },
  },
});

app2.mount('#app2');

// Proxy in JS

const data = {
  message: 'Hello',
};

const handler = {
  set(target, key, value) {
    console.log(target, 'target');
    console.log(key, 'key');
    console.log(value, 'value');
  },
};

// data: target: The object that you want to proxy.
// handler: handler: An object containing traps, which are methods that define the custom behavior for the proxy.
const proxy = new Proxy(data, handler);

// proxy.message = 'GOODBYE!';
