import Post from './post';
import { Record } from './record';
import User from './user';

export default interface Comment extends Record {
  user?: User;
  post?: Post;
  content: string;
}
