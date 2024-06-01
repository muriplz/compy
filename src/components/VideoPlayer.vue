<template>
  <div class="video-container">
    <h2>{{ title }}</h2>
    <video ref="videoPlayer" :src="src" @ended="restartVideo" controls>
      Your browser does not support the video tag.
    </video>
    <div class="controls">
      <button @click="playVideo">Play</button>
      <button @click="pauseVideo">Pause</button>
      <input type="range" min="0" max="1" step="0.1" v-model="volume" @input="changeVolume">
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'src'],
  data() {
    return {
      volume: 0.5
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
      this.playVideo();
    }
  }
}
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

button {
  background: var(--color-heading);
  color: var(--color-background);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: var(--color-text);
}

input[type="range"] {
  width: 100%;
}
</style>