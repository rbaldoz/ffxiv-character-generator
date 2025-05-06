import { GetServerSideProps } from 'next';
import { generateCharacter } from '../../lib/generator';
import { User, Shield, Globe, Sparkles, Wand2, RefreshCcw} from 'lucide-react';


export default function CharacterPage({ character }: any) {
  return (
    <main className="min-h-screen bg-white p-6">
      <div className="max-w-xl mx-auto bg-blue-100 p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"> <User className="w-6 h-6" /> Your FFXIV Character:
        </h1>
        <ul className="space-y-2 text-lg">
        <li className="flex items-center gap-2">
            <User className="w-5 h-5 text-indigo-500" />
            <strong>Race:</strong> {character.race}
          </li>
          <li className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-green-500" />
            <strong>Clan:</strong> {character.clan}
          </li>
          <li className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-500" />
            <strong>Class:</strong> {character.job}
          </li>
          <li className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <strong>Starting City:</strong> {character.homeland}
          </li>
          <li className="flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-purple-500" />
            <strong>Quirk:</strong> {character.quirk}
          </li>
          <li className="flex items-center gap-2">
            <RefreshCcw className="w-5 h-5 text-purple-500" />
            <strong>Refresh the page to use the generator again!</strong>
          </li>
        </ul>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const character = generateCharacter(id as string);
  return { props: { character } };
};
