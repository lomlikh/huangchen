import "./globals.css";
import Footer from "@/components/Footer"; // 导入 Footer 组件

export const metadata = {
  title: "Web前端开发练习平台", // 更新标题
  description: "《Web前端设计》课程练习成果展示", // 更新描述
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head></head>
      <body className={` antialiased bg-slate-50 flex flex-col min-h-screen`}>
        <div className="flex-grow flex flex-row">
          <main className="flex-grow p-4">
            {children}
          </main>
          <aside className="w-1/3 max-w-md p-4 border-l bg-white flex flex-col">
            <h2 className="text-lg font-semibold mb-4 flex-shrink-0">智能体</h2>
            <div className="flex-grow">
              <iframe
                src="https://ai.youdao.com/saas/qanything/#/bots/BEAC432AE9BC468B/share"
                className="w-full h-full border-0"
                title="智能体"
              />
            </div>
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
}
