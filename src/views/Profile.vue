<template>
  <div class="profile">
    <h2>User Profile</h2>
    <!-- {{ store.user }} -->
    <b-row align-v="start" align-h="between">
      <b-col md="8" sm="12">
        <div class="profile-info shadow-sm">
          <div class="d-flex align-items-center justify-content-between py-2 mb-4" v-if="false">
            <h5 class="mb-0">Edit Profile</h5>
            <b-button class="px-4 py-2" variant="primary" size="sm">Settings</b-button>
          </div>
          <b-tabs content-class="mt-3" align="end">
            <template #tabs-start>
              <h5 role="presentation" class="mb-0 nav-item align-self-center tab-label">
                Edit Profile
              </h5>
            </template>
            <b-tab title="Personal" active>
              <!-- v-if="Object.keys(user).length" -->
              <PersonalForm v-if="isDataLoaded" :userData="user.info" />
            </b-tab>
            <b-tab title="Health">
              <HealthForm v-if="isDataLoaded" :health="user.health" />
            </b-tab>
          </b-tabs>
        </div>
      </b-col>
      <b-col md="4" sm="12">
        <div class="user-card shadow-sm">
          <img class="banner" src="https://source.unsplash.com/qay3lNDSHzc/" alt="banner-img" />
          <img class="avatar" :src="user.avatar" alt="avatar-img" />
          <div class="info">
            <h5>{{ user.info ? `${user.info.first_name} ${user.info.last_name}` : "" }}</h5>
            <p>{{ user.info ? `${user.info.city}, ${user.info.country}` : "" }}</p>
            <small class="text-muted">
              Blood Group {{ user.health ? user.health.blood_group : "" }}
            </small>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/auth";
import PersonalForm from "../components/PersonalForm.vue";
import HealthForm from "../components/HealthForm.vue";
export default {
  name: "profile",
  setup() {
    const store = useAuthStore();
    return {
      store,
    };
  },
  components: { PersonalForm, HealthForm },
  data() {
    return {
      user: {},
      isDataLoaded: false,
    };
  },
  mounted() {
    if (this.store.isAuth) {
      this.getUserData();
    }
  },
  methods: {
    getUserData() {
      this.user = JSON.parse(JSON.stringify(this.store.user));
      this.isDataLoaded = true;
    },
    getDateTime(timestamp) {
      const date = new Date(timestamp * 1000);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return `${date.toLocaleDateString("en-GB", options)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  .profile-info {
    background-color: $white;
    padding: 10px 15px;
    border-radius: 10px;
    border: 1px solid $brand-color-light;
    h6 {
      color: $text-variant-3;
      font-weight: 400;
      margin-bottom: 15px;
    }
    .tab-label {
      margin-right: auto;
    }

    ::v-deep {
      .form-group {
        margin-bottom: 10px;
      }
      .label {
        margin-bottom: 5px;
        font-size: 14px;
        // font-weight: bold;
      }
    }
  }

  .user-card {
    background-color: $white;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid $brand-color-light;
    min-height: fit-content;
    .banner {
      width: 100%;
      height: 160px;
      object-fit: cover;
      margin-bottom: 16px;
    }
    .avatar {
      position: absolute;
      width: 100px;
      height: 100px;
      object-fit: cover;
      object-position: top;
      border-radius: 50%;
      z-index: 4;
      top: 80px;
      right: 10px;
    }
    .info {
      display: flex;
      flex-direction: column;
      padding: 15px;
      p {
        margin-bottom: 0;
      }
    }
  }
}
</style>