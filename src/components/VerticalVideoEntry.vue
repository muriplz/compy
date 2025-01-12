<script setup>
import { defineProps } from 'vue';
import VideoPlayer from "@/components/VideoPlayer.vue";
import Separator from "@/components/Separator.vue";

// Define props
const props = defineProps({
  title: String,
  src: String,
  description: String,
  index: Number,
  id: {
    type: String,
    default: ''
  },
  totalEntries: Number,
  date: {
    type: String,
    default: ''
  },
});
</script>

<template>
  <div :id="props.id" class="video-entry" :class="{ 'reverse-layout': props.index % 2 === 0 }">
    <div>
      <p style="text-align: right">{{ props.date }}</p>
      <VideoPlayer class="video-player" :src="props.src" />
    </div>
    <div class="text-content">
      <h2 class="title">{{ props.title }}</h2>
      <p class="description">{{ props.description }}</p>
    </div>
  </div>
  <Separator v-if="props.index === 0 || props.index === 3" />
</template>

<style scoped>
@import url(https://fonts.bunny.net/css?family=abril-fatface:400);

.video-entry {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 20px auto auto;
}

.video-entry.reverse-layout {
  flex-direction: row-reverse;
}

.text-content {
  margin-left: 20px;
  margin-right: 20px;
}

.title {
  font-family: 'Abril Fatface', display, serif;
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
  max-width: 250px;
  width: 100%;
  min-width: 250px;
}

@media(max-width: 800px) {
  .video-entry {
    flex-direction: column;
  }

  .video-entry.reverse-layout {
    flex-direction: column;
  }

  .text-content {
    margin-left: 20px;
    margin-right: 20px;
  }
  .description {
    font-size: 16px;
  }

  .title {
    font-size: 28px;
  }
}
</style>
