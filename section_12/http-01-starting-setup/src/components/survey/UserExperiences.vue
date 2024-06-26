<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadResults"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length == 0)">
        no element
      </p>
      <ul v-else-if="!isLoading && results && results.length !== 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadResults() {
      this.isLoading = true;
      this.error = null;
      // Fetch data from the server
      fetch(
        'https://http-vue-bee-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          for (const key in data) {
            const result = data[key];
            results.push({
              name: result.name,
              rating: result.rating,
              id: key,
            });
          }
          // this is out of scope
          // To fix this, change it to arrow function
          // change it to arrow function, it shares same context inside in promise chain
          this.results = results;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = 'failed to load data';
        });
    },
  },
  mounted() {
    this.loadResults();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
