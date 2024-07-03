<template>
  <h1>User Data</h1>
  <h3>{{ username }}</h3>
  <h3>{{ age }}</h3>
  <button @click="updateAge">Update Age</button>

  <button @click="$emit('update')">Update Age directly</button>

  <p>{{ lastname2 }}</p>
</template>

<script setup>
import { computed, defineProps, defineEmits, inject } from 'vue';

const props = defineProps({
  firstname: String,
  lastname: String,
  age: Number,
});
const emits = defineEmits(['update']);

const updateAge = () => {
  emits('update');
};

const lastname2 = inject('lastname2');

const username = computed(() => {
  // without vaule
  return `${props.firstname} ${props.lastname}`;
});
</script>
