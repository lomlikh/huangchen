# 《Web前端设计》个人网页项目

本项目是《Web前端设计》课程的个人项目，旨在展示通过 Next.js 和 Tailwind CSS 构建的现代化、响应式的 Web 应用。项目整合了课程中的各项练习，并集成了 QAnything 和 WakaTime API，以提供更丰富的功能和数据展示。

## 项目简介

该项目是一个个人作品集和课程练习的展示平台。它不仅包括了 HTML、CSS、JavaScript 等基础练习，还展示了使用 React 和 Next.js 进行组件化开发的成果。项目整体设计简洁、现代，注重用户体验和代码质量。

![课程作业运行截图](./CUTTING/1.png)

## QAnything 集成

### 集成路径选择

考虑到项目的静态化特性和 Next.js 的强大功能，我们选择通过**API调用**的方式集成 QAnything，而不是直接嵌入 HTML 页面。具体原因如下：

*   **前后端分离**：API 调用方式更符合现代 Web 开发的前后端分离思想，使前端专注于 UI/UX，后端专注于业务逻辑。
*   **灵活性与可扩展性**：通过 API，我们可以更灵活地处理和展示 QAnything 返回的数据，例如进行格式化、缓存或与其他数据源结合。
*   **性能优化**：Next.js 的服务端渲染（SSR）和静态站点生成（SSG）可以与 API 调用良好结合，在构建时或请求时获取数据，从而优化页面加载性能。

### 实现细节

我们在 `src/app/layout.js` 中为 QAnything 聊天机器人创建了一个侧边栏容器，并通过一个独立的组件来处理与 QAnything API 的交互。该组件负责发送用户输入、接收和展示机器人的回复。

**QAnything 运行截图**


![课程作业运行截图](./CUTTING/2.png)

## WakaTime API 集成

为了动态展示个人的编码活动，项目集成了 WakaTime API。通过该 API，我们可以获取总编码时长等统计数据，并将其展示在页脚。

### 实现方法

1.  **创建 Cloudflare Worker**：为了安全地在前端调用 WakaTime API（避免暴露 API Key），我们创建了一个 Cloudflare Worker 作为代理。该 Worker 负责接收前端请求，然后携带 API Key 向 WakaTime API 发送请求，并将结果返回给前端。
2.  **前端组件**：在 `src/components/Footer.js` 组件中，我们使用 `useEffect` Hook 在组件加载时异步请求 Cloudflare Worker，获取编码时长数据，并使用 `useState` Hook 更新到界面上。

**WakaTime API 集成与展示截图**


![课程作业运行截图](./CUTTING/3.png)

## Next.js 项目结构

项目采用 Next.js 的 App Router 模式，结构清晰、易于维护。
