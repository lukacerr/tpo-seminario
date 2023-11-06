import { Record } from '../types/record';

export const parseExpand = <T extends Record>(v: T | T[]): T[] => {
  const pE = (v: T) => (v.expand ? Object.assign(v, v.expand) : v);
  return Array.isArray(v) ? v.map(pE) : [pE(v)];
};
