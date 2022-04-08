import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  iconPrefix: "iconfont icon-",

  // logo: "/logo.svg",

  repo: "sage-os-team/sage-os",
  docsRepo: "sage-os-team/sage-os-docs",

  docsDir: "/docs",

  docsBranch: "master",

  pure: true,

  // navbar
  // navbar: navbar,
  navbar: navbar,

  // sidebar
  // sidebar: sidebar,
  sidebar: "structure",

  footer: "",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  plugins: {
    blog: false,
    search: {},
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
