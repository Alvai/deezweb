<template>
  <div class="card track" style="width: 18rem;">
    <img class="card-img-top" :src="track.album.cover_xl" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ track.title }}</h5>
      <p class="card-text">{{ track.artist.name }}</p>
      <p class="card-text">{{ track.album.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DeezerTrack } from '@/interfaces';
export default Vue.extend({
  name: "Track",
  props: {
    track: {
      type: Object as () => DeezerTrack
    }
  }
});
</script>

<style lang="scss" scoped>
  .track {
    justify-self: center;
    align-self: center;
    min-height: 500px;
  }
</style>
