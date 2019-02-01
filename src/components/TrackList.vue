<template>
  <div class="track-list">
    <Track v-for="track in tracks" :key="track.id" :track="track" @dislike="updateList"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DeezerTrack } from "@/interfaces";
import Track from "./Track.vue";
export default Vue.extend({
  name: "TrackList",
  components: {
    Track
  },
  props: {
    tracks: {
      type: Array as () => Array<DeezerTrack>
    }
  },
  methods: {
    updateList() {
      this.$emit("listUpdate");
    }
  }
});
</script>

<style lang="scss" scoped>
.track-list {
  margin-top: 1vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-gap: 25px;
  .track {
    max-height: 100%;
    min-width: 90%;
  }
}
</style>
