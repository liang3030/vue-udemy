<template>

  <base-card>
    <!-- fallback slot content -->
    <!-- <template v-slot:header>
      <h2>Available Badges</h2>
    </template> -->
    <!-- # short for v-slots: -->
    <template #default>
      <ul>
        <li>
          <base-badge type="admin" caption="ADMIN"></base-badge>
        </li>
        <li>
          <base-badge type="author" caption="AUTHOR"></base-badge>
        </li>
      </ul>
    </template>
  </base-card>

</template>

<script>
import BaseCard from './BaseCard.vue';
export default {
  components: {
    BaseCard,
  },
}
</script>

<!-- with scoped: this style only works on this component -->
<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>