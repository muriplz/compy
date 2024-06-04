<script setup>

</script>

<template>
  <div class="contact-me">
    <h2 class="title">Contact Me</h2>
    <div class="content">
      <p>
        If you have any questions or would like to get in touch, feel free to send me an email at sanchosteffensen@gmail.com
      </p>
    </div>
  </div>
</template>

<style scoped>
.contact-me {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: auto;
}
.title {
  font-family: 'Alumni Sans Inline One', display, serif;
  font-size: 38px;
  justify-content: center;
}

p {
  padding: 10px;
  justify-content: center;
}

.content {
  background-color: var(--color-background-mute);
  border: 1px solid var(--color-text);
  border-radius: 10px;
}
</style>