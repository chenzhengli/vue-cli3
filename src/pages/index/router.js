import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "../login/login.js";
Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      // beforeEnter(to,from,next){
      //   window.location='/index.html#/'
      // },
      component: Home
    },
    {
      path: "/login",
      name: "login",
      beforeEnter(to,from,next){
        window.location='/login.html'
      },
      // component: Login
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
