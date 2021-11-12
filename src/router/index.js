import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home'
// import Search from '../views/Search'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/search/:cityName",
  //   name: "Search",
  //   props: true,
  //   component: Search,
  // },
  {
    path: "/scenic-tour",
    name: "ScenicTour",
    component: () => import('../views/ScenicTour.vue')
  },
  {
    path: "/events",
    name: "Events",
    component: () => import('../views/Events.vue')
  },
];

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
