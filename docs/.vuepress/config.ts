import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  lang: "zh-CN",
  title: "SageOS 文档",

  base: "/sage-os-docs/",

  head: [],

  themeConfig,
});
