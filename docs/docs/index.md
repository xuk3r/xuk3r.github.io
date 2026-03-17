---
title: 介绍
order: 1
---

# LBChart 介绍

`LBChart` 是一套面向金融行情场景的**跨端技术图表引擎**。

以 C++ 作为核心实现，通过统一能力抽象与平台适配，支持在多端一致地交付复杂图表功能。目前已经完成手机客户端、桌面端客户端替换，并已上线发布。

## 核心价值

- 解决图表功能重复开发的问题，极大提高了图表相关业务开发效率。
- 功能多端统一，通过配置控制不同平台功能及特性。
- 统一渲染逻辑，降低多端重复开发成本。
- 统一交互模型，减少平台行为差异。

## 架构示意

```
C++ Core Engine
├── iOS Adapter      → iOS App
├── Android Adapter  → Android App
├── Desktop Adapter  → Desktop App
└── Web Adapter      → Web Browser
```

## 快速入口

- [快速开始](/docs/getting-started) — 了解如何集成 LBChart
- [功能能力](/docs/features) — 查看内置指标与画线工具
- [平台支持](/docs/platforms) — 各平台集成说明
- [路线图](/docs/roadmap) — 版本计划与未来规划
