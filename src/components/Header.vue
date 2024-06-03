<script setup>

import DarkModeSwitch from "@/components/DarkModeSwitch.vue";
</script>

<template>
  <div class="header">
    <DarkModeSwitch/>
    <div class="spacer1"></div>

    <h1 class="title">Sancho Vegard</h1>

    <div class="spacer2"></div>
  </div>
</template>


<style scoped>
@import url(https://fonts.bunny.net/css?family=allerta-stencil:400);

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

.spacer1 {
  flex-grow: 0.75;
}

.spacer2 {
  flex-grow: 1;
}

.title {
  font-size: 7vw;
  text-align: center;
  user-select: none;
  font-family: 'Allerta Stencil', sans-serif;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0;
}
</style>

