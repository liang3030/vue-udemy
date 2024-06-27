import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UserFooter from './components/users/UserFooter.vue';

const router = createRouter({
  // how to manage routes history router
  // two options: createWebHistory() and createWebHashHistory()
  history: createWebHistory(),

  // register routes
  // which components should be loaded for which routes
  routes: [
    { path: '/', redirect: '/teams' },
    // if you do not config above, you could use alias
    // however, alias is not recommended because it is not change the URL
    // {
    //   path: '/teams',
    //   component: TeamsList,
    //    alias: '/',
    // },
    {
      path: '/teams',
      name: 'teams',
      meta: { needsAuth: true },
      // render multiple components in one router with multiple router view
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      // components: TeamsList,
      // nested routes
      children: [
        {
          path: ':teamId',
          name: 'team-members',
          components: {
            default: TeamMembers,
            footer: TeamsFooter,
          },
          // path parameter will be passed as a prop, here is teamId
          props: true, // pass the route params as props to the component
        },
      ],
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UserFooter,
      },
      // component: UsersList,

      // route guard for specific route
      // It will execute after global guard
      beforeEnter(to, from, next) {
        console.log('Users beforeEnter');
        console.log(to, from);
        if (to.meta.needsAuth) {
          console.log('Needs auth!');
        }
        next();
      },
    },
    // move it to nested routes
    // {
    //   path: '/teams/:teamId',
    //   component: TeamMembers,
    //   // path parameter will be passed as a prop, here is teamId
    //   props: true, // pass the route params as props to the component
    // },
    // catch all route
    // it should be the last route, otherwise it will override other routes
    // { path: '/:notFound(.*)', redirect: '/teams' },
    // multiple router views: if you set up a component, it will render in default router view
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active-custom',

  // scroll behavior: it is a method that will be executed when we navigate to a new route
  // It has 3 parameter to, from, savedPosition
  // It should return an object where the browser should scroll to
  scrollBehavior(to, from, savedPosition) {
    // savedPosition: only available for back and forward navigation
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

// global guard: such as authentication
router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  // if you want to redirect to another route
  // next('/teams');
  // if you want to stay in the same route
  // next(false);

  // You are allowed to navigation
  next();
});

// global after guard
// sending analytics data to server
router.afterEach((to, from) => {
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
