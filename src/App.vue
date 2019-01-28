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
  font-family: "IBM Plex Mono", monospace, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $alvai-dark;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $alvai-dark;
    &.router-link-exact-active {
      color: $alvai-yellow;
    }
  }
}
</style>
