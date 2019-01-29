<template>
  <div class="search">
    <h3>Search</h3>
    <SearchForm @search="setTracks" @loading="loadingTracks"/>
    <Loading :loading="loading" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Loading from "@/components/Loading.vue";
import SearchForm from "@/components/SearchForm.vue";
import { DeezerTrack } from "@/interfaces";
export default Vue.extend({
  name: "search",
  components: {
    Loading,
    SearchForm,
  },
  data() {
    return {
      loading: false as boolean,
      tracks: [] as Array<DeezerTrack>
    };
  },
  methods: {
    setTracks(tracks: Array<DeezerTrack>) {
      this.tracks = tracks;
    },
    loadingTracks(loading: boolean) {
      this.loading = loading;
    }
  }
});
</script>
