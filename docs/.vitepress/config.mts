import { defineConfig } from "vitepress";
import type { UserConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import tailwindcss from "@tailwindcss/vite";

/**
 * https://github.com/jooy2/vitepress-sidebar
 */
const sidebar = generateSidebar([
  {
    scanStartPath: "/docs/",
    rootGroupText: "Introduction",
    collapsed: false,
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    sortMenusByFrontmatterOrder: true,
    includeRootIndexFile: false,
  },
]);

// https://vitepress.dev/reference/site-config
const config: UserConfig = {
  title: "LBCharts",
  base: "/",
  description:
    "跨端行情技术图表引擎，基于 C++ 编写，跨设备、跨平台支持，可运行在 iOS / Android / Desktop / Web 等多种设备和平台。",
  cleanUrls: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.svg",
        media: "(prefers-color-scheme: light)",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/logo-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  themeConfig: {
    logo: {
      light: "/logo.svg",
      dark: "/logo-dark.svg",
    },
    footer: {
      message: `LBCharts is developed by <a href='https://longbridge.com' target='_blank'>Longbridge</a>.`,
      copyright: `
        <a href="http://lbchart.com" target="_blank">lbchart.com</a>
        |
        <a href="/features">功能能力</a>
        |
        <a href="/platforms">平台支持</a>
        |
        <a href="/roadmap">路线图</a>
        |
        <a href="https://github.com/xuk3r" target="_blank">GitHub</a>
      `,
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "快速开始", link: "/docs/getting-started" },
      { text: "功能能力", link: "/docs/features" },
      { text: "平台支持", link: "/docs/platforms" },
      { text: "路线图", link: "/docs/roadmap" },
    ],

    sidebar: sidebar as any,

    socialLinks: null,
    search: {
      provider: "local",
    },
  },
  markdown: {
    defaultHighlightLang: "cpp",
  },
};

export default defineConfig(config);
