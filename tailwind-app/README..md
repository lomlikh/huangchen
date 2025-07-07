# 《Web前端设计》个人网页项目

本项目是《Web前端设计》课程的个人项目，旨在展示通过 Next.js 和 Tailwind CSS 构建的现代化、响应式的 Web 应用。项目整合了课程中的各项练习，并集成了 QAnything 和 WakaTime API，以提供更丰富的功能和数据展示。

![项目截图](/1.png)

## ✨ 功能特性

- **响应式设计**：使用 Tailwind CSS 构建，完美适配桌面和移动设备。
- **组件化开发**：基于 React 和 Next.js，将 UI 拆分为可复用的组件。
- **旧作业集成**：通过 JSON 文件和动态组件，优雅地展示过往的课程练习。
- **QAnything 集成**：通过 API 调用，在页面侧边栏实现了一个智能聊天机器人。
- **WakaTime API 集成**：在页脚动态展示个人 WakaTime 编码时长统计。

## 🛠️ 技术栈

- **前端框架**：[Next.js](https://nextjs.org/)
- **UI 框架**：[React](https://react.dev/)
- **CSS 框架**：[Tailwind CSS](https://tailwindcss.com/)
- **API 集成**：QAnything, WakaTime
- **部署平台**：[Vercel](https://vercel.com/) (推荐)

## 🚀 运行指南

1.  **克隆项目**

    ```bash
    git clone <your-repository-url>
    cd tailwind-app
    ```

2.  **安装依赖**

    ```bash
    npm install
    ```

3.  **运行开发服务器**

    ```bash
    npm run dev
    ```

    打开 [http://localhost:3000](http://localhost:3000) 查看效果。

## 📂 项目结构

项目采用 Next.js 的 App Router 模式，主要文件结构如下：
