import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/scenic-tour",
    name: "scenic-tour",
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
