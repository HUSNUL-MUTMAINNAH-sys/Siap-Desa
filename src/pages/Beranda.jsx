import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, FileText, ShieldCheck, Users, MapPin } from 'lucide-react';
import Reveal from '../components/ui/Reveal.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import VillageSeal from '../components/ui/VillageSeal.jsx';
import pelayananData from '../data/pelayananData.json';
import suratData from '../data/suratData.json';

const stats = [
  { label: 'Jenis Layanan Surat', value: '6', icon: FileText },
  { label: 'Tanpa Biaya', value: '100%', icon: ShieldCheck },
  { label: 'Warga Terlayani / Tahun', value: '1.200+', icon: Users },
];

export default function Beranda() {
  return (
    <div>
      {/* HERO FULLSCREEN */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 bg-gradient-to-b from-desa-green-50 via-white to-white dark:from-desa-ink dark:via-desa-ink dark:to-[#0A2E1D]">
        <div className="absolute inset-0 bg-anyaman opacity-70 dark:opacity-20" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 top-24 text-desa-green-500/10 dark:text-desa-green-300/10 hidden md:block">
          <VillageSeal size={340} />
        </div>
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-desa-blue-200/30 dark:bg-desa-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-eyebrow"
            >
              <MapPin size={14} /> Kabupaten Bantaeng, Sulawesi Selatan
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-desa-ink dark:text-white"
            >
              Pelayanan Desa,
              <span className="block bg-gradient-to-r from-desa-green-600 to-desa-blue-600 bg-clip-text text-transparent">
                Kini Lebih Dekat.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-lg text-slate-600 dark:text-slate-300 text-lg"
            >
              SIAP DESA menghadirkan informasi persyaratan surat, alur pelayanan,
              dan Buku Tamu digital untuk warga desa secara transparan, cepat,
              dan mudah diakses kapan saja.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <NavLink to="/pelayanan" className="btn-primary">
                Lihat Layanan <ArrowRight size={18} />
              </NavLink>
              <NavLink to="/persyaratan-surat" className="btn-secondary">
                Cek Persyaratan Surat
              </NavLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-4 max-w-md"
            >
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-3 text-center">
                  <s.icon className="mx-auto mb-1 text-desa-green-600 dark:text-desa-green-300" size={20} />
                  <p className="text-lg font-bold">{s.value}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Jam Operasional Card - Dashboard style */}
          <Reveal delay={0.2}>
            <div className="card-premium p-6 md:p-8 max-w-md ml-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-desa-blue-500 text-white">
                  <Clock size={20} />
                </span>
                <div>
                  <p className="font-semibold">Jam Operasional</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Kantor Desa Bantaeng</p>
                </div>
              </div>
              <div className="space-y-3">
                {pelayananData.jamOperasional.map((j) => (
                  <div key={j.hari} className="flex items-center justify-between rounded-xl bg-desa-green-50 dark:bg-white/5 px-4 py-3 text-sm">
                    <span className="font-medium text-slate-700 dark:text-slate-200">{j.hari}</span>
                    <span className={j.jam === 'Tutup' ? 'text-red-500 font-medium' : 'text-desa-green-700 dark:text-desa-green-300 font-medium'}>
                      {j.jam}
                    </span>
                  </div>
                ))}
              </div>
              <NavLink to="/kontak" className="mt-6 w-full btn-primary !bg-desa-blue-500 hover:!bg-desa-blue-600">
                Hubungi Kantor Desa
              </NavLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LAYANAN UNGGULAN */}
      <section className="py-24 px-5 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Layanan Unggulan"
            title="Enam Jenis Surat, Satu Pintu Pelayanan"
            subtitle="Semua persyaratan, estimasi waktu, dan biaya ditampilkan secara transparan agar warga tidak perlu bolak-balik."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suratData.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.08}>
                <div className="card-premium p-6 h-full flex flex-col">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-desa-green-50 dark:bg-white/5 text-desa-green-600 dark:text-desa-green-300 font-bold text-lg mb-4">
                    {s.nama.charAt(0)}
                  </span>
                  <h3 className="font-semibold text-lg">{s.nama}</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 flex-1">{s.deskripsi}</p>
                  <div className="mt-4 flex items-center justify-between text-xs font-medium text-desa-blue-600 dark:text-desa-blue-300">
                    <span>{s.estimasi}</span>
                    <span>{s.biaya}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3} className="mt-10 text-center">
            <NavLink to="/persyaratan-surat" className="btn-primary">
              Lihat Semua Persyaratan <ArrowRight size={18} />
            </NavLink>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
