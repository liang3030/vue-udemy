const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      task: '',
      isShowing: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.isShowing ? 'Hide List' : 'Show List';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
      console.log(this.tasks);
      console.log(this.tasks.length);
    },
    toggleList() {
      this.isShowing = !this.isShowing;
    },
  },
});
app.mount('#assignment');
