<template>
  <div class="dashboard">
    <StatisticsView :stats="stats" class="mb-3" />
    <!-- <div class="charts-list mb-3">
      <BarChart />
      <LineChart />
      <div class="slider">
        <CarouselSlider />
      </div>
    </div> -->
  </div>
</template>

<script>
import BarChart from "../components/BarChart.vue";
import LineChart from "../components/LineChart.vue";
import StatisticsView from "../components/StatisticsView.vue";
import CarouselSlider from "../components/CarouselSlider.vue";
export default {
  components: { StatisticsView, BarChart, LineChart, CarouselSlider },
  name: "DashboardView",
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