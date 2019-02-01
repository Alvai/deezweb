<template>
  <div>
    <form @submit.prevent="getTracks(search)" class="form">
      <div class="form-group row">
        <label for="searchContent" class="col-sm-4 col-form-label">Titre :</label>
        <div class="col-sm-7">
          <input type="text" id="searchContent" class="form-control" v-model="search.content" placeholder="NF, Logic, San Holo" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="searchOrder" class="col-sm-4 col-form-label">Trier par :</label>
        <div class="col-sm-7">
          <select id="searchOrder" class="form-control" v-model="search.order" required>
            <option disabled value="">Please select one</option>
            <option value="ALBUM">Album</option>
            <option value="ARTIST">Artiste</option>
            <option value="TRACK">Musique</option>
            <option value="RANKING">Les plus populaires</option>
            <option value="RATING">Les mieux notés</option>
          </select>
        </div>
      </div>
      <input type="submit" class="btn btn-darky" value="Chercher">
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
        order: "TRACK" as string
      }
    };
  },
  methods: {
    async getTracks(search: SearchBar): Promise<void> {
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

<style lang="scss" scoped>
.form {
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
}
</style>
