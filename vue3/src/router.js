import { createRouter, createWebHistory } from "vue-router";

import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Crypto from "./pages/Crypto";
import Quizz from "./pages/Quizz";
import Login from "./pages/Login"
import store from "./store/index";
import Register from "./components/Register"

const routes = [
  { path: "/", component: Login },
  { path: "/Home", component: Home },
  { path: "/calendar", component: Calendar }, 
  { path: "/wallet", component: Wallet },
  { path: "/crypto", component: Crypto },
  { path: "/quizz", component: Quizz },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if (middleware) {
      middleware.default(next, store);
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
