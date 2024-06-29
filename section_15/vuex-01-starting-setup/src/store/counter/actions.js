export default {
  increment(context) {
    setTimeout(() => {
      context.commit('increment');
    }, 2000);
  },
  decrement(context) {
    context.commit('decrement');
  },
  increase(context, payload) {
    setTimeout(() => {
      context.commit('increasedby', payload);
    }, 2000);
  },
};
