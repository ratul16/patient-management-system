<template>
  <div class="appointment">
    <AppointmentForm />
  </div>
</template>

<script>
import AppointmentForm from "../components/AppointmentForm.vue";
export default {
  components: { AppointmentForm },
  name: "AppointmentView",
};
</script>

<style lang="scss" scoped>
</style>