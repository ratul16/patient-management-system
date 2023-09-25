<template>
  <div class="statistics-view">
    <StatisticsCard
      :title="stats.money.title"
      :value="stats.money.value"
      :percentage="stats.money.percentage"
      :iconClass="stats.money.iconClass"
      :iconBackground="stats.money.iconBackground"
      :detail="stats.money.detail"
      directionReverse
    />
    <StatisticsCard
      :title="stats.users.title"
      :value="stats.users.value"
      :percentage="stats.users.percentage"
      :iconClass="stats.users.iconClass"
      :iconBackground="stats.users.iconBackground"
      :detail="stats.users.detail"
      directionReverse
    />
    <StatisticsCard
      :title="stats.clients.title"
      :value="stats.clients.value"
      :percentage="stats.clients.percentage"
      :iconClass="stats.clients.iconClass"
      :iconBackground="stats.clients.iconBackground"
      :detail="stats.clients.detail"
      directionReverse
    />
    <StatisticsCard
      :title="stats.sales.title"
      :value="stats.sales.value"
      :percentage="stats.sales.percentage"
      :iconClass="stats.sales.iconClass"
      :iconBackground="stats.sales.iconBackground"
      :detail="stats.sales.detail"
      directionReverse
    />
  </div>
</template>

<script>
import StatisticsCard from "./StatisticsCard.vue";
export default {
  components: { StatisticsCard },
  props: {
    stats: {
      type: Object,
      default: () => {},
    },
  },
  name: "StatisticsView",
};
</script>

<style lang="scss" scoped>
.statistics-view {
  display: grid;
  // flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}
@include media-queries("tab") {
  .statistics-view {
    grid-template-columns: repeat(2, 1fr);
  }
}
@include media-queries("mobile") {
  .statistics-view {
    grid-template-columns: 1fr;
  }
}
</style>