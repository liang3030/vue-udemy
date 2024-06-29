<template>
  <base-container title="Vuex">
    <!-- dollar symbol: used to refer global parameter -->
    <h3>{{ finalCounter }}</h3>
    <h3>{{ normalizedCounter }}</h3>

    <button @click="add">Add 1</button>
    <button @click="add2">Add 2</button>
    <button @click="dispatchAction">useAction add 5</button>
  </base-container>
  <base-container title="auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    UserAuth,
  },
  computed: {
    // getter: provided by Vuex, and call getter function
    // counter() {
    //   return this.$store.getters.finalCounter;
    //   return this.$store.getters['number/finalCounter'];
    // },
    // norCounter() {
    //   return this.$store.getters.normalizedCounter;

    // },

    // Use mapGetters to simplify getter
    ...mapGetters('number', ['finalCounter', 'normalizedCounter']),
  },
  methods: {
    add() {
      // commit: provided by Vuex, and call mutation function
      this.$store.commit('number/increment');
    },
    add2() {
      // mutation with payload
      // this.$store.commit('number/increasedby', { value: 2 });

      // Another way to pass payload compare to above
      this.$store.commit({ type: 'number/increasedby', value: 10 });
    },
    dispatchAction() {
      // dispatch: provided by Vuex, and call action function
      this.$store.dispatch('number/increase', { value: 5 });
    },

    // map action.
    // define a method inc and map to increase action
    ...mapActions({
      inc: 'number/increase',
    }),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
