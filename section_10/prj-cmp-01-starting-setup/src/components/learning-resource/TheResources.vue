<template>
  <base-card>
    <base-button
      :mode="storedResMode"
      @click="setSelectedTab('stored-resources')"
      >Stored resources</base-button
    >
    <base-button :mode="addResMode" @click="setSelectedTab('add-resource')"
      >Add resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          link: 'https://vuejs.org',
          description: 'Find the official Vue.js documentation here.',
        },
        {
          id: 'google',
          title: 'Google',
          link: 'https://google.come',
          description: 'Learn by searching on Google.',
        },
      ],
    };
  },
  provide() {
    return {
      storedResources: this.storedResources,
      addResource: this.AddResource,
      deleteResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    AddResource(title, description, url) {
      this.storedResources.unshift({
        id: new Date().toISOString(),
        title,
        description,
        link: url,
      });
      this.selectedTab = 'stored-resources';
    },
    removeResource(id) {
      // It will not work, becuase it create a new array
      // However, provide() use reference to the array.
      // Currently, reference for new array is different from previous one
      // So, it will not work
      // this.storedResources = this.storedResources.filter(
      //   (res) => res.id !== id
      // );

      const index = this.storedResources.findIndex((res) => res.id === id);
      console.log(index);
			this.storedResources.splice(index, 1);
			console.log(this.storedResources)
    },
  },
  computed: {
    storedResMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
};
</script>
