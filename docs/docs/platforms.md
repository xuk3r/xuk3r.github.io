---
title: 平台支持
order: 4
---

# 平台支持

LBChart 基于 C++ 核心实现，通过平台适配层在不同终端复用同一套图表能力。

## 覆盖范围

| 平台 | 状态 | 当前进展 | 说明 |
| --- | --- | --- | --- |
| iOS | ✅ 已上线 | 客户端替换完成 | 支持绘制、交互、主题、配置 |
| Android | ✅ 已上线 | 客户端替换完成 | 支持绘制、交互、主题、配置 |
| Desktop | ✅ 已上线 | 客户端替换完成 | 支持绘制、交互、主题、配置 |
| Web | ✅ 支持 | 可运行于现代浏览器 | 支持图表展示与交互能力 |

## iOS 集成

### 通过 CocoaPods

```ruby
# Podfile
source 'https://cdn.cocoapods.org/'
platform :ios, '13.0'

target 'YourApp' do
  pod 'LBChart', '~> 1.0'
end
```

### Swift 示例

```swift
import LBChart

class ChartViewController: UIViewController {
    private var chartView: LBChartView!

    override func viewDidLoad() {
        super.viewDidLoad()
        chartView = LBChartView(frame: view.bounds)
        chartView.chartType = .candlestick
        chartView.theme = .dark
        view.addSubview(chartView)

        // 加载数据
        chartView.loadData(klineData)
    }
}
```

## Android 集成

### Gradle 依赖

```groovy
// build.gradle
dependencies {
    implementation 'com.longbridge:lbcharts:1.0.0'
}
```

### Kotlin 示例

```kotlin
import com.longbridge.lbcharts.LBChartView
import com.longbridge.lbcharts.ChartType
import com.longbridge.lbcharts.Theme

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val chartView = LBChartView(this).apply {
            chartType = ChartType.CANDLESTICK
            theme = Theme.DARK
            loadData(klineData)
        }
        setContentView(chartView)
    }
}
```

## Desktop 集成

基于 Qt 的桌面端集成：

```cpp
#include <lbcharts/lbcharts.h>
#include <QApplication>

int main(int argc, char* argv[]) {
    QApplication app(argc, argv);

    auto* chartWidget = new LBChart::QtWidget();
    chartWidget->setChartType(LBChart::ChartType::Candlestick);
    chartWidget->setTheme(LBChart::Theme::Dark);
    chartWidget->resize(1200, 800);
    chartWidget->show();

    return app.exec();
}
```

## Web 集成

通过 WebAssembly 在浏览器中运行：

```html
<!DOCTYPE html>
<html>
<head>
  <script src="lbcharts.js"></script>
</head>
<body>
  <canvas id="chart" width="1200" height="600"></canvas>
  <script>
    LBChart.init().then(() => {
      const chart = new LBChart.Chart('chart');
      chart.setType('candlestick');
      chart.setTheme('dark');
      chart.loadData(klineData);
    });
  </script>
</body>
</html>
```

## 统一能力

- **统一渲染逻辑** — 降低多端重复开发成本
- **统一交互模型** — 减少平台行为差异
- **统一配置入口** — 按端控制功能特性
