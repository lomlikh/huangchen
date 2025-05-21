"use client"; // 添加这行指令

import Navbar from "./components/Navbar";
import ExerciseCard from "./components/ExerciseCard";
import exercises from "./data/exercises.json";
import React, { useState } from "react"; // 确保 React 和 useState 被导入

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // 搜索GitHub仓库
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data.items || []);
    } catch (err) {
      console.error("Failed to fetch GitHub repositories:", err); // 添加错误处理
      setResults([]);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            《Web前端开发》课程练习
          </h1>
          <p className="text-lg text-slate-600">
            欢迎来到课程练习展示平台，这里汇集了各个阶段的学习成果。
          </p>
        </header>
        {/* 搜索表单 */}
        <form className="mb-8 flex gap-4" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="搜索GitHub仓库..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:scale-105 hover:bg-blue-700 transition-all duration-200"
          >
            搜索
          </button>
        </form>
        {/* 搜索结果或本地练习卡片 */}
        {loading && <div className="text-center text-gray-500">正在搜索...</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(results.length > 0 ? results : exercises).map((item) => (
            <ExerciseCard
              key={item.id || item.full_name} // 使用 item.full_name 作为 GitHub repo 的 key
              title={item.title || item.full_name}
              description={item.description}
              imageUrl={item.imageUrl || (item.owner && item.owner.avatar_url)}
              link={item.link || item.html_url}
              tags={item.tags || item.topics || []}
            />
          ))}
        </div>
      </main>
      {/* Footer 组件将在 layout.js 中添加 */}
    </div>
  );
}