<script setup>
import { defineProps } from 'vue';
import VideoPlayer from "@/components/VideoPlayer.vue";
import Separator from "@/components/Separator.vue";

// Define props
const props = defineProps({
  title: String,
  src: String,
  description: String
});
</script>

<template>
  <div class="video-entry">
    <VideoPlayer class="video-player" :src="props.src" />
    <div class="text-content">
      <h2 class="title">{{ props.title }}</h2>
      <p class="description">{{ props.description }}</p>
    </div>
  </div>
  <Separator/>
</template>

<style scoped>
@import url(https://fonts.bunny.net/css?family=alumni-sans-inline-one:400);

.video-entry {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 20px auto auto;
}

.text-content {
  margin-left: 20px;
}

.title {
  font-family: 'Alumni Sans Inline One', display, serif;
  font-size: 38px;
}

.description {
  font-size: 22px;
  margin: 10px 0 20px;
  text-align: justify;
}

.title, .description {
  align-self: flex-start;
}

.video-player {
  max-width: 300px;
  width: 100%;
  min-width: 300px;
}

</style>