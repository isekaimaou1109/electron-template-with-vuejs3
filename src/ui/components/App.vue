<script setup></script>

<template>
  <h1>LINK:</h1>

  <RouterLink to="/">Home Link</RouterLink><br />
  <RouterLink to="/about">About Link</RouterLink>

  <RouterView></RouterView>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
