import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import LoadingScreen from './components/layout/LoadingScreen.jsx';
import BackToTop from './components/layout/BackToTop.jsx';

import Beranda from './pages/Beranda.jsx';
import PersyaratanSurat from './pages/PersyaratanSurat.jsx';
import Pelayanan from './pages/Pelayanan.jsx';
import BukuTamu from './pages/BukuTamu.jsx';
import FAQ from './pages/FAQ.jsx';
import Kontak from './pages/Kontak.jsx';
import NotFound from './pages/NotFound.jsx';

function PageWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-desa-sand dark:bg-desa-ink text-desa-ink dark:text-white transition-colors duration-300">
      <LoadingScreen show={loading} />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Beranda /></PageWrapper>} />
          <Route path="/persyaratan-surat" element={<PageWrapper><PersyaratanSurat /></PageWrapper>} />
          <Route path="/pelayanan" element={<PageWrapper><Pelayanan /></PageWrapper>} />
          <Route path="/buku-tamu" element={<PageWrapper><BukuTamu /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
          <Route path="/kontak" element={<PageWrapper><Kontak /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </div>
  );
}
