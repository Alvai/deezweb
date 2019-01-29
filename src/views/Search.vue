<template>
  <div class="search">
    <h3>Search</h3>
    <SearchForm @search="setTracks" @loading="loadingTracks"/>
    <Loading :loading="loading" />
    <TrackList v-if="tracks.length > 0" :tracks="tracks" />
    <p v-else-if="!loading && searched && tracks.length === 0">Pas de tracks</p>
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
      tracks: [] as Array<DeezerTrack>,
      searched: false as boolean
    };
  },
  methods: {
    setTracks(tracks: Array<DeezerTrack>): void {
      this.tracks = tracks;
      if (!this.searched) this.searched = true;
    },
    loadingTracks(loading: boolean): void {
      if (loading === true) {
        this.tracks = [];
      }
      this.loading = loading;
    }
  }
});
</script>
