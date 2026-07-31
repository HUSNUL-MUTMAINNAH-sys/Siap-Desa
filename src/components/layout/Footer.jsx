import { NavLink } from 'react-router-dom';
import { Landmark, MapPin, Phone, Mail, Clock } from 'lucide-react';
import VillageSeal from '../ui/VillageSeal.jsx';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-desa-ink text-white">
      <div className="pointer-events-none absolute -right-10 -top-10 text-desa-green-300/20">
        <VillageSeal size={220} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 font-bold">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-desa-green-500 to-desa-blue-500">
              <Landmark size={20} />
            </span>
            <span>SIAP DESA</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-slate-300 leading-relaxed">
            Sistem Informasi Administrasi dan Pelayanan Desa — memudahkan warga
            Kabupaten Bantaeng mengakses informasi layanan surat-menyurat secara
            cepat, transparan, dan tanpa biaya.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-desa-green-300">Navigasi</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><NavLink to="/" className="hover:text-white transition-colors">Beranda</NavLink></li>
            <li><NavLink to="/persyaratan-surat" className="hover:text-white transition-colors">Persyaratan Surat</NavLink></li>
            <li><NavLink to="/pelayanan" className="hover:text-white transition-colors">Pelayanan</NavLink></li>
            <li><NavLink to="/buku-tamu" className="hover:text-white transition-colors">Buku Tamu</NavLink></li>
            <li><NavLink to="/faq" className="hover:text-white transition-colors">FAQ</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-desa-green-300">Kontak</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Kantor Desa, Kabupaten Bantaeng, Sulawesi Selatan</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> +62 812-3456-7890</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" /> layanan@siapdesa-bantaeng.id</li>
            <li className="flex gap-2"><Clock size={16} className="mt-0.5 shrink-0" /> Senin–Kamis 08.00–15.00 WITA</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} SIAP DESA — Pemerintah Desa, Kabupaten Bantaeng, Sulawesi Selatan.
      </div>
    </footer>
  );
}
