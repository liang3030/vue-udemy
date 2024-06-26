<template>
  <ul>
    <li>
      <button
        type="button"
        @click="active('poor')"
        :class="{ active: modelValue == 'poor' }"
      >
        Poor
      </button>
    </li>
    <li>
      <button
        type="button"
        @click="active('average')"
        :class="{ active: modelValue == 'average' }"
      >
        Average
      </button>
    </li>
    <li>
      <button
        type="button"
        @click="active('great')"
        :class="{ active: modelValue == 'great' }"
      >
        Greate
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['model-value', 'update:model-value'],
  data() {
    return {
      activeOption: this.modelValue,
    };
  },
  methods: {
    active(option) {
      this.activeOption = option;
      this.$emit('update:model-value', option);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0.5rem 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
}

button.active {
  background-color: #0076bb;
  color: white;
}
</style>
