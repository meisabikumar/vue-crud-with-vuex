import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import AddUser from "../components/Dashboard/AddUser.vue";
import ListUsers from "../components/Dashboard/ListUsers.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    component: DashboardView,
    redirect: "/dashboard/list-user",
    children: [
      {
        path: "list-user",
        component: ListUsers,
      },
      {
        path: "add-user",
        // name: 'AddUser',
        component: AddUser,
      },
      {
        path: "edit-user/:user_id",
        component: AddUser,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
