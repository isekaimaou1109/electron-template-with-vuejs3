import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@components/App.vue";
import { useGlobal } from "@stores/global";

describe("increment", () => {
  const app = createApp(App);
  app.use(createPinia());

  let globalStore = useGlobal();

  test("increments the current count by 1", () => {
    globalStore.increment();
    expect(globalStore.count).toBe(1);
  });
});
