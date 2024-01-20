<template>
  <div class="dashboard">
    <PatientLayoutVue v-if="this.store.role === 'patient'" :userData="user" />
    <DoctorLayoutVue v-if="this.store.role === 'doctor'" />
  </div>
</template>

<script>
import PatientLayoutVue from "../layout/PatientLayout.vue";
import DoctorLayoutVue from "../layout/DoctorLayout.vue";
import { useAuthStore } from "../stores/auth";

export default {
  name: "DashboardView",
  setup() {
    const store = useAuthStore();
    return {
      store,
    };
  },
  components: {
    PatientLayoutVue,
    DoctorLayoutVue,
  },
  data() {
    return {
      user: {},
      stats: [
        {
          title: "Total doctors",
          value: "504",
          iconClass: "fa-solid fa-coins",
        },
        {
          title: "Total Appointments",
          value: "200",
          iconClass: "fa-solid fa-earth-europe",
        },
        {
          title: "Total Treatments",
          value: "404",
          iconClass: "fa-solid fa-user",
        },
        {
          title: "Total Sales",
          value: "$103,430",
          iconClass: "fa-solid fa-chart-line",
        },
      ],
    };
  },
  mounted() {
    if (this.store.role) {
      this.user = this.store.getUserData;
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>