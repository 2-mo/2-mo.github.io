import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Tiu Mo's Blog",
  description: "Tiu Mo's Blog & Tiu Mo's Blog",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
