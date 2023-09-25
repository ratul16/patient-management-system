<template>
  <div class="register">
    <div class="info-slider">
      <CarouselSlider />
    </div>
    <div class="register-form">
      <div>
        <div class="brand-logo">
          <svg viewBox="0 0 99 95">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M46.5611 4.13525C48.3135 2.86203 50.6865 2.86203 52.4389 4.13525L94.0611 34.3755C95.8135 35.6487 96.5468 37.9056 95.8774 39.9657L79.9792 88.8955C79.3098 90.9556 77.39 92.3504 75.2239 92.3504L23.7761 92.3504C21.61 92.3504 19.6902 90.9556 19.0208 88.8955L3.12257 39.9657C2.4532 37.9056 3.18649 35.6487 4.93893 34.3755L46.5611 4.13525Z"
              fill="#252525"
              stroke="#DC3545"
              stroke-width="5"
            />
            <path
              d="M33.8633 70.3504V67.0281L38.1611 66.2898V36.0467L33.8633 35.3084V31.9861H50.9756C53.7705 31.9861 56.126 32.408 58.042 33.2517C59.9756 34.0779 61.4434 35.282 62.4453 36.864C63.4473 38.4461 63.9482 40.3797 63.9482 42.6648C63.9482 44.9148 63.4561 46.8045 62.4717 48.3338C61.5049 49.8631 60.125 51.0232 58.332 51.8142C56.5391 52.5877 54.4121 53.0008 51.9512 53.0535L43.3555 53.2117V66.2898L47.6533 67.0281V70.3504H33.8633ZM59.2021 70.3504L50.6592 51.1814L55.8535 51.1287L62.9463 66.4744L65.6094 66.949V70.3504H59.2021ZM43.3555 49.1248H50.4482C53.3486 49.1248 55.458 48.5711 56.7764 47.4637C58.0947 46.3562 58.7539 44.739 58.7539 42.6121C58.7539 40.5906 58.1211 38.991 56.8555 37.8133C55.5898 36.6355 53.6299 36.0467 50.9756 36.0467H43.3555V49.1248Z"
              fill="#DC3545"
            />
          </svg>
          <h4 class="mb-0">Create your Account</h4>
        </div>
        <p>Please provide the following informations</p>
        <b-form>
          <b-row align-v="start" align-h="between">
            <b-col md="6" sm="12">
              <div class="form-group">
                <p class="label">First Name</p>
                <b-form-input v-model="user.first_name" type="text"></b-form-input>
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="form-group">
                <p class="label">Last Name</p>
                <b-form-input v-model="user.last_name" type="text"></b-form-input>
              </div>
            </b-col>
            <b-col md="12" sm="12">
              <div class="form-group">
                <p class="label">Email Address</p>
                <b-form-input v-model="user.email" type="email"></b-form-input>
              </div>
            </b-col>
            <b-col md="12" sm="12">
              <div class="form-group">
                <p class="label">Password</p>
                <b-form-input v-model="user.password" type="password"></b-form-input>
              </div>
            </b-col>
            <b-col md="12" sm="12">
              <div class="form-group">
                <p class="label">Confirm Password</p>
                <b-form-input v-model="user.cpassword" type="password"></b-form-input>
              </div>
            </b-col>
            <b-col md="12" sm="12">
              <div class="form-group">
                <p class="label">User Type</p>
                <b-form-select v-model="user.blood_group" :options="userRoles"></b-form-select>
              </div>
            </b-col>
            <b-col md="12" sm="12">
              <div class="mt-4">
                <b-button variant="primary" block> Register </b-button>
              </div>
            </b-col>
          </b-row>
        </b-form>
        <div class="text-center mt-4">
          <p>
            Already have an account ?
            <b-link :to="{ name: 'login' }" variant="primary" link> Log in to account </b-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselSlider from "../components/CarouselSlider.vue";

export default {
  name: "Register",
  components: { CarouselSlider },
  data() {
    return {
      user: {},
      status: false,
      userRoles: [
        { value: "admin", text: "Administrator" },
        { value: "moderator", text: "Moderator" },
        { value: "editor", text: "Editor" },
        { value: "user", text: "Regular User" },
        { value: "guest", text: "Guest User" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    flex: 1;
    height: 100%;
    display: flex;
    // justify-content: center;
  }
  .register-form {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
    border: 1px solid $brand-color-light;
    // padding: 0 80px;
    & > div {
      max-width: 400px;
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      svg {
        width: 45px;
        height: 45px;
      }
    }

    .form-group {
      margin-bottom: 10px;
    }
    .label {
      margin-bottom: 5px;
    }
    ::v-deep .custom-control-label {
      font-size: 14px;
      margin-bottom: 0;
    }
  }
  .info-slider {
    position: relative;
    color: $white;
    background-color: $brand-color-dark;
  }
}
</style>
