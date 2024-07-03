<template>
  <section>
    <h2>{{ selectedProject.title }}</h2>
    <h3>${{ selectedProject.price }}</h3>
    <p>{{ selectedProject.description }}</p>
  </section>
</template>

<script setup>
import { inject, defineProps } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps(['pid']);

const products = inject('products');

// route is a reactive object
const route = useRoute();

console.log(route);

const selectedProject = products.value.find(
  (product) => product.id === props.pid
);
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
