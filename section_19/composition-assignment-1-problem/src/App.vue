<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="courseGoal.toggle">{{ courseGoal.goal }}</h3>
  <h3 v-if="course.toggle">{{ course.goal }}</h3>

  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleVisibility1">Toggle Goal 1</button>
  <button @click="toggleVisibility2">Toggle Goal 2</button>

  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup>
import { ref, reactive } from 'vue';

const courseGoal = ref({
  goal: 'Finish the course and learn Vue 1!',
  toggle: true,
});
const course = reactive({
  goal: 'Finish the course and learn Vue 2!',
  toggle: true,
});

const toggleVisibility1 = () => {
  courseGoal.value.toggle = !courseGoal.value.toggle;
};
const toggleVisibility2 = () => {
  course.toggle = !course.toggle;
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
