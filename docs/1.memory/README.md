# 1. 内存管理

堆区是如何分配的？

如图所示：

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

