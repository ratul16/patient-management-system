import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuth: true,
    user: null,
  }),
  getters: {
    isAuthenticated() {
      return this.isAuth;
    },
  },
  actions: {
    login(user) {
      this.isAuth = true;
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logout() {
      this.isAuth = false;
      this.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("key");
      localStorage.removeItem("rsaKey");
    },
    initialize() {
      // Check for saved user data on app initialization
      // const savedUser = localStorage.getItem('user');
      // const savedKey = localStorage.getItem('key');
      // const rsaKey = localStorage.getItem('rsaKey');
      // if (savedUser) {
      //   this.isAuth = true;
      //   this.user = JSON.parse(savedUser);
      //   this.derivedKey = savedKey ? JSON.parse(savedKey).key : '';
      //   this.caseNo = savedKey ? JSON.parse(savedKey).caseNo : '';
      //   this.rsaKey = rsaKey ? JSON.parse(rsaKey).key : '';
      // }
    },
  },
});
