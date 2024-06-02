<template>
  <div class="video-container">
    <video v-if="isVisible" ref="videoPlayer" :src="src" @ended="restartVideo" controls controlsList="nodownload">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  props: ['src'],
  data() {
    return {
      isVisible: false,
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            this.isVisible = true;
            observer.disconnect();
          }
        },
        {
          rootMargin: "100px"
        }
    );
    observer.observe(this.$el);
  },
  methods: {
    restartVideo() {
      this.$refs.videoPlayer.currentTime = 0;
    }
  }
}
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

video {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
