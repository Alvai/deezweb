<template>
  <div class="search">
    <h3>Search</h3>
    <div class="song-list">
      <Loading v-if="loading" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Loading from "@/components/Loading.vue";
export default Vue.extend({
  name: "search",
  components: {
    Loading
  },
  data() {
    return {
      loading: true
    };
  }
});
</script>
