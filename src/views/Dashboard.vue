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
      health: [
        {
          name: "Blood Pressure",
          icon: "fa-gauge",
          value: "110 / 70",
          caption: "10% higher than last month",
        },
        {
          name: "Heart Rate",
          icon: "fa-heart-pulse",
          value: "85 bpm",
          caption: "5% less than last month",
        },
        {
          name: "Glucose Level",
          icon: "fa-wave-square",
          value: "75 - 90",
          caption: "5% lower than last month",
        },
        {
          name: "Blood Count",
          icon: "fa-chart-simple",
          value: "9,456 /ml",
          caption: "10% higher than last month",
        },
      ],
      stats: {
        money: {
          title: "Today's Sales",
          value: "$53,000",
          percentage: "+55",
          iconClass: "fa-solid fa-coins",
          detail: "since yesterday",
          iconBackground: "bg-primary",
        },
        users: {
          title: "Today's Users",
          value: "2,300",
          percentage: "+3",
          iconClass: "fa-solid fa-earth-europe",
          iconBackground: "bg-danger",
          detail: "since last week",
        },
        clients: {
          title: "New Clients",
          value: "+3,462",
          percentage: "-2",
          iconClass: "fa-solid fa-user",
          percentageColor: "text-danger",
          iconBackground: "bg-success",
          detail: "since last quarter",
        },
        sales: {
          title: "Total Sales",
          value: "$103,430",
          percentage: "+5",
          iconClass: "fa-solid fa-chart-line",
          iconBackground: "bg-warning",
          detail: "than last month",
        },
      },
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