# 《Web前端设计》个人网页项目

本项目是《Web前端设计》课程的个人项目最终成果，，旨在全面展示在课程中所学的各项Web前端技术。它不仅是一个静态的作品集，更是一个采用现代化技术栈（如 Next.js 和 Tailwind CSS）构建的、功能丰富且响应式的Web应用。项目深度整合了课程中的所有练习，并创新性地集成了 QAnything 私有化大模型和 WakaTime API，以提供智能交互和动态数据展示的独特体验。

## 项目简介

该项目核心是一个个人作品集与课程练习的在线展示平台。它清晰地展示了从基础的 HTML、CSS、JavaScript 练习，到使用 React 和 Next.js 进行高级组件化开发的学习路径和成果。项目整体设计追求简洁、专业和现代化，极度注重用户在不同设备上的访问体验、代码的可读性与长期可维护性。

![课程作业运行截图](./CUTTING/1.jpg)

## ✨ 功能特性

- **全面的课程练习展示**：系统化地集成了从HTML基础到JavaScript高级应用的全部课程作业。
- **现代化技术栈**：采用 Next.js、React 和 Tailwind CSS，保证了项目的高性能和开发效率。
- **智能助手集成**：通过API集成了QAnything大模型，提供了一个可以进行项目问答和技术交流的智能聊天机器人。
- **动态编码统计**：集成WakaTime API，在页脚实时展示开发者的编码活动统计，增加了项目的个性化和趣味性。
- **完全响应式设计**：确保在桌面、平板和手机等不同尺寸的设备上都能获得完美的视觉和交互体验。

## 🛠️ 技术栈

- **核心框架**: Next.js, React
- **样式方案**: Tailwind CSS
- **API 集成**: QAnything API, WakaTime API
- **开发语言**: JavaScript (ES6+)
- **包管理器**: npm

## 🤖 QAnything 集成

### 集成路径选择

考虑到项目的静态化特性和 Next.js 的强大功能，我们选择通过**API调用**的方式集成 QAnything，而不是直接嵌入 HTML 页面。具体原因如下：

*   **前后端分离**：API 调用方式更符合现代 Web 开发的前后端分离思想，使前端专注于 UI/UX，后端专注于业务逻辑。
*   **灵活性与可扩展性**：通过 API，我们可以更灵活地处理和展示 QAnything 返回的数据，例如进行格式化、缓存或与其他数据源结合。
*   **性能优化**：Next.js 的服务端渲染（SSR）和静态站点生成（SSG）可以与 API 调用良好结合，在构建时或请求时获取数据，从而优化页面加载性能。

### 实现细节

我们在 `src/app/layout.js` 中为 QAnything 聊天机器人创建了一个侧边栏容器，并通过一个独立的组件来处理与 QAnything API 的交互。该组件负责发送用户输入、接收和展示机器人的回复。


![课程作业运行截图](./CUTTING/2.jpg)

## 📊 WakaTime API 集成

为了动态展示个人的编码活动，项目集成了 WakaTime API。通过该 API，我们可以获取总编码时长等统计数据，并将其展示在页脚。

### 实现方法

1.  **创建 Cloudflare Worker**：为了安全地在前端调用 WakaTime API（避免暴露 API Key），我们创建了一个 Cloudflare Worker 作为代理。该 Worker 负责接收前端请求，然后携带 API Key 向 WakaTime API 发送请求，并将结果返回给前端。
2.  **前端组件**：在 `src/components/Footer.js` 组件中，我们使用 `useEffect` Hook 在组件加载时异步请求 Cloudflare Worker，获取编码时长数据，并使用 `useState` Hook 更新到界面上。

**WakaTime API 集成与展示截图**


![课程作业运行截图](./CUTTING/3.jpg)

## Next.js 项目结构

项目采用 Next.js 的 App Router 模式，结构清晰、易于维护。
