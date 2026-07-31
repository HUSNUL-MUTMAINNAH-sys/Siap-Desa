import { NavLink } from 'react-router-dom';
import { Home } from 'lucide-react';
import VillageSeal from '../components/ui/VillageSeal.jsx';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <VillageSeal size={100} className="text-desa-green-400 mb-6" />
      <h1 className="text-6xl font-bold text-desa-ink dark:text-white">404</h1>
      <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-sm">
        Halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
      </p>
      <NavLink to="/" className="btn-primary mt-8">
        <Home size={18} /> Kembali ke Beranda
      </NavLink>
    </div>
  );
}
