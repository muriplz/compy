<script setup>
import {defineProps} from 'vue';
import VideoPlayer from "@/components/VideoPlayer.vue";
import Separator from "@/components/Separator.vue";

// Define props
const props = defineProps({
  title: String,
  src: String,
  description: String,
  containsSlurs: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: ''
  },
});
</script>

<template>
  <div :id="props.id" class="video-entry">
    <h2 class="title">{{ props.title }}</h2>
    <div v-if="props.containsSlurs" class="warning">
      <Warning style="color: #750c0c; margin-bottom: 4px; margin-right: 8px"/>
      <p>"Explicit language in this video"</p>

    </div>
    <VideoPlayer class="video-player" :src="props.src" />
    <p class="description">{{ props.description }}</p>
  </div>
  <Separator/>
</template>

<style scoped>
@import url(https://fonts.bunny.net/css?family=abril-fatface:400);

.video-entry {
  width: 100%;
  max-width: 800px;
  margin: 0 auto auto;
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

.title, .description, .warning {
  align-self: flex-start;
}

.video-player {
  max-width: 800px;
  width: 100%;
  align-self: center;
}

.warning {
  display: flex;
  align-items: center;
}

@media(max-width: 800px) {
  .description {
    font-size: 16px;
  }

  .title {
    font-size: 28px;
  }
}

</style>

