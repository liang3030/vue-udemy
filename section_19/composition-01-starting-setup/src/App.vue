<template>
  <section class="container">
    <user-data
      :firstname="firstname"
      :lastname="lastname"
      :age="user.age"
      @update="() => console.log('update age')"
    ></user-data>
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ uAge }}</h3> -->

    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>

    <!-- reactive -->
    <h2>{{ userReactive.name }}</h2>
    <h3>{{ userReactive.age }}</h3>

    <h2>{{ userToRef.name }}</h2>
    <h3>{{ userToRef.age }}</h3>

    <button @click="setNewData">Change Age</button>
    <h2>{{ fullName }}</h2>
    <div>
      <input
        type="text"
        placeholder="First name"
        @input="setName($event, 'first')"
      />
      <input
        type="text"
        placeholder="Last name"
        @input="(e) => setName(e, 'last')"
      />
    </div>

    <h2>{{ fullName1 }}</h2>
    <div>
      <input type="text" placeholder="First name" v-model="firstname1" />
      <input type="text" placeholder="Last name" v-model="lastname1" />
    </div>

    <h2>{{ fullName2 }}</h2>
    <div>
      <!-- <input type="text" placeholder="First name" v-model="firstname1" /> -->
      <input type="text" placeholder="Last name" ref="lastnameInput2" />
      <p>{{ lastname2 }}</p>
      <button @click="setL2">set last name 2</button>
    </div>
  </section>
</template>

<script setup>
import UserData from './components/UserData.vue';
import {
  ref,
  reactive,
  isReactive,
  isRef,
  toRefs,
  computed,
  watch,
  provide,
} from 'vue';

// with ref, userName is a reactive variable
// const userName = ref('John Doe');
// const uAge = ref(25);

const firstname = ref('');
const lastname = ref('');

const firstname1 = ref('');
const lastname1 = ref('');

const lastnameInput2 = ref(null);
const lastname2 = ref('');

const user = ref({
  name: 'Jane Doe',
  age: 25,
});

const userToRef = toRefs({
  name: 'Jane Doe R',
  age: 26,
});

// reactive only works on objects
const userReactive = reactive({
  name: 'Jane Doe R',
  age: 26,
});

const setName = (e, type) => {
  if (type === 'first') {
    firstname.value = e.target.value;
    console.log(firstname, 'f');
  } else {
    lastname.value = e.target.value;
    console.log(lastname, 'k');
  }
};

console.log(isReactive(userReactive)); //true
console.log(isRef(userReactive)); //false
console.log(isReactive(user)); // false
console.log(isRef(user)); // true
console.log(isRef(user.value.age)); // true
console.log(isReactive(userToRef)); // false
console.log(isRef(userToRef)); // false

// setTimeout(() => {
//   // userName.value = 'New Jane Doe';
//   // uAge.value = 30;
//   user.value.name = 'New Jane Doe';
//   user.value.age = 30;
//   userReactive.name = 'New Jane Doe R';
//   userReactive.age = 31;
//   userToRef.name = 'New Jane Doe t R';
//   userToRef.age = 32;
// }, 2000);

function setNewData() {
  user.value.age = 33;
}

// computed is read-only
const fullName = computed(() => {
  console.log('computed');
  return `${firstname.value} ${lastname.value}`;
});

const fullName1 = computed(() => {
  console.log('computed');
  return `${firstname1.value} ${lastname1.value}`;
});

// first argument is dependency
watch(fullName, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});

// array of dependencies
watch([firstname, lastname], (newVal, oldVal) => {
  // first name
  console.log(newVal[0], oldVal[0]);

  // last name
  console.log(newVal[1], oldVal[1]);
});

const setL2 = () => {
  lastname2.value = lastnameInput2.value.value;
};

provide('lastname2', lastname2);
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
