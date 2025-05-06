import { Info, Hammer, Code, Rocket } from 'lucide-react';

export default function About() {
    return (
      <main className="min-h-screen p-6 bg-white">
        <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-4 text-indigo-700">
          <Info className="w-6 h-6" />
          About This Project
        </h1>
          <p>
            This project is for a random character generator based on the MMORPG Final Fantasy XIV! These are the tools I used:
          </p>
          <ul className="list-none space-y-2">
          <li className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-red-500" />
            Built with <strong>Next.js</strong>
          </li>
          <li className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-500" />
            Styled using <strong>Tailwind CSS</strong>
          </li>
          <li className="flex items-center gap-2">
            <Hammer className="w-5 h-5 text-yellow-600" />
            Utilizes <strong>Route</strong> generation
          </li>
        </ul>
        </div>
      </main>
    );
  }
  