<template>
  <div class="appointment-history custom-card">
    <h6>Appointment History</h6>
    <b-table responsive hover :items="items" :fields="fields">
      <template #cell(status)="data">
        <b-badge pill :variant="statusList[data.item.status]">{{ data.item.status }}</b-badge>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "AppointmentHistory",
  data() {
    return {
      fields: ["doctor", "date", "status"],
      items: [
        { date: "2023-10-05", doctor: "Dr. Dickerson Macdonald", status: "Scheduled" },
        { date: "2023-10-12", doctor: "Dr. Larsen Shaw", status: "Canceled" },
        { date: "2023-11-02", doctor: "Dr. Geneva Wilson", status: "Scheduled" },
        { date: "2023-11-15", doctor: "Dr. Jami Carney", status: "Completed" },
      ],
      statusList: {
        Scheduled: "primary",
        Canceled: "danger",
        Completed: "success",
        Rescheduled: "primary",
        Follow_up: "info",
        Emergency: "danger",
        Postponed: "dark",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.appointment-history {
}
</style>