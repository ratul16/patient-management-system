import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: {
        layout: true
      },
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/booking",
      name: "booking",
      component: () => import("../views/BookingView.vue"),
      meta: {
        layout: true
      },
    },
    {
      path: "/appointments",
      name: "appointments",
      component: () => import("../views/AppointmentView.vue"),
      meta: {
        layout: true
      },
    },
    {
      path: "/patients",
      name: "patients",
      component: () => import("../views/PatientList.vue"),
      meta: {
        layout: true
      },
    },
    {
      path: "/reports",
      name: "reports",
      component: () => import("../views/ReportList.vue"),
      meta: {
        layout: true
      },
    },
    {
      path: "/billings",
      name: "billings",
      component: () => import("../views/BillingView.vue"),
      meta: {
        layout: true
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/Profile.vue"),
      meta: {
        layout: true
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
  ],
});

export default router;
