import { useAuthStore } from "./stores/auth";
import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from "./App.vue";
import router from "./router";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


const pinia = createPinia();

Vue.use(PiniaVuePlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  pinia,
  router,
  render: h => h(App),
}).$mount("#app");

router.beforeEach((to, from, next) => {
  const store = useAuthStore();
  store.initialize();
  if (to.meta.requiresAuth) {
    next("/");
  } else {
    next();
  }
});
