import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useGlobal = defineStore(
  "global",
  () => {
    const count = ref(0);
    const name = ref("Eduardo");
    const doubleCount = computed(() => count.value * 2);
    function increment() {
      count.value += 1;
    }

    return { count, name, doubleCount, increment };
  },
  {
    persist: true,
    paths: ["count", "name", "doubleCount"]
  }
);
