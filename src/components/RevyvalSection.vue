<template>
  <div class="video-entry">
    <h2 class="title">Revyval.Wear - An Upcycling Apparel Project</h2>
    <div class="media">
      <VideoPlayer class="video-player" :src="Utrechtdef241" />
      <img src="@/assets/media/pictu.webp" alt="">
      <div class="stacked-media video-player">
        <p>08.2024</p>
        <VideoPlayer :src="Revyvalshootingdef1" />
      </div>
    </div>
    <p class="description">Revyval is a creative initiative that transforms used
      clothing into unique pieces using embroidery, paintwork,
      and custom designs. This project combines a variety of
      skills, and has had me fostering personal and
      professional growth in areas such as:</p>
    <ul class="description star-list">
      <li><strong style="font-weight: bold">Design & Sample Making</strong></li>
      <li><strong style="font-weight: bold">Editing & Brand Identity</strong></li>
      <li><strong style="font-weight: bold">Communication & Community Building</strong></li>
      <li><strong style="font-weight: bold">Photography & Videography</strong></li>
      <li><strong style="font-weight: bold">Sales, Pricing & Business Skills</strong></li>
      <li><strong style="font-weight: bold">Programming & Web Development</strong></li>
    </ul>
    <p class="description">I thrive on keeping my hands busy and improving with
      every step of the process. Each day builds on the
      lessons of the previous one, creating a steady
      momentum of growth and progress.</p>
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
  margin-bottom: 20px;
}

.description {
  font-size: 22px;
  margin: 10px 0 20px;
  text-align: justify;
}

.title, .description {
  align-self: flex-start;
}

.media {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.video-player, .media img {
  max-width: 30%;
  min-width: 30%;
  width: 100%;
}

.stacked-media {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30%;
  width: 100%;
}

.stacked-media p {
  text-align: right;
  width: 100%;
}

.star-list {
  list-style-type: none;
  padding: 0;
}

.star-list li {
  position: relative;
  padding-left: 20px;
}

.star-list li::before {
  content: '★';
  position: absolute;
  left: -4px;
  font-size: 12px;
  line-height: 1;
  top: 0.6rem;
}

@media(max-width: 800px) {
  .description {
    font-size: 16px;
  }

  .title {
    font-size: 28px;
  }

  .media {
    flex-direction: column;
  }

  .video-player, .media img, .stacked-media {
    max-width: 100%;
    margin-bottom: 10px;
  }
}
</style>

<script setup>
import Utrechtdef241 from "@/assets/media/rev1.mp4";
import Revyvalshootingdef1 from "@/assets/media/rev2.mp4";

import Separator from "@/components/Separator.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
</script>