import type { NextApiRequest, NextApiResponse } from 'next';
import { generateCharacter } from '../../lib/generator';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const character = generateCharacter();
  res.status(200).json(character);
}
