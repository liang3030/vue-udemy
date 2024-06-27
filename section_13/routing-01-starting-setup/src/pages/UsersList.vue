<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="confirmInput">Change</button>

  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  data() {
    return {
      canSaveChanges: false,
    };
  },
  components: {
    UserItem,
  },
  methods: {
    confirmInput() {
      // $router is available in the component because it is a child of the router-view
      this.$router.push('/teams');
    },
  },
  inject: ['users'],

  // It is also a router guard
  // It will be called before navigating to the route

  // It is componet level guard
  // execute order: global guard -> in-componet-route guard -> in-component guard
  // So here is the lowest priority
  beforeRouteEnterq(to, from, next) {
    console.log(to, from);
    console.log('beforeRouteEnter');
    next();
  },

  // It could be used when user leave the page, if there is some unsaved changes
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    console.log(to, from);
    if (this.canSaveChanges) {
      next();
    } else {
      const userWantsToLeave = confirm('Do you want to leave the page?');

      next(userWantsToLeave);
    }
  },

  // It is called when user leave the page
  unmounted() {
    console.log('unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
