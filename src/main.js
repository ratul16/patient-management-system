// import { useAuthStore } from "./stores/auth";
import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import piniaPersisted from 'pinia-plugin-persistedstate';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import App from "./App.vue";
import router from "./router";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'flatpickr/dist/flatpickr.css';


const pinia = createPinia();

Vue.use(PiniaVuePlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(autoAnimatePlugin);

pinia.use(piniaPersisted);

new Vue({
  pinia,
  router,
  render: h => h(App),
}).$mount("#app");

router.beforeEach((to, from, next) => {
  // const store = useAuthStore();
  // store.initialize();
  if (to.meta.requiresAuth) {
    next("/");
  } else {
    next();
  }
});
