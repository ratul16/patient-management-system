<template>
  <div class="statistics-card card shadow-sm">
    <div class="p-3 card-body">
      <div class="d-flex" :class="directionReverse ? reverseDirection : ''">
        <div>
          <div class="text-center icon-shape" :class="iconBackground">
            <i class="text-lg opacity-10" :class="iconClass" aria-hidden="true"></i>
          </div>
        </div>
        <div>
          <div class="numbers">
            <p class="mb-1 text-uppercase font-weight-bold">
              {{ title }}
            </p>
            <h4 class="font-weight-bolder" :class="valueColor">{{ value }}</h4>
            <span class="text-sm" :class="percentage >= 0 ? 'text-success' : 'text-danger'"
              >{{ percentage }}%
            </span>
            <span>{{ detail }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsCard",
  data() {
    return {
      reverseDirection: "flex-row-reverse justify-content-between",
    };
  },
  props: {
    directionReverse: Boolean,
    title: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    value: {
      required: true,
    },
    valueColor: {
      type: String,
    },
    percentage: String,
    iconClass: {
      type: String,
      required: true,
    },
    iconBackground: {
      type: String,
      default: "bg-white",
    },
  },
};
</script>

<style lang="scss" scoped>
.statistics-card {
  border-radius: 10px;
  border: 1px solid $brand-color-light;

  .icon-shape {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    // background-color: red;
    opacity: 0.8;
    i {
      color: $white;
      font-size: 18px;
    }
  }

  .numbers {
    p {
      font-size: 14px;
      color: $text-variant-3;
    }
  }
}
</style>