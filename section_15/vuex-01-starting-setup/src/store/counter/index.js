import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  // namespaced: true, to avoid conflicts (name of state, mutation ...) with other modules
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations,
  actions,
  getters,
};
