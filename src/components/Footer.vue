<script setup>

</script>

<template>
  <div class="footer">
    <p>
      Made by <a class="github-link" href="http://github.com/MuriPlz">MuriPlz</a> with ❤️
    </p>
  </div>
</template>

<style scoped>
.footer {;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: var(--color-background-mute);
  border-top: 1px solid var(--color-text);
  border-right: 1px solid var(--color-text);
  border-left: 1px solid var(--color-text);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-top: 30px;
}

.github-link {
  color: var(--color-text);
  text-decoration: none;
}

.github-link:hover {
  text-decoration: underline;
}
</style>