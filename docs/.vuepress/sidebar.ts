import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  "",
  {
    text: "0. SageOS 概述",
    link: "/0.overview/",
    prefix: "/0.overview/",
    children: [
      "0.1-structure.md",
      "0.2-startup.md",
      "0.3-test-and-presentation.md",
    ],
  },
  {
    text: "1. 内存管理",
    link: "/1.memory/",
    prefix: "/1.memory/",
    children: ["1.1-physical-memory.md", "1.2-virtual-memory.md"],
  },
  {
    text: "2. 进程管理",
    link: "/2.process/",
    prefix: "/2.process/",
    children: [
      "2.1-spinlock-and-semaphore.md",
      "2.2-data-structure-design.md",
      "2.3-interrupt.md",
      "2.4-schedule.md",
    ],
  },
  {
    text: "3. 文件系统",
    link: "/3.filesystem/",
    prefix: "/3.filesystem/",
    children: ["3.1-implement.md", "3.2-vfs.md"],
  },
  {
    text: "4. 库和应用程序",
    link: "/4.apps/",
    prefix: "/4.apps/",
    children: ["4.1-klib.md", "4.2-shell.md"],
  },
  {
    text: "附录",
    link: "/appendix/",
    prefix: "/appendix/",
    children: ["A.0-reference.md", "A.1-abstract-machine.md", "A.2-xv6.md"],
  },
]);
