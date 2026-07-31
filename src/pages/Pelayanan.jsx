import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import Timeline from '../components/ui/Timeline.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import pelayananData from '../data/pelayananData.json';

export default function Pelayanan() {
  return (
    <div className="pt-32 pb-24 px-5 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Alur Pelayanan"
          title={pelayananData.judul}
          subtitle={pelayananData.subjudul}
        />

        <div className="mt-16">
          <Timeline steps={pelayananData.tahapan} />
        </div>

        <Reveal delay={0.2} className="mt-16 card-premium p-8 text-center bg-gradient-to-br from-desa-green-500 to-desa-blue-500 !border-none">
          <h3 className="text-xl font-bold text-white">Sudah siapkan berkas Anda?</h3>
          <p className="mt-2 text-white/90 text-sm max-w-md mx-auto">
            Cek kembali daftar persyaratan sebelum datang ke Kantor Desa agar
            proses pelayanan berjalan lebih cepat.
          </p>
          <NavLink
            to="/persyaratan-surat"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-desa-green-700 shadow-premium hover:-translate-y-0.5 transition-transform"
          >
            Cek Persyaratan Surat <ArrowRight size={18} />
          </NavLink>
        </Reveal>
      </div>
    </div>
  );
}
