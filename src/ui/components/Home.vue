<script setup>
import { ref } from "vue"

let msg = ref("welcome to home component")
</script>

<template>
  <h2 class="red">red color</h2>
  <h3>{{ msg }}</h3>
</template>

<style scoped>
.red {
  color: red;
}
</style>
