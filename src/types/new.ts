import { Record } from './record';
import Tag from './tags';

export default interface New extends Record {
  title: string;
  cover?: string;
  content?: string;
  subtitle?: string;
  tags?: Tag[];
  views: number;
  likes: number;
}
