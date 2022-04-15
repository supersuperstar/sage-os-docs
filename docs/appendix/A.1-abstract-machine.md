# A.1 Abstract Machine 接口分析

Abstract machine 这个实验平台提供了 5 个抽象层接口，分别是 `TRM` （图灵机）、 `IOE` （IO 设备驱动）、 `CTE` （中断处理与上下文切换）、 `VME` （虚拟内存处理）以及 `MPE` （多处理器）。

```
.
├── qemu
│   ├── boot
│   │   ├── bootblock.o
│   │   ├── genboot.py
│   │   ├── main.c
│   │   ├── Makefile
│   │   └── start.S
│   ├── cte.c
│   ├── ioe.c
│   ├── mpe.c
│   ├── start32.S
│   ├── start64.S
│   ├── trap32.S
│   ├── trap64.S
│   ├── trm.c
│   ├── vme.c
│   └── x86-qemu.h
└── x86.h
```

## TRE

tbd

## IOE

tbd

## CTE

tbd

## VME

tbd

## MPE

tbd
