<template>
  <div id="app">
    <Navbar/>
    <router-view  class="container"/>
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
html,
body,
#app {
  height: 100%;
  width: 100%;
}
#app {
  font-family: "IBM Plex Mono", monospace, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $alvai-dark;
  background-color: $alvai-snow;
  min-height: fit-content;
  padding-bottom: 5vh;
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
