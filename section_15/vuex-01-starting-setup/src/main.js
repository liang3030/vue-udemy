import { createApp } from 'vue';
// import { createStore } from 'vuex';
import store from './store/index';

import App from './App.vue';

// const counterModule = {
//   // namespaced: true, to avoid conflicts (name of state, mutation ...) with other modules
//   namespaced: true,
//   state() {
//     return {
//       counter: 0,
//     };
//   },
//   mutations: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increasedby(state, payload) {
//       state.counter = state.counter + payload.value;
//     },
//   },
//   actions: {
//     increment(context) {
//       setTimeout(() => {
//         context.commit('increment');
//       }, 2000);
//     },
//     decrement(context) {
//       context.commit('decrement');
//     },
//     increase(context, payload) {
//       setTimeout(() => {
//         context.commit('increasedby', payload);
//       }, 2000);
//     },
//   },
//   getters: {
//     finalCounter(state) {
//       return state.counter * 3;
//     },
//     normalizedCounter(_, getters) {
//       const finalCounter = getters.finalCounter;
//       if (finalCounter < 0) {
//         return 0;
//       }
//       if (finalCounter > 100) {
//         return 100;
//       }
//       return finalCounter;
//     },
//   },
// };

// // global store
// const store = createStore({
//   // with modules, we can split the store into multiple scoped stores
//   // it is possible to use rootState, rootGetters to access state across module in store
//   // namespace: when set namespace to true in module, the key is the name of namepace when registering the module.
//   modules: {
//     number: counterModule,
//   },
//   state() {
//     return {
//       // replace with counterModule
//       // counter: 0,
//       isLoggin: false,
//     };
//   },
//   // mutations have to be synchronous
//   // workarounds: setTimeout, not recommended
//   // actions are recommended here
//   mutations: {
//     // get current state as parameter
//     // increment(state) {
//     //   state.counter++;
//     // },
//     // decrement(state) {
//     //   state.counter--;
//     // },
//     // // payload could be any type
//     // increasedby(state, payload) {
//     //   state.counter = state.counter + payload.value;
//     // },
//     setAuth(state, payload) {
//       state.isLoggin = payload.isAuth;
//     },
//   },
//   getters: {
//     // getter: other getters
//     // finalCounter(state, getters) {
//     // finalCounter(state) {
//     //   return state.counter * 3;
//     // },
//     // normalizedCounter(_, getters) {
//     //   const finalCounter = getters.finalCounter;
//     //   if (finalCounter < 0) {
//     //     return 0;
//     //   }
//     //   if (finalCounter > 100) {
//     //     return 100;
//     //   }
//     //   return finalCounter;
//     // },
//     userIsAuthenticated(state) {
//       return state.isLoggin;
//     },
//   },
//   actions: {
//     // context: access to commit, dispatch, getters, state
//     // payload: data passed to the action
//     // It could be possible to use same name in mutation
//     // increment(context) {
//     //   setTimeout(() => {
//     //     context.commit('increment');
//     //   }, 2000);
//     // },
//     // decrement(context) {
//     //   context.commit('decrement');
//     // },
//     // increase(context, payload) {
//     //   setTimeout(() => {
//     //     context.commit('increasedby', payload);
//     //   }, 2000);
//     // },
//     login(context) {
//       context.commit('setAuth', { isAuth: true });
//     },
//     logout(context) {
//       context.commit('setAuth', { isAuth: false });
//     },
//   },
// });

const app = createApp(App);

app.use(store);

app.mount('#app');
