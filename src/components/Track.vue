<template>
  <div class="card track" style="width: 18rem;">
    <img class="card-img-top" :src="track.album.cover_xl" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title truncate" :title="track.title">{{ track.title }}</h5>
      <p class="card-text truncate" :title="track.artist.name">{{ track.artist.name }}</p>
      <p class="card-text truncate" :title="track.album.title">{{ track.album.title }}</p>
      <audio class="track-audio" :src="track.preview" controls></audio>
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

    max-height: 100%;
    min-width: 90%;
    &-audio {
      width: 100%;
      margin-bottom: auto;
    }
  }
  .truncate {
    max-height: 40%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
