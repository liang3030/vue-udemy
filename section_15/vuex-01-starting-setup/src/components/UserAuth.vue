<template>
  <base-container title="Vuex">
    <button @click="login" v-if="!isAuthenticated">login</button>
    <button @click="login" v-else>logout</button>
  </base-container>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>
