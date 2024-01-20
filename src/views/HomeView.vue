<template>
  <div class="home">
    <div class="layout">
      <div class="user-types">
        <div class="user shadow-sm" v-for="u in users" :key="u.name" @click="getUserRole(u.role)">
          <i class="fa-solid" :class="u.icon"></i>
          <div class="content">
            <span>{{ u.name }} View</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/auth";
import profile from "../data/profile.json";

export default {
  name: "HomeView",
  setup() {
    const store = useAuthStore();
    return {
      store,
    };
  },
  data() {
    return {
      profileData: profile,
      users: [
        {
          name: "Patient",
          icon: "fa-bed",
          role: "patient",
        },
        {
          name: "Doctor",
          icon: "fa-user-doctor",
          role: "doctor",
        },
        {
          name: "Admin",
          icon: "fa-user-shield",
          role: "admin",
        },
      ],
    };
  },
  mounted() {
    this.store.initialize();
  },
  methods: {
    getUserRole(role) {
      this.store.setUserRole(role);
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  display: grid;
  place-content: center;
  .user-types {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, minmax(250px, 1fr));

    .user {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      border-radius: 5px;
      background-color: $white;
      border: 1px solid $brand-color;
      transition: $transition;
      cursor: pointer;
      gap: 10px;
      i {
        color: $brand-color;
        font-size: 24px;
      }
      .avatar {
        place-content: center;
        padding: 10px;
      }
      &:hover {
        background-color: $brand-color;
        color: $white;
        i {
          color: $white;
        }
      }
    }
  }
}
</style>