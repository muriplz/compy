<script setup>

import DarkModeSwitch from "@/components/DarkModeSwitch.vue";
</script>

<template>
  <div class="header">
    <DarkModeSwitch/>
    <div class="spacer1"></div>

    <h1 class="title">Cholas</h1>

    <div class="spacer2"></div>
  </div>
</template>


<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.spacer1 {
  flex-grow: 0.7; /* The first spacer will grow to take up space */
}

.spacer2 {
  flex-grow: 1; /* The first spacer will grow to take up space */
}

.title {
  font-size: 42px;
  text-align: center;
  user-select: none;
  font-family: 'Aladin', cursive;
  flex-grow: 0; /* Prevents the title from growing */
  flex-shrink: 0; /* Prevents the title from shrinking */
  margin: 0; /* Ensures no extra space around the title */
}

.spacer:last-child {
  flex-grow: 2; /* The second spacer will take up twice as much space as the button and the first spacer combined */
}
</style>

