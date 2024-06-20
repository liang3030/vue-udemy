const app = Vue.createApp({
  // it will merge return data to a gloabal vue object/instance
  // function
  data: () => {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: '<i>Master Vue and build amazing APP!</i>',
      vueLink: 'https://vuejs.org/',
    };
  },
  // object, that inside the object, we can define methods
  methods: {
    // it needs to be a function inside in the methods object
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount('#user-goal');
