<template>
  <ul>
    <learning-resources
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :link="res.link"
      :description="res.description"
      :id="res.id"
    ></learning-resources>
  </ul>
</template>

<script>
import LearningResources from './LearningResources';

export default {
  components: {
    LearningResources,
  },
  inject: ['storedResources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
