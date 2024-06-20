const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: '',
      user: { name: 'abc', age: 32 },
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount('#user-goals');
