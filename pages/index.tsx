import { useRouter } from 'next/router';
import Link from 'next/link';
import { Sparkles, Info, Home} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  const handleGenerate = async () => {
    const res = await fetch('/api/generate');
    const data = await res.json();
    router.push(`/character/${data.id}`);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 text-center">
        <Home className = "w-10 h-10 text-indigo-400 mb-2" />
      <h1 className="text-4xl font-bold mb-4">Final Fantasy XIV Random Character Generator</h1>
      <p className="mb-4 text-lg">Quickly generate your own Eorzean hero!</p>
      <button
        onClick={handleGenerate}
        className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-bold flex items-center text-sm"
      >
        Generate a chracter...
        <Sparkles className="w-10 h-5" />
      </button>
      <Link href="/about" className="mt-4 flex items-center text-sm text-blue-400 hover:underline">
      <Info className='w-5 h-4 mr-1 /'></Info> About this project →
</Link>

    </main>
  );
}
