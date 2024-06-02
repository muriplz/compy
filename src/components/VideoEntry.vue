<script setup>
import { defineProps } from 'vue';
import VideoPlayer from "@/components/VideoPlayer.vue";

// Define props
const props = defineProps({
  title: String,
  src: String,
  description: String
});
</script>

<template>
  <div class="video-entry">
    <h2 class="title">{{ props.title }}</h2>
    <VideoPlayer class="video-player" :src="props.src" />
    <p class="description">{{ props.description }}</p>
  </div>
  <hr>
</template>

<style scoped>
.video-entry {
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  text-align: center;
}

.video-player {
  margin: 0 auto;
  max-width: 500px;
}

.description {
  font-size: 14px;
  text-align: center;
}
</style>