import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Containers from "../views/Containers.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/containers",
    name: "Containers",
    component: Containers
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
