<template>

  <base-card>
    <template v-slot:header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <template v-slot:default>
      <p>{{ infoText }}</p>
    </template>
  </base-card>

</template>

<script>
import BaseCard from './BaseCard.vue';
export default {
  components: {
    BaseCard,
  },
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>