---
dir:
  link: true
  collapsable: false
---

# 1. 内存管理

目前，内存管理主要是管理 `heap_start` 到 `heap_end` 的一块物理内存区域。如图所示：

```
      heap_end<---+--------------+
                  |   metadata   +--->pool&chunk(pages),etc.
    meta_start<---+--------------+      (for kernel)
                  |              |
                  |              |
                  |              |
                  |     free     |
                  |    spaces    |
                  |  (for user)  |
                  |              |
                  |              |
    heap_start<---+--------------+
```

我们将物理内存划分为页面，并在堆区的末尾存放物理页面管理的元数据。

下面将详细介绍内存管理模块的实现。
