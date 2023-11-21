import { Record } from './record';
import Tag from './tags';

export enum Difficulty {
  STARTER = 'STARTER',
  INTERMIDIATE = 'INTERMIDIATE',
  ADVANCED = 'ADVANCED',
}

export const DifficultyTag = {
  [Difficulty.STARTER]: 'Principiante',
  [Difficulty.INTERMIDIATE]: 'Intermedio',
  [Difficulty.ADVANCED]: 'Avanzado',
};

export default interface Course extends Record {
  title: string;
  provider: string;
  professors?: string;
  redirect: string;
  difficulty: Difficulty;
  tags: Tag[];
}
