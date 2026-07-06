import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import ProductPage from "@/views/ProductPage.vue";

const routes = [
  { path: "/", component: ProductPage },

  {
    path: "/product/:id",
    component: ProductPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
