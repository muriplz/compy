<template>
  <div class="video-entry">
    <h2 class="title">Some Honorable Mentions
    </h2>
    <div class="media">
      <ImagePlusTitle title="Illustrations" src="/honorable/illustrator.png"/>
      <ImagePlusTitle title="Product Photography" src="/honorable/product.png"/>
      <ImagePlusTitle title="Portraits" src="/honorable/portrait.jpg"/>
    </div>
    <div class="media" style="margin-top: 25px; gap: 14px;">
      <ImagePlusTitle title="title" src="/honorable/street1.webp" :show-title="false"/>
      <ImagePlusTitle title="Street Photography" src="/honorable/street3.jpg"/>
      <ImagePlusTitle title="title" src="/honorable/street2.jpg" :show-title="false"/>

    </div>

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


.title {
  align-self: flex-start;
}

.media {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 60vw;
}

.media img {
  max-width: 32%;
  width: 100%;
  align-self: center;
}


@media(max-width: 800px) {

  .title {
    font-size: 28px;
  }

  .media {
    flex-direction: column;
  }

  .media img {
    max-width: 100%;
    margin-bottom: 10px;
  }
}

</style>

<script setup>
import Separator from "@/components/Separator.vue";
import ImagePlusTitle from "@/components/ImagePlusTitle.vue";
</script>