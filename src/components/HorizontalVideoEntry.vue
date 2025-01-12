<script setup>
import { marked } from 'marked';
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
  date: {
    type: String,
    default: ''
  }
});

// Convert description to HTML using marked
const descriptionHtml = marked(props.description, { breaks: true });
</script>

<template>
  <div :id="props.id" class="video-entry">
    <h2 class="title">{{ props.title }}</h2>

    <div class="warning">
      <Warning v-if="props.containsSlurs" style="color: #750c0c; margin-bottom: 4px; margin-right: 8px"/>
      <p v-if="props.containsSlurs">"Explicit language in this video"</p>
      <p style="text-align: right; margin-left: auto">{{ props.date }}</p>
    </div>
    <VideoPlayer class="video-player" :src="props.src" />
    <div class="description" v-html="descriptionHtml"></div>
  </div>
  <Separator/>
</template>

<style scoped>
@import url(https://fonts.bunny.net/css?family=abril-fatface:400);
.title {
  font-family: 'Abril Fatface', display, serif;
  font-size: 38px;
}
.video-entry {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.description {
  font-size: 22px;
  margin: 10px 0 20px;
  text-align: justify;
  width: 100%;
  box-sizing: border-box;
}


.description * {
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  text-align: justify;
  width: 100%;
  box-sizing: border-box;
  white-space: pre-wrap;
}

.title, .description, .warning {
  align-self: flex-start;
  width: 100%; /* Constrain the width */
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

@media (max-width: 800px) {
  .description {
    font-size: 16px;
  }

  .title {
    font-size: 28px;
  }
}


</style>