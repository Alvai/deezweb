<template>
  <div>
    <form @submit.prevent="getTracks(search)">
      <input type="text" v-model="search.content" required>
      <select v-model="search.order" required>
        <option disabled value="">Please select one</option>
        <option value="ALBUM">Album</option>
        <option value="ARTIST">Artiste</option>
        <option value="TRACK">Musique</option>
        <option value="RANKING">Les plus populaires</option>
        <option value="RATING">Les mieux notés</option>
      </select>
      <input type="submit" value="Chercher">
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { searchTracks } from "../utils/trackService";
import { SearchBar } from "@/interfaces";
export default Vue.extend({
  name: "SearchForm",
  data() {
    return {
      search: {
        content: "" as string,
        order: "" as string
      }
    };
  },
  methods: {
    async getTracks(search: SearchBar) {
      if (this.search.content && this.search.order) {
        this.$emit("loading", true);
        const tracks = await searchTracks(search);
        this.$emit("search", tracks);
        this.$emit("loading", false);
      }
    }
  }
});
</script>
