<template>
  <div class="personal-form">
    <h6>User Information</h6>
    <b-form>
      <b-row align-v="start" align-h="between">
        <b-col md="6" sm="12">
          <div class="form-group d-block">
            <p class="label">First Name</p>
            <b-form-input v-model="user.first_name" type="text"></b-form-input>
          </div>
        </b-col>
        <b-col md="6" sm="12">
          <div class="form-group d-block">
            <p class="label">Last Name</p>
            <b-form-input v-model="user.last_name" type="text"></b-form-input>
          </div>
        </b-col>
        <b-col md="6" sm="12">
          <div class="form-group d-block">
            <p class="label">Email Address</p>
            <b-form-input v-model="user.email" type="email"></b-form-input>
          </div>
        </b-col>
        <b-col md="6" sm="12">
          <div class="form-group d-block">
            <p class="label">Phone</p>
            <b-form-input v-model="user.phone" type="tel"></b-form-input>
          </div>
        </b-col>
        <b-col md="12" sm="12">
          <div class="form-group d-block">
            <p class="label">About Me</p>
            <b-form-textarea
              id="textarea"
              v-model="user.about_me"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </div>
        </b-col>
      </b-row>

      <hr />

      <h6>Contact Information</h6>
      <b-row>
        <b-col md="12" sm="12">
          <div class="form-group d-block">
            <p class="label">Address</p>
            <b-form-input v-model="user.address" type="text"></b-form-input>
          </div>
        </b-col>
        <b-col md="4" sm="12">
          <div class="form-group d-block">
            <p class="label">City</p>
            <b-form-input v-model="user.email" type="email"></b-form-input>
          </div>
        </b-col>
        <b-col md="4" sm="12">
          <div class="form-group d-block">
            <p class="label">Country</p>
            <b-form-input v-model="user.first_name" type="text"></b-form-input>
          </div>
        </b-col>
        <b-col md="4" sm="12">
          <div class="form-group d-block">
            <p class="label">Postal Code</p>
            <b-form-input v-model="user.last_name" type="text"></b-form-input>
          </div>
        </b-col>
        <b-col md="12" sm="12">
          <div class="text-right my-2">
            <b-button variant="outline-primary"> Save Changes </b-button>
          </div>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "PersonalForm",
  data() {
    return {
      user: {},
    };
  },
};
</script>

<style lang="scss" scoped>
</style>