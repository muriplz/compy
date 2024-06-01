<template>
  <div class="video-container">
    <h2 class="title" v-show="showTitle">{{ title }}</h2>
    <video ref="videoPlayer" :src="src" @ended="restartVideo" @play="onPlay" controls>
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  props: ['title', 'src'],
  data() {
    return {
      volume: 0.5,
      showTitle: true
    }
  },
  mounted() {
    this.showTitleTemporarily();
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
    },
    showTitleTemporarily() {
      this.showTitle = true;
      setTimeout(() => {
        this.showTitle = false;
      }, 2000);
    },
    onPlay() {
      this.showTitle = true;
      setTimeout(() => {
        this.showTitle = false;
      }, 1500);
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

.title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  transition: opacity 1.5s ease;
}

video {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
