import { createStore } from 'vuex';
import producstModule from './modules/products';
import cartModule from './modules/cart';

export default createStore({
  modules: {
    products: producstModule,
    cart: cartModule,
  },
  state() {
    return {
      isAuthenticated: false,
    };
  },
  mutations: {
    login(state) {
      console.log('login mutation');
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
  actions: {
    login(context) {
      console.log('login');
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
});
