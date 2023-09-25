import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuth: true,
    role: "Patient",
    user: {
      id: "550e8400-e29b-41d4-a716-446655440000",
      avatar: "https://source.unsplash.com/3prIF_-eDM0/",
      info: {
        first_name: "John",
        last_name: "Doe",
        role: "User",
        email: "john.doe@example.com",
        password: "",
        phone: "+1234567890",
        about_me: "I love outdoor activities.",
        address: "123 Main Street",
        city: "New York",
        country: "USA",
        postcode: "NK2 3YT",
      },
      health: {
        dob: "1995-05-12",
        height: 175.5,
        weight: 70.2,
        gender: "Male",
        blood_group: "A+",
      },
      created_at: "2023-09-25 09:15:00",
      updated_at: "2023-09-25 09:15:00",
    },
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
