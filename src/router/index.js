import { createRouter, createWebHashHistory } from "vue-router";

import NotesView from "../views/NotesView.vue";
import StatesView from "../views/StatesView.vue";

const routes = [
  {
    name: "Notes",
    path: "/",
    component: NotesView,
  },
  {
    name: "States",
    path: "/states",
    component: StatesView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
