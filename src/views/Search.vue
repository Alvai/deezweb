<template>
  <div class="search">
    <h3>Search</h3>
    <SearchForm @search="setTracks" @loading="loadingTracks"/>
    <Loading :loading="loading" />
    <TrackList v-if="tracks" :tracks="tracks" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Loading from "@/components/Loading.vue";
import SearchForm from "@/components/SearchForm.vue";
import TrackList from "@/components/TrackList.vue";
import { DeezerTrack } from "@/interfaces";
export default Vue.extend({
  name: "search",
  components: {
    Loading,
    SearchForm,
    TrackList
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
      if (loading === true) {
        this.tracks = [];
      }
      this.loading = loading;
    }
  }
});
</script>
