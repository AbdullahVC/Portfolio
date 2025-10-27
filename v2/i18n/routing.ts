import { defineRouting } from "next-intl/routing";

export default defineRouting({
  locales: ["en", "tr", "de"],
  defaultLocale: "tr",
  localePrefix: "as-needed",
});
