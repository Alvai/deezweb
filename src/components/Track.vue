<template>
  <div class="card track" style="width: 18rem;">
    <img class="card-img-top" :src="track.album.cover_xl" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title truncate" :title="track.title">{{ track.title }}</h5>
      <p class="card-text truncate" :title="track.artist.name">{{ track.artist.name }}</p>
      <p class="card-text truncate" :title="track.album.title">{{ track.album.title }}</p>
      <audio class="track-audio" :src="track.preview" controls></audio>
      <i @click="handleFavorite" class="fa-heart" :class="isLiked ? 'fas' : 'far'"></i>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DeezerTrack } from '@/interfaces';
import { isFavorite, removeFavorite, addFavorite } from "@/utils/trackService";
export default Vue.extend({
  name: "Track",
  props: {
    track: {
      type: Object as () => DeezerTrack
    }
  },
  data() {
    return {
      liked: false as boolean
    }
  },
  methods: {
    handleFavorite(): void {
      if (isFavorite(this.track)) {
        removeFavorite(this.track);
        this.$emit('dislike', this.track.id);
      } else {
        addFavorite(this.track);
      }
      this.isFavoriteLiked(this.track);
    },
    isFavoriteLiked(track: DeezerTrack) {
      this.liked = isFavorite(track);
    }
  },
  computed: {
    isLiked: function() {
      this.isFavoriteLiked(this.track);
      return this.liked;
    }
  },
  created() {
    this.isFavoriteLiked(this.track);
  }
});
</script>

<style lang="scss" scoped>
  .track {
    margin: auto;
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
  .fa-heart {
    color: $alvai-yellow;
  }
</style>
