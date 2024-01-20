<template>
  <div class="appointment-form custom-card">
    <h5 class="mb-0">Book Appointment</h5>
    <hr />
    <div class="mb-2">
      <small class="text-danger font-weight-bold">
        For chest pain and/or shortness of breath, call 999.
      </small>
      <small
        >When the surgery is closed please <b>dial 111</b> where you will be directed to the most
        appropriate service.</small
      >
    </div>
    <b-row align-v="start" align-h="between">
      <b-col md="6" sm="12">
        <div class="form-group d-block">
          <p class="label">Select Date</p>
          <b-calendar
            :v-model="selectedDate"
            :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit' }"
            :date-disabled-fn="dateDisabled"
            :min="minDate"
            :max="maxDate"
            label-help="We are closed on weekends and bank holidays"
            no-key-nav
            start-weekday="1"
            selected-variant="primary"
            today-variant="primary"
            nav-button-variant="secondary"
            locale="en"
            block
          ></b-calendar>
        </div>
      </b-col>
      <b-col md="6" sm="12">
        <div class="form-group d-block">
          <p class="label">Select Time</p>
          <b-form-group v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              class="time-slots"
              v-model="selectedTime"
              :options="timeSlots"
              :aria-describedby="ariaDescribedby"
              name="radio-options-slots"
            />
            <hr />
            <div class="form-group d-block">
              <p class="label">Describe Condition</p>
              <b-form-textarea
                id="textarea"
                v-model="condition"
                rows="4"
                max-rows="6"
              ></b-form-textarea>
            </div>
          </b-form-group>
        </div>
      </b-col>
      <b-col md="12" sm="12">
        <div class="text-right">
          <b-button variant="primary" class="custom-btn"> Book Appointment </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "AppointmentForm",
  data() {
    return {
      selectedTime: null,
      selectedDate: null,
      condition: "",
      disabledDays: ["2024-10-26", "2024-10-27"],
      minDate: moment().format("YYYY-MM-DD"),
      maxDate: moment().endOf("month").format("YYYY-MM-DD"),
      timeSlots: [
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
      ],
    };
  },
  methods: {
    dateDisabled(ymd, date) {
      const formattedDate = moment(date).format("YYYY-MM-DD");
      const weekday = date.getDay();

      // Disable weekends (Saturday and Sunday)
      if (weekday === 0 || weekday === 6) {
        return true;
      }

      // Disable specified days
      if (this.disabledDays.includes(formattedDate)) {
        return true;
      }

      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.appointment-form {
  .label {
    margin-bottom: 5px;
    font-size: 14px;
    // font-weight: bold;
  }
  .time-slots {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
  }
  ::v-deep {
    .custom-control {
      padding: 0;
      margin: 0;
      text-align: center;
      .custom-control-input:checked ~ .custom-control-label {
        background-color: $brand-color;
        color: $white;
      }
    }

    .custom-control-label {
      font-size: 16px;
      width: 100%;
      padding: 10px 15px;
      border-radius: 5px;
      border: 1px solid $brand-color-light;
      cursor: pointer;
      transition: $transition;

      &:hover {
        background-color: $brand-color-light;
        color: $white;
      }
    }

    .custom-control-input,
    .custom-control-label::before,
    .custom-control-label::after {
      display: none;
    }
  }
}
</style>