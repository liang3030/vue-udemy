<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }} </h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleIsFavorite">Toggle Favorite</button>

    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Remove Friend</button>
  </li>
</template>

<script>
export default {
  // props: [
  //   // name should not clash with the html attribute name, and data name.
  //   "name",
  //   // props as data, could be refered direct in the methods, for example: this.phoneNumber.
  //   // in html template, it needs to pass the props like phone-number.Inline with html code.
  //   "phoneNumber",
  //   "emainAddress",
  //   "isFavorite"
  // ],

  /* 
  * Props and events added on a custom component tag automatically 
  * fall through to the root component in the template of that component.
  */
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: true,
    }
  },
  // counter part of props,it is used for emitting the event to the parent component.
  // for documentation purpose, it is good to mention the event name.
  // emits: ["toggle-favorite"], // same as props, could be an array or object.
  emits: {
    "toggle-favorite": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("No id provided for friend");
        return false;
      }
    },
    'delete': function (id) {
      if (id) {
        return true;
      } else {
        console.warn("No id provided for friend");
        return false;
      }
    }
  },

  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleIsFavorite() {
      this.$emit("toggle-favorite", this.id);
    }
  }
};
</script>