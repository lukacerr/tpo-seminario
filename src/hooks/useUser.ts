import { useEffect, useState } from 'react';
import User from '../types/user';

const [PRIVATE_ROUTES, REDIRECT_AUTH_ROUTES] = [
  ['perfil', 'ajustes', 'publicar', 'mensajes'],
  ['ingresar', 'registrarse'],
];

export default function useUser() {
  const [session, setSession] = useState<User | null>(null);

  const login = (u?: User) => {
    u = u || {
      name: 'Luka Cerrutti',
      email: 'lukacerrutti2002@gmail.com',
      avatar: 'https://i.stack.imgur.com/QNCS3.png',
    };

    localStorage.setItem('user', JSON.stringify(u));
    setSession(u);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setSession(null);
  };

  useEffect(() => {
    const u = localStorage.getItem('user');
    const pathname = window.location.pathname.split('/')[1];

    if (!u && PRIVATE_ROUTES.includes(pathname)) location.replace('/ingresar');
    if (u && REDIRECT_AUTH_ROUTES.includes(pathname)) location.replace('/');

    setSession(u ? JSON.parse(u) : null);
  }, []);

  return { session, login, logout };
}
