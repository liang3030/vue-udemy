import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import counterModule from './counter';

// global store
const store = createStore({
  // with modules, we can split the store into multiple scoped stores
  // it is possible to use rootState, rootGetters to access state across module in store
  // namespace: when set namespace to true in module, the key is the name of namepace when registering the module.
  modules: {
    number: counterModule,
  },
  state() {
    return {
      // replace with counterModule
      // counter: 0,
      isLoggin: false,
    };
  },
  // mutations have to be synchronous
  // workarounds: setTimeout, not recommended
  // actions are recommended here
  mutations,
  getters,
  actions,
});

export default store;
