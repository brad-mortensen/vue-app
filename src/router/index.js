import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home";
import UserProfile from "@/pages/UserProfile";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/profile",
      name: "UserProfile",
      component: UserProfile
    }
  ],
  mode: "history"
});
