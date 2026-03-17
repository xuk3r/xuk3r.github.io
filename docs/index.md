---
layout: home
---

<script setup>
import Index from './index.vue'
</script>

<Index />

## 简单直观的 API

通过统一的配置接口，快速集成跨端图表能力。C++ 核心引擎，一套代码多端运行。

```cpp
// 初始化图表
auto chart = LBChart::create();
chart->setType(ChartType::Candlestick);
chart->setTheme(Theme::Dark);
chart->loadData(klineData);
chart->render();
```

## 安装与集成

LBChart 以 C++ 库的形式提供，支持 CMake 集成：

```cmake
# CMakeLists.txt
find_package(LBChart REQUIRED)
target_link_libraries(your_target PRIVATE LBChart::LBChart)
```

各平台集成详情请参考 [快速开始](/docs/getting-started) 文档。

## 平台覆盖

| 平台 | 状态 | 说明 |
| --- | --- | --- |
| iOS | ✅ 已上线 | 客户端替换完成 |
| Android | ✅ 已上线 | 客户端替换完成 |
| Desktop | ✅ 已上线 | 桌面端替换完成 |
| Web | ✅ 支持 | 可运行于现代浏览器 |
