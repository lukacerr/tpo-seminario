import { Record } from './record';

export default interface User extends Record {
  name?: string;
  username?: string;
  email: string;
  avatar?: string;
  description?: string;
  bio?: string;
}
