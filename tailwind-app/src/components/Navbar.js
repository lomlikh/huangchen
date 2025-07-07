import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-slate-800 hover:text-rose-600 transition-colors">
          Web前端技术课程练习
        </Link>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="text-slate-600 font-medium hover:text-rose-600 transition-colors pb-1 border-b-2 border-transparent hover:border-rose-600">
              首页
            </Link>
          </li>
          <li>
            <Link href="/exercises" className="text-slate-600 font-medium hover:text-rose-600 transition-colors pb-1 border-b-2 border-transparent hover:border-rose-600">
              练习
            </Link>
          </li>
          <li>
            <Link href="/07-async练习.html" className="text-slate-600 font-medium hover:text-rose-600 transition-colors pb-1 border-b-2 border-transparent hover:border-rose-600">
              GitHub 统计
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}