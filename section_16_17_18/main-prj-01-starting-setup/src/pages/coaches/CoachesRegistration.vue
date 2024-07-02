<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', {
        first: data.firstname,
        last: data.lastname,
        desc: data.description,
        rate: data.rate,
        areas: data.areas,
      });
      // push: it could go back
      // replace: it could not go back
      this.$router.replace('/coaches');
    },
  },
};
</script>
