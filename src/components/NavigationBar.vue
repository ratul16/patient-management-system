<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container>
      <b-navbar-brand href="#">
        <img src="/icon.png" alt="" srcset="" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item active>Home</b-nav-item>
          <b-nav-item>About</b-nav-item>
          <b-nav-item>Login</b-nav-item>
          <b-nav-item>Register</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
// import imgUrl from "./assets/img.png";
export default {
  name: "NavigationBar",
};
</script>

<style lang="scss" scoped>
.brand-nav {
  background-color: $white;
  i {
    color: $brand-color;
  }
  .navbar-brand {
    width: 45px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .navbar-toggler {
    padding-inline: 10px;
    // border: none;
    transition: $transition !important;
    .navbar-toggler-icon {
      background-image: none;
      width: auto;
      height: auto;
      font-family: FontAwesome;
      font-size: 24px;
    }
    .navbar-toggler-icon::before {
      content: "\f00d";
    }
    &.collapsed {
      .navbar-toggler-icon::before {
        content: "\f0c9";
      }
    }

    &:focus {
      box-shadow: none;
    }
  }
}
</style>