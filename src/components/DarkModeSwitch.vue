<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core'
import { watchEffect } from 'vue-demi'

const mode = useColorMode({
  modes: {
    contrast: 'contrast',
    cafe: 'cafe',
  },
})

const {state, next} = useCycleList(['dark', 'light', 'cafe', 'contrast', 'auto'], {initialValue: mode})

watchEffect(() => mode.value = state.value as any)
</script>

<template>
  <button class="tgl-btn" @click="next()">
    <i v-if="state === 'dark'" i-carbon-moon class="align-middle"/>
    <i v-if="state === 'light'" i-carbon-sun class="align-middle"/>
    <i v-if="state === 'cafe'" i-carbon-cafe class="align-middle"/>
    <i v-if="state === 'contrast'" i-carbon-contrast class="align-middle"/>
    <i v-if="state === 'auto'" i-carbon-laptop class="align-middle"/>

    <span class="ml-2 capitalize">{{ state }}</span>
  </button>
</template>

<style>
.tgl-btn {
  user-select: none;
  cursor: pointer;
  background-color: var(--color-text);
  border: none;
  outline: none;
  color: var(--color-background-mute);
  border-bottom: 2px solid var(--color-background-mute);
  text-shadow: 1px 1px 1px var(--color-border);
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
  vertical-align: middle;
  width: 70px; /* Set a fixed width */
  height: 30px; /* Set a fixed height */
  margin-left: 20px;
  margin-right: 20px;
}
</style>