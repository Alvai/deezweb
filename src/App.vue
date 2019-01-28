<template>
  <div id="app">
    <Navbar/>
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "@/components/Navbar.vue";

export default Vue.extend({
  name: "app",
  components: {
    Navbar
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $primary-color;
    &.router-link-exact-active {
      color: $secondary-color;
    }
  }
}
</style>
