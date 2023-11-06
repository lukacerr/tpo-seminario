import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Fallback from './components/Fallback';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// lazy load each container
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Forgot = lazy(() => import('./pages/Forgot'));
const Orders = lazy(() => import('./pages/TODO')); // FIME import('./pages/Orders'));
const Settings = lazy(() => import('./pages/Settings'));
const Profile = lazy(() => import('./pages/Profile'));
const Uploads = lazy(() => import('./pages/TODO')); // FIXME import('./pages/Uploads'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Messages = lazy(() => import('./pages/TODO')); // FIXME import('./pages/Messages'));
const Rentals = lazy(() => import('./pages/TODO')); // FIXME import('./pages/Rentals'));

export default function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Fallback />}>
      <Routes key={location.pathname} location={location}>
        <Route path="/acerca-de" element={<Home />} />

        <Route path="/ingresar" element={<Login />} />

        <Route path="/registrarse" element={<Register />} />

        <Route path="/olvide-contraseña" element={<Forgot />} />

        {/*
        <Route path="/" element={<Dashboard />} />
        */}

        <Route path="/cursos" element={<Orders />} />
        <Route path="/cursos/:id" element={<Orders />} />

        <Route path="/noticias" element={<Gallery />} />
        <Route path="/noticias/:id" element={<Gallery />} />

        <Route path="/ajustes" element={<Settings />} />

        <Route path="/perfil" element={<Profile />} />

        <Route path="/publicar" element={<Uploads />} />

        <Route path="/mensajes" element={<Messages />} />

        <Route path="/" element={<Rentals />} />

        {/*
        <Route path="/fallback" element={<Fallback />} />
        */}

        <Route path={`*`} element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
