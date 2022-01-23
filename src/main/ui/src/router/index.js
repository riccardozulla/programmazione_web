import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/Dashboard"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/programmazione_web/",
  //base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/", "/login", "/register"];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !store.getters.isLoggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
