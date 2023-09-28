<template>
  <div class="header shadow-sm">
    <div class="breadcrumb mb-0">
      <div class="toggle" :class="sidebar ? 'expanded' : ''" @click="toggleSidebar()">
        <i class="fa-solid fa-angle-right"></i>
      </div>
      <ol class="breadcrumb text-capitalize mb-0">
        <li class="breadcrumb-item text-muted">Pages</li>
        <li class="breadcrumb-item">{{ $route.name }}</li>
      </ol>
    </div>
    <div class="right-side d-flex align-items-center">
      <a
        href="https://github.com/ratul16/patient-management-system"
        target="_blank"
        class="px-2 mr-2"
      >
        <i class="fa-brands fa-github"></i>
      </a>
      <div class="notification px-2 mr-2">
        <!-- <i class="fa-solid fa-bell fa-shake"></i> -->
        <b-dropdown variant="link" toggle-class="text-decoration-none p-0" right no-caret>
          <template #button-content>
            <i class="fa-solid fa-bell"></i>
          </template>
          <b-dropdown-item href="#"> Docker's Appointment Booked </b-dropdown-item>
          <b-dropdown-item href="#">Medical Test Booked</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="logout px-2">
        <i class="fa-solid fa-right-from-bracket"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    sidebar: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.toggle = !this.toggle;
      this.$emit("toggleSidebar", this.toggle);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: $white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 10px;

  i {
    font-size: 18px;
    color: $brand-color-dark;
  }
  .breadcrumb {
    align-items: center;
    background-color: transparent;
    padding: 0;
    .toggle {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid $border-variant-5;
      margin-right: 10px;
      cursor: pointer;
      transition: $transition;

      &.expanded {
        rotate: 180deg;
        border-color: $brand-color;
      }
    }
  }
}
</style>