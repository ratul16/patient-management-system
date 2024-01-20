<template>
  <div class="statistics-view">
    <StatisticsCard
      v-for="(s, index) in stats"
      :key="index"
      :title="s.title"
      :value="s.value"
      :iconClass="s.iconClass"
    />
  </div>
</template>

<script>
import StatisticsCard from "../doctor/StatisticsCard.vue";
export default {
  name: "StatisticsView",
  components: { StatisticsCard },
  props: {
    stats: {
      type: Array,
      default: () => [],
    },
  },
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