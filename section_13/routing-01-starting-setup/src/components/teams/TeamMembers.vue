<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <!-- example together with watch property -->
    <router-link to="/teams/t2">team two</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  props: ['teamId'],
  inject: ['users', 'teams'],
  data: () => {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMem(teamId) {
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const members = this.users.filter((user) =>
        selectedTeam.members.includes(user.id)
      );
      this.members = members;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    // router paramer
    this.loadTeamMem(this.teamId);
  },

  // It is called when the route changes
  // It is a alternative to watch property
  // It is only called when the component is reused: loaded or reloaded
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    console.log(to, from);
    // this.loadTeamMem(to.params.teamId);
    next();
  },

  // When route changes but with same component. Vue does not update component by default.
  // So we need to watch the route and update the component
  watch: {
    // $route(newRoute) {
    //   this.loadTeamMem(newRoute);
    // },
    teamId(newId) {
      this.loadTeamMem(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
