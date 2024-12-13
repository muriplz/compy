<template>
  <div class="video-entry">
    <h2 class="title">Revyval.Wear - An Upcycling Apparel Project</h2>
    <div class="media">
      <VideoPlayer class="video-player" :src="Utrechtdef241" />
      <img src="@/assets/media/pictu.webp" alt="">
      <VideoPlayer class="video-player" :src="Revyvalshootingdef1" />
    </div>
    <p class="description">Revyval.Wear is a creative initiative that transforms used clothing into unique pieces using embroidery, paintwork, and custom designs. This project combines a variety of skills, fostering personal and professional growth in areas such as:</p>
    <ul class="description star-list">
      <li><strong style="font-weight: bold">Design & Sample Making:</strong> Conceptualizing ideas and bringing them to life.</li>
      <li><strong style="font-weight: bold">Editing & Brand Identity:</strong> Crafting a distinctive visual style for Revyval.</li>
      <li><strong style="font-weight: bold">Communication & Community Building:</strong> Connecting with like-minded individuals and growing a supportive audience.</li>
      <li><strong style="font-weight: bold">Photography & Videography:</strong> Capturing the essence of each piece through visuals.</li>
      <li><strong style="font-weight: bold">Sales, Pricing & Business Skills:</strong> Navigating the entrepreneurial side of the project.</li>
      <li><strong style="font-weight: bold">Programming & Web Development:</strong> Together along with my web admin, fully coded the Revyval website from scratch.</li>
    </ul>
    <p class="description">I thrive on keeping my hands busy and improving with every step of the process. There’s a steady momentum of progress, with each day building on the lessons of the last.</p>

    <p class="description">Feel free to explore the project in more detail:
      <a href="https://revyval.store">
        revyval.store
      </a>
    </p>
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

.title, .description, .warning {
  align-self: flex-start;
}

.media {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.video-player, .media img {
  max-width: 32%;
  width: 100%;
  align-self: center;
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

  .video-player, .media img {
    max-width: 100%;
    margin-bottom: 10px;
  }
}

</style>

<script setup>
import Utrechtdef241 from "@/assets/media/Utrechtdef241.mp4";
import Revyvalshootingdef1 from "@/assets/media/Revyvalshootingdef1.mp4";

import Separator from "@/components/Separator.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
</script>