<template>
  <div v-if="loading">
    <img src="../assets/lave.svg" alt="loading..."/>
    <h4>Loading...</h4>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Loading",
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
});
</script>
