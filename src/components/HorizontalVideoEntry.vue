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
</template>

<style scoped>
@import url(https://fonts.bunny.net/css?family=alumni-sans-inline-one:400);

.video-entry {
  width: 100%;
  max-width: 800px;
  margin: 20px auto auto;
}
.title {
  font-family: 'Alumni Sans Inline One', display, serif;
  font-size: 38px;
}

.description {
  font-size: 22px;
  margin: 10px 0;
}

.title, .description {
  align-self: flex-start;
}

.video-player {
  max-width: 800px;
  width: 100%;
  align-self: center;
}

</style>

