export default {
  increment(state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  increasedby(state, payload) {
    state.counter = state.counter + payload.value;
  },
};
