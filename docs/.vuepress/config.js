module.exports = {
  // 站点配置
  title: "SageOS 文档",
  lang: "zh-CN",
  base: "/sage-os-docs/",

  // 主题和它的配置
  theme: "@vuepress/theme-default",

  // 插件
  plugins: ["@vuepress/plugin-shiki"],

  themeConfig: {
    docsRepo: "https://github.com/sage-os-team/sage-os-docs",
    docsBranch: "master",
    docsDir: "docs",
    editLinkText: "编辑此页面",
    editLinkPattern: ":repo/edit/:branch/:path",
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      {
        text: "0. SageOS 概述",
        link: "/0.overview/",
        children: [
          "/0.overview/0.1-structure.md",
          "/0.overview/0.2-startup.md",
          "/0.overview/0.3-test-and-presentation.md",
        ],
      },
      {
        text: "1. 内存管理",
        link: "/1.memory/",
        children: [
          "/1.memory/1.1-physical-memory.md",
          "/1.memory/1.2-virtual-memory.md",
        ],
      },
      {
        text: "2. 进程管理",
        link: "/2.process/",
        children: [
          "/2.process/2.1-spinlock-and-semaphore.md",
          "/2.process/2.2-data-structure-design.md",
          "/2.process/2.3-interrupt.md",
          "/2.process/2.4-schedule.md",
        ],
      },
      {
        text: "3. 文件系统",
        link: "/3.filesystem/",
        children: [
          "/3.filesystem/3.1-implement.md",
          "/3.filesystem/3.2-vfs.md",
        ],
      },
      {
        text: "4. 库和应用程序",
        link: "/4.apps/",
        children: ["/4.apps/4.1-klib.md", "/4.apps/4.2-shell.md"],
      },
      {
        text: "附录",
        link: "/appendix/",
        children: [
          "/appendix/A.0 reference.md",
          "/appendix/A.1-abstract-machine.md",
          "/appendix/A.2-xv6.md",
        ],
      },
    ],
  },
};
