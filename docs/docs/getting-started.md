---
title: 快速开始
order: 2
---

# 快速开始

本文介绍如何将 LBCharts 集成到你的项目中。

## 环境要求

- C++17 或更高版本
- CMake 3.16+
- 各平台 SDK（iOS / Android / Qt / Emscripten）

## 安装

### CMake 集成

```cmake
# CMakeLists.txt
cmake_minimum_required(VERSION 3.16)
project(MyApp)

find_package(LBCharts REQUIRED)

add_executable(MyApp main.cpp)
target_link_libraries(MyApp PRIVATE LBCharts::LBCharts)
```

### iOS

通过 CocoaPods 集成：

```ruby
# Podfile
pod 'LBCharts', '~> 1.0'
```

### Android

通过 Gradle 集成：

```groovy
// build.gradle
dependencies {
    implementation 'com.longbridge:lbcharts:1.0.0'
}
```

## 第一个图表

以下是一个简单的 K 线图示例：

```cpp
#include <lbcharts/lbcharts.h>

int main() {
    // 创建图表实例
    auto chart = LBCharts::Chart::create();

    // 配置图表类型
    chart->setChartType(LBCharts::ChartType::Candlestick);

    // 设置主题
    chart->setTheme(LBCharts::Theme::Dark);

    // 加载数据
    auto data = loadKLineData(); // 你的数据加载逻辑
    chart->setData(data);

    // 添加指标
    chart->addIndicator(LBCharts::Indicator::MACD);
    chart->addIndicator(LBCharts::Indicator::RSI);

    // 渲染
    chart->render();

    return 0;
}
```

## 下一步

- 查看 [功能能力](/docs/features) 了解全部内置指标
- 查看 [平台支持](/docs/platforms) 了解各平台集成细节
