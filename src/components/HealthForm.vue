<template>
  <div class="health-form">
    <h6>Health Information</h6>
    <b-form>
      <b-row align-v="start" align-h="between">
        <b-col md="6" sm="12">
          <div class="form-group">
            <p class="label">Height</p>
            <b-form-input v-model="user.height" type="text"></b-form-input>
          </div>
        </b-col>
        <b-col md="6" sm="12">
          <div class="form-group">
            <p class="label">Weight</p>
            <b-form-input v-model="user.weight" type="text"></b-form-input>
          </div>
        </b-col>
        <b-col md="6" sm="12">
          <div class="form-group">
            <p class="label">Date of Birth</p>
            <b-form-datepicker
              v-model="user.dob"
              menu-class="w-100"
              calendar-width="100%"
              placeholder="Choose date of birth"
              :date-format-options="{
                day: '2-digit',
                year: 'numeric',
                month: 'short',
              }"
            ></b-form-datepicker>
          </div>
        </b-col>
        <b-col md="6" sm="12">
          <div class="form-group">
            <p class="label">Blood Group</p>
            <b-form-select v-model="user.blood_group" :options="bloodGroups"></b-form-select>
          </div>
        </b-col>
        <b-col md="6" sm="12">
          <div class="form-group">
            <p class="label">Last Donated Blood</p>
            <b-form-datepicker
              v-model="user.last_donated_blood"
              menu-class="w-100"
              calendar-width="100%"
              placeholder="Choose date of birth"
              :date-format-options="{
                day: '2-digit',
                year: 'numeric',
                month: 'short',
              }"
            ></b-form-datepicker>
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
  name: "HealthForm",
  data() {
    return {
      user: {},
      bloodGroups: [
        { value: "A+", text: "A positive" },
        { value: "A-", text: "A negative" },
        { value: "B+", text: "B positive" },
        { value: "B-", text: "B negative" },
        { value: "AB+", text: "AB positive" },
        { value: "AB-", text: "AB negative" },
        { value: "O+", text: "O positive" },
        { value: "O-", text: "O negative" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>