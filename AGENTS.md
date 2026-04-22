# AGENTS.md

## Project Overview

**sodagreen.me** — 苏打绿乐团（Sodagreen）粉丝主页。作为根域名 `sodagreen.me` 的落地页，这是一个亮点展示页面，面向所有设备（桌面、平板、手机）做响应式适配。

## Core Requirements

### 1. 随机歌词 ✅
- 页面每次加载时随机展示一句苏打绿的歌词
- 32 条歌词数据集，每条包含歌词文字 + 歌名
- 歌词使用霞鹜文楷字体（CDN），歌名使用系统宋体
- 支持换行显示，简繁双语

### 2. 全屏背景图 ✅
- 响应式加载：移动端 960px 压缩版（146KB），桌面端 2048px 原图（610KB）
- 亮色模式叠加白色蒙层，暗色模式叠加深色蒙层
- 图片加载前显示渐变色 fallback
- 图片由 Astro 自动优化和 hash

### 3. 人物 LOGO ⏳
- 用户将提供的苏打绿成员趣味 LOGO 图片
- 需预留图片资源位，展示方式待定（可能为横向排列或悬浮动画）

### 4. 项目卡片（重点）✅
- 展示用户做过的与苏打绿相关的项目
- 每张卡片包含：图标、标题、简述、域名链接、分类标签
- 卡片 hover 上浮效果 + 主题色边框
- 分类筛选 tab（全部 / 资料 / 互动 / 自媒体）
- 超过 6 个项目时支持展开/收起
- 响应式布局：桌面双列、移动端单列

### 5. 外部链接 ✅
- 三组链接：苏打绿 aka 鱼丁糸、吴青峰、二十年一刻巡回演唱会
- 每组包含官网、微博、Facebook、Instagram、YouTube、小红书、Bilibili 等
- 使用品牌 SVG 图标 + 文字 + 右上箭头
- hover 时主题色高亮

### 6. 简繁切换 ✅
- 右上角地球图标按钮，点击切换
- 默认繁体中文（zh-Hant）
- 全站文案简繁双语（标题、歌词、卡片、链接等）
- 偏好持久化到 localStorage

### 7. 明暗模式 ✅
- 右上角图标按钮，三档循环：auto（显示器）/ light（太阳）/ dark（月亮）
- 默认跟随系统（auto）
- Tailwind CSS class-based dark mode
- 防止 FOUC 的内联初始化脚本
- 偏好持久化到 localStorage，auto 模式监听系统变化

### 8. Favicon ✅
- SVG 矢量 favicon：四个苏打气泡（粉/绿/红/蓝），透明背景
- 32x32 PNG fallback
- 180x180 Apple Touch Icon（浅紫底色版本）

## Technical Notes

- **技术栈**：Astro + Tailwind CSS v4
- **页面标题**：蘇打綠 | Sodagreen
- **主题色**：#18794E（绿），次主题色：rgba(16,185,129,0.14)
- **响应式设计**：mobile-first，所有设备适配
- **性能优先**：背景图响应式加载、字体 CDN + swap
- **纯静态页面**：无需后端，可部署到任意静态托管服务
- **语言**：中文为主，默认繁体，可切简体
- **外部字体**：霞鹜文楷（歌词）、Space Grotesk（品牌英文）

## Project Structure

```
sodagreen.me/
├── public/
│   ├── favicon.svg
│   ├── favicon-apple.svg
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   └── images/
│       ├── bg.jpg
│       └── podcast-icon.png
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── components/
│   │   └── ProjectCard.astro
│   ├── data/
│   │   ├── projects.ts      # 项目数据（key, icon, url, category）
│   │   ├── i18n.ts           # 简繁翻译（歌词、项目文案、链接文字）
│   │   ├── links.ts          # 外部链接数据
│   │   └── icons.ts          # SVG 图标集合
│   ├── images/
│   │   ├── bg.jpg            # 桌面端背景图
│   │   └── bg-mobile.jpg     # 移动端背景图
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Commands

- `npm run dev` — 启动开发服务器（端口 5353）
- `npm run build` — 构建生产版本
- `npm run preview` — 预览生产构建

## Deployment Status

构建成功，可部署。待办：
- [ ] 人物 LOGO（等用户提供图片）
- [ ] Footer 页脚（可选）
- [ ] SEO meta tags（可选）
- [ ] 移动端细节测试
