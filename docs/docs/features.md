---
title: 功能能力
order: 3
---

# 功能能力

## 指标能力

内置至少 **60+** 种常用技术指标，支持参数配置与多窗口联动展示。

### 趋势类指标

| 指标 | 说明 |
| --- | --- |
| MA | 移动平均线 |
| EMA | 指数移动平均 |
| BOLL | 布林带 |
| SAR | 抛物线转向 |

### 动量类指标

| 指标 | 说明 |
| --- | --- |
| MACD | 指数平滑异同移动平均线 |
| KDJ | 随机指标 |
| RSI | 相对强弱指数 |
| CCI | 顺势指标 |
| WR | 威廉指标 |

### 成交量类指标

| 指标 | 说明 |
| --- | --- |
| VOL | 成交量 |
| OBV | 能量潮 |
| VRSI | 量相对强弱指数 |

### 使用示例

```cpp
// 添加指标
chart->addIndicator(LBCharts::Indicator::MACD, {
    .fastPeriod = 12,
    .slowPeriod = 26,
    .signalPeriod = 9,
});

chart->addIndicator(LBCharts::Indicator::KDJ, {
    .n = 9,
    .m1 = 3,
    .m2 = 3,
});
```

## 画线与分析工具

丰富的画线类型，支持画线吸附、编辑、删除、样式切换：

- **趋势线** — 直线、射线、延伸线
- **形态工具** — 矩形、平行通道、楔形
- **量测工具** — 空间尺、价格尺、3 线段
- **斐波那契** — 黄金分割、斐波那契弧线、扇形
- **图形标注** — 箭头、文字标注

```cpp
// 添加画线工具
chart->setDrawingTool(LBCharts::DrawingTool::TrendLine);

// 监听画线完成事件
chart->onDrawingComplete([](const LBCharts::Drawing& drawing) {
    // 处理画线结果
});
```

## 业务增强功能

| 功能 | 状态 | 说明 |
| --- | --- | --- |
| K 线 / 分时图 | ✅ | 已稳定运行 |
| 技术指标系统 | ✅ | 已覆盖主流指标 |
| 画线系统 | ✅ | 多类型画线可用 |
| 主题系统 | ✅ | 支持深浅色与自定义 |
| 股票叠加 | ✅ | 支持多股对比 |
| 筹码分布 | ✅ | 实时筹码分布图 |
| 买卖点 | ✅ | 交易信号标注 |
| 行动点 | ✅ | 重要事件标记 |
| 指标市场扩展 | 🟡 规划中 | 后续按业务演进 |

## 主题系统

```cpp
// 切换主题
chart->setTheme(LBCharts::Theme::Dark);   // 深色主题
chart->setTheme(LBCharts::Theme::Light);  // 浅色主题

// 自定义主题
LBCharts::ThemeConfig custom;
custom.upColor = "#ef4444";    // 上涨颜色
custom.downColor = "#22c55e";  // 下跌颜色
custom.background = "#1a1a2e"; // 背景色
chart->setCustomTheme(custom);
```
