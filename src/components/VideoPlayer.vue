<template>
  <div class="video-container">
    <video ref="videoPlayer" :src="src" @ended="restartVideo" controls>
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  props: ['src'],
  data() {
    return {
      volume: 0.5,
    }
  },
  methods: {
    playVideo() {
      this.$refs.videoPlayer.play();
    },
    pauseVideo() {
      this.$refs.videoPlayer.pause();
    },
    changeVolume() {
      this.$refs.videoPlayer.volume = this.volume;
    },
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
