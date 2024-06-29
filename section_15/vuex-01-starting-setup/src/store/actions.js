export default {
  // context: access to commit, dispatch, getters, state
  // payload: data passed to the action
  // It could be possible to use same name in mutation
  // increment(context) {
  //   setTimeout(() => {
  //     context.commit('increment');
  //   }, 2000);
  // },
  // decrement(context) {
  //   context.commit('decrement');
  // },
  // increase(context, payload) {
  //   setTimeout(() => {
  //     context.commit('increasedby', payload);
  //   }, 2000);
  // },
  login(context) {
    context.commit('setAuth', { isAuth: true });
  },
  logout(context) {
    context.commit('setAuth', { isAuth: false });
  },
};
