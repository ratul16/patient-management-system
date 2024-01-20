<template>
  <div class="doctor-layout">
    <b-row no-gutters class="layout" align-v="start">
      <b-col md="12" sm="12">
        <StatisticsViewVue :stats="stats" />
      </b-col>
      <b-col md="12" sm="12">
        <div class="section-info">
          <!-- <BannerSection :name="`${userData.info.first_name} ${userData.info.last_name}`" /> -->
          <AppointmentCard @getPatientData="getPatientData" />
          <PatientOverviewCard :patientData="patient" />
        </div>
      </b-col>

      <b-col md="12" sm="12">
        <div class="section-list">
          <!-- <MedicationCard />
          <ReportCard /> -->
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import StatisticsViewVue from "../components/doctor/StatisticsView.vue";
import AppointmentCard from "../components/doctor/AppointmentCard.vue";
import PatientOverviewCard from "../components/doctor/PatientOverviewCard.vue";
export default {
  name: "DoctorLayout",
  props: {
    userData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    StatisticsViewVue,
    AppointmentCard,
    PatientOverviewCard,
  },
  data() {
    return {
      patient: {},
      stats: [
        {
          title: "Total Patients",
          value: "504",
          iconClass: "fa-solid fa-bed-pulse",
        },
        {
          title: "Total Appointments",
          value: "200",
          iconClass: "fa-solid fa-calendar-check",
        },
        {
          title: "Total Treatments",
          value: "404",
          iconClass: "fa-solid fa-hospital-user",
        },
        {
          title: "Total Income",
          value: "£33,430",
          iconClass: "fa-solid fa-chart-line",
        },
      ],
    };
  },
  methods: {
    getPatientData(data) {
      this.patient = data.person;
    },
  },
};
</script>

<style lang="scss" scoped>
.doctor-layout {
  .layout {
    gap: 10px;
    .section-info {
      gap: 10px;
      display: grid;
      grid-template-columns: 1fr 2fr;
      div {
        min-height: 100%;
      }
    }
    .section-list {
      gap: 10px;
      display: grid;
      grid-template-columns: 1fr 2fr;
      div {
        min-height: 100%;
      }
    }
  }
}

@include media-queries("tab") {
  .doctor-layout {
    .layout {
      .section-info {
        grid-template-columns: 2fr 2fr;
      }
      .section-list {
        grid-template-columns: 2fr 2fr;
      }
    }
  }
}
@include media-queries("tab-sm") {
  .doctor-layout {
    .layout {
      .section-info,
      .section-list {
        grid-template-columns: 1fr;
      }
    }
  }
}
.slider {
  max-height: 400px;
  position: relative;
  border-radius: 10px;
  border: 1px solid $brand-color-light;
  overflow: hidden;
  ::v-deep .carousel-caption {
    width: 100%;
    height: fit-content;
    left: 0;
    bottom: 50%;
    padding: 30px 0;
    background-color: rgba(29, 30, 33, 0.8);
  }
  .carousel-buttons {
    bottom: 20px;
  }
}
</style>