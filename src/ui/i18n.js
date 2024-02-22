import { createI18n } from "vue-i18n";

import de from "@/locales/de";
import us from "@/locales/us";

export default createI18n({
  locale: "us",
  fallbackLocale: "de",
  messages: { de, us },
  legacy: false
});
