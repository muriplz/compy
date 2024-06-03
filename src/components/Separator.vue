<template>
  <div class="separator"></div>
</template>

<script>
export default {
  name: "Separator"
}
</script>

<style scoped>
.separator {
  height: 2px; /* Sets the height of the separator line */
  width: 80%; /* Sets the width to 40% of the parent container */
  background-color: var(--color-background-mute); /* Uses CSS variable for color */
  margin: 20px auto; /* Centers the separator horizontally and adds vertical spacing */
}
</style>
