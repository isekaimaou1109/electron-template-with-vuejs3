<script setup>
import { ref } from "vue"
import { useI18n } from "vue-i18n"

import { useGlobal } from "@/stores/global"

let g = useGlobal()
let { t, locale } = useI18n()

let msg = ref("welcome to about component")
function changeLocale(newLang) {
  locale.value = newLang
}
</script>

<template>
  <h2 class="blue">Blue color</h2>
  <h3>{{ msg }}</h3>
  <h3>{{ t("messages.hello", ["Toni"]) }}</h3>
  <h1>Example name: {{ g.name }}</h1>
  <h1>Count: {{ g.count }} and {{ g.doubleCount }}</h1>
  <button @click="g.increment">Increment</button>
  <button @click="() => changeLocale('de')">Language: Deutsch</button>
  <button @click="() => changeLocale('us')">Language: English</button>
</template>

<style scoped>
.blue {
  color: blue;
}
</style>
