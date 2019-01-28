<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" :class="{ 'navbarOpen': show }">
     <router-link class="navbar-brand" to="/"><img class="logo" alt="Vue logo" src="../assets/logo.png"></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" :class="{ 'show': show }">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/search">Chercher une musique</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/favorites">mes favoris</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Navbar",
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    }
  }
});
</script>

<style lang="scss" scoped>
.logo {
  width: 20vw;
}
.navbar-brand {
  width: 50%;
}
</style>
