<template>
  <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMinxin from './../mixins/alert';

export default {
  components: {
    UserAlert,
  },
  // The configuration in here has higher priority than the configuration in the mixin
  mixins: [alertMinxin],
};
</script>
