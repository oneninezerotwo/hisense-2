import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'AirConditioner',
          name: 'AirConditioner',
          component: () => import('./views/AirConditioner.vue'),

        },
        {
          path: '/',
          name: '/',
          component: () => import('./views/Recommend.vue'),
        },
        {
          path: 'SnapUp',
          name: 'SnapUp',
          component: () => import('./views/SnapUp.vue'),
        },
        {
          path: 'TvSale',
          name: 'TvSale',
          component: () => import('./views/TvSale.vue'),
        },
        {
          path: 'Laser',
          name: 'Laser',
          component: () => import('./views/Laser.vue'),
        },
        {
          path: 'Refrigerator',
          name: 'Refrigerator',
          component: () => import('./views/Refrigerator.vue'),
        },
        {
          path: 'Washer',
          name: 'Washer',
          component: () => import('./views/Washer.vue'),
        },
        {
          path: 'Telephone',
          name: 'Telephone',
          component: () => import('./views/Telephone.vue'),
        },
        {
          path: 'Hardware',
          name: 'Hardware',
          component: () => import('./views/Hardware.vue'),
        },
        {
          path: 'KitchenBath',
          name: 'KitchenBath',
          component: () => import('./views/KitchenBath.vue'),
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    {
      path: '/category',
      name: 'category',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Category.vue'),

    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Cart.vue'),
    },
    {
      path: '/flex',
      name: 'flex',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Flex.vue'),
    },
    {
      path: '/me',
      name: 'me',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Me.vue'),
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './category/Search.vue'),
    },
  ],
});
