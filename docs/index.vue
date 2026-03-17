<template>
    <div class="banner">
        <h1>LBChart</h1>
        <div class="banner-description">
            自研行情技术分析图表，基于 C++ 编写，跨设备、跨平台支持，<br class="hidden sm:block" />
            可运行在 iOS / Android / Desktop / Web 等多种设备和平台。
        </div>
        <div class="actions">
            <a href="docs/getting-started" class="btn-primary">快速开始</a>
            <a href="docs/features"><BarChart3 /> 功能能力</a>
            <a href="https://longbridge.com/zh-CN/quote/NVDA.US/news" target="_blank"><PlayCircle /> Demo</a>
            <a href="http://lbchart.com" target="_blank"><ExternalLink /> 官网</a>
        </div>
        <div class="version">
            <a href="http://lbchart.com" target="_blank">lbchart.com</a>
        </div>
    </div>
    <div class="features">
        <div class="feature-card">
            <h3>
                <div class="icon bg-blue-500 dark:bg-blue-700">
                    <Smartphone />
                </div>
                <div>跨端、跨平台</div>
            </h3>
            <div>
                一次开发，处处运行。基于 C++ 构建，底层直接面向各平台 GPU 渲染框架编程，减少跨平台对图表本身带来的影响，运行在 iPhone、Android、Desktop、Web。
            </div>
        </div>
        <div class="feature-card">
            <h3>
                <div class="icon bg-green-500 dark:bg-green-700">
                    <Zap />
                </div>
                <div>GPU 渲染引擎</div>
            </h3>
            <div>
                毫秒级渲染，无惧卡顿。单帧渲染可在 2~4ms 内完成，iPhone 12 实测 50 FPS 以上，渲染 5 年日 K 线依然流畅无比。
            </div>
        </div>

        <div class="feature-card">
            <h3>
                <div class="icon bg-red-500 dark:bg-red-700">
                    <BarChart3 />
                </div>
                <div>60+ 技术指标</div>
            </h3>
            <div>
                集成 Navi 指标引擎，支持至少 60 种主流技术指标，兼容富途、通达信、文华语法，支持自定义编写与动态下发指标。
            </div>
        </div>

        <div class="feature-card">
            <h3>
                <div class="icon bg-yellow-500 dark:bg-yellow-700">
                    <PenTool />
                </div>
                <div>丰富画线工具</div>
            </h3>
            <div>
                空间尺、3 线段、黄金分割等多种画线类型，支持画线吸附、编辑、删除和样式切换，交互统一流畅。
            </div>
        </div>

        <div class="feature-card">
            <h3>
                <div class="icon bg-pink-500 dark:bg-pink-700">
                    <Layers />
                </div>
                <div>业务增强功能</div>
            </h3>
            <div>
                内置股票叠加、筹码分布、买卖点、行动点等业务功能，支持多种主题与自定义配色，支持功能开关与灰度发布策略。
            </div>
        </div>

        <div class="feature-card">
            <h3>
                <div class="icon bg-cyan-500 dark:bg-cyan-700">
                    <Settings />
                </div>
                <div>中间业务层</div>
            </h3>
            <div>
                接管繁重业务，接入成本从 2 周降至 3 天。统一多端代码逻辑，通过缓存、API、配置管理实现多端功能无缝同步与自由开关。
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    BarChart3,
    Smartphone,
    Zap,
    PenTool,
    Layers,
    Settings,
    ExternalLink,
    PlayCircle,
} from "lucide-vue-next";
</script>

