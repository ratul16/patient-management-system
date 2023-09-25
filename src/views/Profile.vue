<template>
  <div class="profile">
    <!-- <h2>User Profile</h2> -->
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
              <PersonalForm />
            </b-tab>
            <b-tab title="Health">
              <HealthForm />
            </b-tab>
          </b-tabs>
        </div>
      </b-col>
      <b-col md="4" sm="12">
        <div class="user-card shadow-sm">
          <img class="banner" src="https://source.unsplash.com/qay3lNDSHzc/" alt="banner-img" />
          <img class="avatar" src="https://source.unsplash.com/QXevDflbl8A/" alt="avatar-img" />
          <div class="info">
            <h5>Emma William, 29</h5>
            <p>Birmingham, UK</p>
            <small class="text-muted">University Of Gloucestershire</small>
            <small class="text-muted">MSc in Cyber Security</small>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PersonalForm from "../components/PersonalForm.vue";
import HealthForm from "../components/HealthForm.vue";
export default {
  components: { PersonalForm, HealthForm },
  name: "profile",
  data() {
    return {
      user: {},
    };
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
    // padding: 10px 15px;
    border-radius: 10px;
    border: 1px solid $brand-color-light;
    min-height: 300px;
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
      padding: 5px 15px;
      p {
        margin-bottom: 0;
      }
    }
  }
}
</style>