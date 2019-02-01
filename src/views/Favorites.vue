<template>
  <div class="about">
    <h1>Mes Favoris</h1>
    <Loading :loading="loading" />
    <TrackList v-if="favorites.length > 0" :tracks="favorites" @listUpdate="getFavorites"/>
    <p v-else-if="!loading && favorites.length === 0">Pas de favoris</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { loadFavorites } from "@/utils/trackService";
import { DeezerTrack } from "@/interfaces";
import Loading from "@/components/Loading.vue";
import TrackList from "@/components/TrackList.vue";
export default Vue.extend({
  name: "favorite",
  components: {
    Loading,
    TrackList
  },
  data() {
    return {
      favorites: [] as Array<DeezerTrack>,
      loading: true as boolean
    };
  },
  methods: {
    getFavorites() {
      this.favorites = loadFavorites();
    }
  },
  created() {
    this.getFavorites();
    this.loading = false;
  }
});
</script>
