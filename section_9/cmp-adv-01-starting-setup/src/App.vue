<template>
  <div>
    <!-- <TheHeader />  also work -->
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info>

    <course-goal>
      <template #default="slotProps">
        <h3>{{ slotProps.item }}</h3>
        <p>{{ slotProps['another'] }}</p>
      </template>
    </course-goal>

    <!-- only work with one default slot in component -->
    <course-goal #default="slotProps">

      <h3>{{ slotProps.item }}</h3>
      <p>{{ slotProps['another'] }}</p>

    </course-goal>

    <button @click="setSelectedComponent('active-goal')">active</button>
    <button @click="setSelectedComponent('manage-goal')">manage</button>

    <!-- keep alive could cache dynamic component content when toggle/change component -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoal from './components/CourseGoal.vue';
import ActiveGoal from './components/ActiveGoal.vue';
import ManageGoal from './components/ManageGoal.vue';
export default {
  components: {
    UserInfo,
    BadgeList,
    TheHeader,
    CourseGoal,
    ActiveGoal,
    ManageGoal,
  },
  data() {
    return {
      selectedComponent: 'active-goal',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp
    },
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>