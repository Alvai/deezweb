<template>
  <div class="home">
    <h2>Accueil</h2>
    <div v-if="favorites.length > 0">
      <Loading :loading="loading" />
      <Track v-if="!loading" :track="randomTrack" @dislike="getTrack" />
      <br />
      <button class="btn btn-darky" @click="getTrack">Favoris Aléatoire</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DeezerTrack } from '@/interfaces';
import Track from '@/components/Track.vue';
import Loading from '@/components/Loading.vue';
import { loadFavorites, getRandomFavoriteTrack } from "../utils/trackService";

export default Vue.extend({
  name: "home",
  components: {
    Track,
    Loading
  },
  data() {
    return {
      favorites: [] as Array<DeezerTrack>,
      randomTrack: {} as DeezerTrack,
      loading: false as boolean
    };
  },
  methods: {
    getTrack() {
      this.loading = true;
      this.favorites = loadFavorites();
      this.randomTrack = getRandomFavoriteTrack();
      this.loading = false;
    }
  },
  created() {
    this.favorites = loadFavorites();
    this.getTrack(); 
  }
});
</script>
