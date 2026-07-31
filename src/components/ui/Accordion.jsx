import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(items?.[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openId === item.id;
        return (
          <Reveal key={item.id} delay={i * 0.05}>
            <div className="card-premium overflow-hidden">
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <span className="font-medium text-desa-ink dark:text-white">{item.pertanyaan}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 grid h-8 w-8 place-items-center rounded-full bg-desa-green-50 dark:bg-white/10 text-desa-green-600 dark:text-desa-green-300"
                >
                  <ChevronDown size={16} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.jawaban}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
