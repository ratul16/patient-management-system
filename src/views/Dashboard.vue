<template>
  <div class="dashboard">
    <b-row no-gutters class="layout" align-v="start">
      <b-col md="12" sm="12">
        <div class="section-info">
          <BannerSection />
          <ScheduleBoard />
        </div>
      </b-col>
      <b-col md="12" sm="12">
        <HealthOverview :health-stats="health" />
      </b-col>
      <b-col md="12" sm="12">
        <div class="section-list">
          <AppointmentHistory />
          <RecentReports />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import HealthOverview from "../components/HealthOverview.vue";
import BannerSection from "../components/BannerSection.vue";
import ScheduleBoard from "../components/ScheduleBoard.vue";
import AppointmentHistory from "../components/AppointmentHistory.vue";
import RecentReports from "../components/RecentReports.vue";
export default {
  components: {
    HealthOverview,
    BannerSection,
    ScheduleBoard,
    AppointmentHistory,
    RecentReports,
  },
  name: "DashboardView",
  data() {
    return {
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
};
</script>

<style lang="scss" scoped>
.dashboard {
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
      grid-template-columns: 2fr 2fr;
      div {
        min-height: 100%;
      }
    }
  }
}

@include media-queries("tab") {
  .dashboard {
    .layout {
      .section-info {
        grid-template-columns: 2fr 2fr;
      }
    }
  }
}
@include media-queries("tab-sm") {
  .dashboard {
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