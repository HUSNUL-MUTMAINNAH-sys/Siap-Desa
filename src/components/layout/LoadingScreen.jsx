import { motion, AnimatePresence } from 'framer-motion';
import VillageSeal from '../ui/VillageSeal.jsx';

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-desa-ink"
        >
          <div className="flex flex-col items-center gap-5 text-white">
            <VillageSeal size={90} className="text-desa-green-300" />
            <div className="text-center">
              <p className="font-semibold tracking-wide">SIAP DESA</p>
              <p className="text-xs text-slate-400">Memuat layanan desa...</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
