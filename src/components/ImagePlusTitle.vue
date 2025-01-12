<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  src: String,
  showTitle: {
    type: Boolean,
    default: true
  }
});

const titleClass = computed(() => {
  return props.showTitle ? '' : 'hidden-title';
});
</script>

<template>
  <div class="image-container">
    <p :class="titleClass" class="image-title">{{ props.title }}</p>
    <img :src="props.src" alt="Image">
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hidden-title {
  color: var(--color-background);
}

img {
  max-width: 250px;
  width: auto;
  height: 100%;
}

.image-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

@media (max-width: 800px) {
  img {
    max-width: 80vw;
    margin-bottom: 20px;
  }
}
</style>