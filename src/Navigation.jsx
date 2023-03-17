import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

const Navigation = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  </Suspense>
);

export default Navigation;
