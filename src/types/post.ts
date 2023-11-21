import { Record } from './record';
import Tag from './tags';
import User from './user';

export default interface Post extends Record {
  title: string;
  content?: string;
  tags?: Tag[];
  user?: User;
  views: number;
  likes: number;
}
