<template>
  <div class="patient-layout">
    <b-row no-gutters class="layout" align-v="start" v-if="Object.keys(userData).length > 0">
      <b-col md="12" sm="12">
        <div class="section-info">
          <BannerSection :name="`${userData.info.first_name} ${userData.info.last_name}`" />
          <ScheduleBoard />
        </div>
      </b-col>
      <b-col md="12" sm="12">
        <HealthOverview :health-stats="userData.health.diagnosis" />
      </b-col>
      <b-col md="12" sm="12">
        <div class="section-list">
          <MedicationCard />
          <ReportCard />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import HealthOverview from "../components/patient/HealthOverview.vue";
import BannerSection from "../components/BannerSection.vue";
import ScheduleBoard from "../components/patient/ScheduleBoard.vue";
import ReportCard from "../components/patient/ReportCard.vue";
import MedicationCard from "../components/patient/MedicationCard.vue";

export default {
  name: "PatientLayout",
  props: {
    userData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    HealthOverview,
    BannerSection,
    ScheduleBoard,
    ReportCard,
    MedicationCard,
  },
  data() {
    return {
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
};
</script>

<style lang="scss" scoped>
.patient-layout {
  .layout {
    gap: 10px;
    .section-info {
      gap: 10px;
      display: grid;
      grid-template-columns: 3fr 2fr;
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
  .patient-layout {
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
  .patient-layout {
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