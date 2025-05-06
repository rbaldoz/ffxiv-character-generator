import Link from 'next/link';
import { Home, Sparkles, Info } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="bg-gray-900 text-white p-4 shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold hover:text-indigo-400">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            FFXIV Character Generator
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="flex items-center gap-1 hover:text-indigo-300">
              <Home className="w-4 h-4" />
              Main
            </Link>
            <Link href="/about" className="flex items-center gap-1 hover:text-indigo-300">
              <Info className="w-4 h-4" />
              About the Project
            </Link>
          </div>
        </div>
      </nav>
      <main className="pt-6">{children}</main>
    </>
  );
}