import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Landmark } from 'lucide-react';
import useDarkMode from '../../hooks/useDarkMode.js';

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/persyaratan-surat', label: 'Persyaratan Surat' },
  { to: '/pelayanan', label: 'Pelayanan' },
  { to: '/buku-tamu', label: 'Buku Tamu' },
  { to: '/faq', label: 'FAQ' },
  { to: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-premium py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <NavLink to="/" className="flex items-center gap-2.5 font-bold text-desa-ink dark:text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-desa-green-500 to-desa-blue-500 text-white shadow-premium">
            <Landmark size={20} strokeWidth={2.4} />
          </span>
          <span className="leading-tight">
            <span className="block text-base">SIAP DESA</span>
            <span className="block text-[11px] font-normal text-slate-500 dark:text-slate-400">
              Kab. Bantaeng
            </span>
          </span>
        </NavLink>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  isActive
                    ? 'text-desa-green-700 dark:text-desa-green-300'
                    : 'text-slate-600 dark:text-slate-300 hover:text-desa-green-600 dark:hover:text-desa-green-300'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-desa-green-50 dark:bg-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Ganti mode tampilan"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-200 hover:bg-desa-green-50 dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <NavLink to="/pelayanan" className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm">
            Layanan
          </NavLink>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white"
            aria-label="Buka menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden glass mx-4 mt-2 rounded-2xl"
          >
            <div className="flex flex-col p-3">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium ${
                      isActive
                        ? 'bg-desa-green-50 dark:bg-white/10 text-desa-green-700 dark:text-desa-green-300'
                        : 'text-slate-600 dark:text-slate-300'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
