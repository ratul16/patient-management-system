import { defineStore } from "pinia";
import profile from "../data/profile.json";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuth: true,
    role: "",
    user: {},
  }),
  persist: true,
  getters: {
    isAuthenticated() {
      return this.isAuth;
    },
    getUserData() {
      return profile[this.role];
    }
  },
  actions: {
    setUserRole(role) {
      this.role = role;
      this.isAuth = true;
      localStorage.setItem("role", JSON.stringify(this.role));
    },
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
      this.isAuth = false;
      this.user = {};
      this.role = '';
    },
  },
});
