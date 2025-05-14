// ... existing code ...
import Navbar from "./components/Navbar";
import React from "react";

// 作业卡片组件
function HomeworkCard({ title, desc, link }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 mb-6 transform hover:scale-105">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{desc}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:scale-105 hover:bg-blue-700 transition-all duration-200"
      >
        查看详情
      </a>
    </div>
  );
}

// 页面主组件
export default function HomeworkShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Navbar />
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">Web前端开发课程作业展示</h1>
        {/* 搜索表单 */}
        <form className="mb-8 flex gap-4">
          <input
            type="text"
            placeholder="搜索作业..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:scale-105 hover:bg-blue-700 transition-all duration-200"
          >
            搜索
          </button>
        </form>
        {/* 作业卡片列表 */}
        <HomeworkCard title="作业一：静态网页设计" desc="使用HTML和CSS完成个人主页设计。" link="#" />
        <HomeworkCard title="作业二：响应式布局" desc="实现移动端与桌面端自适应页面。" link="#" />
        <HomeworkCard title="作业三：异步数据交互" desc="用fetch获取并渲染远程数据。" link="#" />
      </main>
    </div>
  );
}
// ... existing code ...